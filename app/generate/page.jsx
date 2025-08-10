"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ToastContainer, toast } from 'react-toastify';
import { useSearchParams } from "next/navigation";
import Link from "next/link";


export default function GeneratePage() {
  const searchparams=useSearchParams()
  const [links, setlinks] = useState([{ linkURL: "", linkText: "" }]);
  const [linkHandle, setlinkHandle] = useState(searchparams.get('handle') || "");
  const [linkImage, setlinkImage] = useState("");
   const [desc, setdesc] = useState("");
  const [successfullyCreated, setSuccessfullyCreated] = useState(false);

  const handleChange = (index, linkText, linkURL) => {
    setlinks((initialLinks) => {

      return initialLinks.map((item, i) => {
        if (i == index) {
          return { linkURL, linkText }
        }
        else {
          return item
        }
      })
    })
  }



  const addLink = () => {
    setlinks(links.concat([{ linkText: "", linkURL: "" }]))
  }

  const sumbitLinks = async (links, linkHandle, linkImage) => {
    
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "Link": links,
      "linkHandle": linkHandle,
      "image": linkImage,
      "desc" : desc

    });
    console.log(raw)

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    const r = await fetch("/api/add", requestOptions)
    const result = await r.json()
    if (result.success) {
      toast.success(result.message)
      setlinks([])
      // setlinkHandle("")
      setlinkImage("")
      setSuccessfullyCreated(true)
      

    }
    else {
      toast.error(result.message)
    }



  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-300 via-pink-300 to-blue-400 flex flex-col items-center justify-center p-6">
      <motion.div
        className="max-w-4xl w-full bg-white shadow-2xl rounded-3xl p-10 flex flex-col md:flex-row items-center gap-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Embedded Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="https://greatcontent.com/wp-content/uploads/2022/07/photo-1611162617213-7d7a39e9b1d7-1024x768.jpg"
            width={500}
            height={400}
            alt="Link generation"
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 text-center">
          <h1 className="text-3xl md:text-4xl font-bold  mb-6 bg-gradient-to-r from-purple-400 via-pink-300 to-blue-400 bg-clip-text text-transparent">
            Generate your LinkPage with just one click!
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-gray-700 mb-6">
            Step1- Claim your Handle
          </h2>


          <input
            type="text"
            placeholder="Claim your handle"
            className="w-full px-5 py-3 mb-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 text-gray-700"
            value={linkHandle}
            onChange={(e) => setlinkHandle(e.target.value)}
          />

          <h2 className="text-xl md:text-2xl font-bold text-gray-700 mb-6">
            Step2- Enter your  links
          </h2>




          {links && links.map((item, index) => {
            return <div key={index} className="flex flex-row gap-3">

              <input
                type="text"
                placeholder="Enter link text"
                className="w-full px-5 py-3 mb-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 text-gray-700"
                value={item.linkText || ""}
                onChange={(e) => handleChange(index, e.target.value, item.linkURL)}
              />

              <input
                type="url"
                placeholder="Enter the link"
                className="w-full px-5 py-3 mb-6 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
                value={item.linkURL || ""}
                onChange={(e) => handleChange(index, item.linkText, e.target.value)}
              />


            </div>
          })}
          <button

            className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500 text-white font-semibold h-[40px] w-[140px] my-1 rounded-full shadow-lg transition duration-300" onClick={() => addLink()}
          >
            Add Link
          </button>

          <h2 className="text-xl md:text-2xl font-bold text-gray-700 mb-6">
            Step3- Enter the link to image
          </h2>
          <input
            type="url"
            placeholder="Enter the link"
            className="w-full px-5 py-3 mb-6 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
            value={linkImage}
            onChange={(e) => setlinkImage(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter your description"
            className="w-full px-5 py-3 mb-6 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
            value={desc}
            onChange={(e) => setdesc(e.target.value)}
          />



          <button
            disabled={
              linkImage.trim() === "" ||
              linkHandle.trim() === "" ||
              links.some(link => link.linkText.trim() === "" || link.linkURL.trim() === "")
            }

            className={ `disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none  bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 cursor-pointer`} onClick={() => { sumbitLinks(links, linkHandle, linkImage) }}
          >
            Generate your LinkPage
          </button>
          
          
           { successfullyCreated && <Link href={`/${linkHandle}`}><button
            

            className={ `disabled:opacity-50 my-4 disabled:cursor-not-allowed disabled:pointer-events-none  bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 cursor-pointer`} 
          >
            View your LinkPage
          </button></Link>} 

          
        </div>
        <ToastContainer />
      </motion.div>
    </main>
  );
}
