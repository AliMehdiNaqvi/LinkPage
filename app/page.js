import CreatorDream from "./Components/CreatorDream";
import Hero from "./Components/Hero";
import LinksList from "./Components/Linkslist";
import Navbar from "./Components/Navbar";
import TrustedByCreators from "./Components/TrustedByCreators";
import Value from "./Components/Value";


export default function Home() {
  return (
    <>

<Hero/>
{/* <div className="bg-blue-600 h-[50vh] ">
<LinksList/>
</div> */}
<CreatorDream/>
<Value/>
<TrustedByCreators/>
    </>
  );
}
