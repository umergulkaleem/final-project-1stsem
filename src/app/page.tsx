import Navbar from "./Components/Navbar";
import Herosection from "./Components/Herosection";
import Sidetable from "./Components/Sidetable";
import Foryou from "./Components/Foryou";
import Newarrival from "./Components/Newarrival";
import Ourblog from "./Components/Ourblog";
import Socials from "./Components/Socials";
import Footer from "./Components/Footer";
export default function Home() {
  return (
    <div className=" ">
      {/* width is not ok */}
      <div className=" lg:w-[1540px] bg-[#FBEBB5]">
        <Navbar />
        <Herosection />
      </div>
      <div>
        <Sidetable />
      </div>
      <div>
        <Foryou />
      </div>
      <div>
        <Newarrival />
      </div>
      <div>
        <Ourblog />
      </div>
      <div>
        <Socials />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
