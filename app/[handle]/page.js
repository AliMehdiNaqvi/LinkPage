
import Link from "next/link";
import clientPromise from "@/lib/mongodb";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const rawHandle = params.handle;
  const handle = decodeURIComponent(rawHandle); // <== This fixes %20 to space
  const client = await clientPromise;
  const db = client.db("LinkPage");
  const collection = db.collection("link");
  // if handle is already claimed then do not reclaim it.
  const item = await collection.findOne({ linkHandle: handle });
  if (!item) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-blue-400 to-blue-500 text-black font-bold text-xl">
      {item && (
        <div className="flex flex-col justify-start items-center py-10 px-4 sm:px-6">
          <img
            className="w-32 sm:w-40 md:w-48 rounded-full shadow-xl shadow-blue-900"
            src={item.image}
            alt="profile"
          />
          <p className="font-bold text-white my-4 text-base sm:text-lg md:text-xl">
            @{item.linkHandle}
          </p>
          <p className="font-bold text-black my-2 text-sm sm:text-base md:text-lg w-full sm:w-3/4 md:w-1/2 flex justify-center items-center text-center px-2">
            {item.desc}
          </p>
          {item.Link.map((item, index) => {
            return (
              <Link key={index} href={item.linkURL}>
                <div
                  key={index}
                  className="py-3 px-4 font-bold bg-gray-200 rounded-md my-3 w-full sm:w-96 flex justify-center items-center shadow-lg shadow-blue-800 text-center"
                >
                  {item.linkText}
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
