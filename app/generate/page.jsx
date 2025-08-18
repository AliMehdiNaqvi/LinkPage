"use client";

import { useState, Suspense } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function GenerateContent() {
  const searchparams = useSearchParams();
  const [links, setlinks] = useState([{ linkURL: "", linkText: "" }]);
  const [linkHandle, setlinkHandle] = useState(searchparams.get("handle") || "");
  const [linkImage, setlinkImage] = useState("");
  const [desc, setdesc] = useState("");
  const [successfullyCreated, setSuccessfullyCreated] = useState(false);

  const handleChange = (index, linkText, linkURL) => {
    setlinks((initialLinks) =>
      initialLinks.map((item, i) => (i === index ? { linkURL, linkText } : item))
    );
  };

  const addLink = () => {
    setlinks([...links, { linkText: "", linkURL: "" }]);
  };

  const sumbitLinks = async (links, linkHandle, linkImage) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      Link: links,
      linkHandle: linkHandle,
      image: linkImage,
      desc: desc,
    });

    const r = await fetch("/api/add", {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    });
    const result = await r.json();

    if (result.success) {
      toast.success(result.message);
      setlinks([]);
      setlinkImage("");
      setSuccessfullyCreated(true);
    } else {
      toast.error(result.message);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-300 via-pink-300 to-blue-400 flex flex-col items-center justify-center p-4 sm:p-6">
      <motion.div
        className="max-w-4xl w-full bg-white shadow-2xl rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="https://greatcontent.com/wp-content/uploads/2022/07/photo-1611162617213-7d7a39e9b1d7-1024x768.jpg"
            width={500}
            height={400}
            alt="Link generation"
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
          />
        </div>

        {/* Form */}
        <div className="w-full md:w-1/2 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-300 to-blue-400 bg-clip-text text-transparent leading-snug">
            Generate your LinkPage with just one click!
          </h1>

          {/* Step 1 */}
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-700 mb-4 sm:mb-6">
            Step 1 - Claim your Handle
          </h2>
          <input
            type="text"
            placeholder="Claim your handle"
            className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 text-gray-700 text-sm sm:text-base"
            value={linkHandle}
            onChange={(e) => setlinkHandle(e.target.value)}
          />

          {/* Step 2 */}
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-700 mb-4 sm:mb-6">
            Step 2 - Enter your links
          </h2>
          {links.map((item, index) => (
            <div key={index} className="flex flex-col sm:flex-row gap-3 w-full">
              <input
                type="text"
                placeholder="Enter link text"
                className="flex-1 px-4 py-3 mb-4 sm:mb-0 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 text-gray-700 text-sm sm:text-base"
                value={item.linkText || ""}
                onChange={(e) => handleChange(index, e.target.value, item.linkURL)}
              />
              <input
                type="url"
                placeholder="Enter the link"
                className="flex-1 px-4 py-3 mb-4 sm:mb-6 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700 text-sm sm:text-base"
                value={item.linkURL || ""}
                onChange={(e) => handleChange(index, item.linkText, e.target.value)}
              />
            </div>
          ))}
          <button
            className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500 text-white font-semibold h-[40px] w-full sm:w-[140px] my-2 rounded-full shadow-lg transition duration-300 text-sm sm:text-base"
            onClick={addLink}
          >
            Add Link
          </button>

          {/* Step 3 */}
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-700 mb-4 sm:mb-6">
            Step 3 - Enter the link to image
          </h2>
          <input
            type="url"
            placeholder="Enter the link"
            className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700 text-sm sm:text-base"
            value={linkImage}
            onChange={(e) => setlinkImage(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter your description"
            className="w-full px-4 py-3 mb-6 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700 text-sm sm:text-base"
            value={desc}
            onChange={(e) => setdesc(e.target.value)}
          />

          {/* Submit */}
          <button
            disabled={
              linkImage.trim() === "" ||
              linkHandle.trim() === "" ||
              links.some((link) => link.linkText.trim() === "" || link.linkURL.trim() === "")
            }
            className="disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500 text-white font-semibold py-3 px-6 sm:px-8 w-full sm:w-auto rounded-full shadow-lg transition duration-300 text-sm sm:text-base"
            onClick={() => sumbitLinks(links, linkHandle, linkImage)}
          >
            Generate your LinkPage
          </button>

          {successfullyCreated && (
            <Link href={`/${linkHandle}`}>
              <button className="w-full sm:w-auto my-4 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500 text-white font-semibold py-3 px-6 sm:px-8 rounded-full shadow-lg transition duration-300 text-sm sm:text-base">
                View your LinkPage
              </button>
            </Link>
          )}
        </div>
        <ToastContainer />
      </motion.div>
    </main>
  );
}

export default function GeneratePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GenerateContent />
    </Suspense>
  );
}
