import Blog from "./Blog";
import Features from "./Features";
import Hero from "./Hero";
import Quest from "./Quest"; 

const Home = () => {
    return (
        <div>
            <Hero />
            <Features />
            <Blog />
            <Quest />
        </div>
    )
}

export default Home;