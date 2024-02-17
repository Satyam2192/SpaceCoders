import Blog from "./Blog";
import Features from "./Features";
import Quest from "./Quest";
import Fild_area from '../../components/Home_components/Fild_area';
import HeroSection from '../../components/Home_components/heroSection'; 

const Home = () => {
    return (
        <div className=" "> 
            <HeroSection/>
        <Fild_area/>
            <Features />
            <Blog />
            <Quest />
        </div>
    )
}

export default Home;