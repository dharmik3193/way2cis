import AboutHome from "../Components/AboutHome";
import Calltoaction from "../Components/Calltoaction";
import Contact from "../Components/Contact";
import Counter from "../Components/Counter";
import Features from "../Components/Features";
import FlipboxServices from "../Components/FlipboxServices";
import Footer from "../Components/Footer";
import Header from "../Components/Header"
import Headerdemo from "../Components/Headerdemo";
import Process from "../Components/Process";
import Slider from "../Components/Slider";
import Sliderdemo from "../Components/Sliderdemo";
import Subscribe from "../Components/Subscribe";
import Team from "../Components/Team";
import Testimonial from "../Components/Testimonial";

const Home = () => {
     return (
          <>
               {/* <Header /> */}
               <Headerdemo />
               {/* <Slider /> */}
               <Sliderdemo />
               <Features />
               <AboutHome />
               <FlipboxServices />
               <Team />
               <Process />
               <Calltoaction />
               <Counter />
               <Testimonial />
               <Contact />
               <Subscribe />
               <Footer />
          </>
     )
}

export default Home;