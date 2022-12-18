import Features from "../Components/Features";
import Header from "../Components/Header"
import Headerdemo from "../Components/Headerdemo";
import Slider from "../Components/Slider";
import Sliderdemo from "../Components/Sliderdemo";

const Home = () => {
     return (
          <>
               {/* <Header /> */}
               <Headerdemo />
               {/* <Slider /> */}
               <Sliderdemo />
               <Features />
          </>
     )
}

export default Home;