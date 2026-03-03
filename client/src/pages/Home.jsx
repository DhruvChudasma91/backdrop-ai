import Header from "../components/Header";
import BgRemovalSteps from "../components/BgRemovalSteps";
import BgSlider from "../components/BgSlider";
import Pricing from "../components/Pricing";

const Home = () => {
    return (
        <div className="max-w-7xl mx-auto mt-8 px-4 sm:px-6 lg:px-8 py-16 font-['Outfit']">

            {/* Hero Section */}
            <Header />

            {/* Background removal steps section */}
            <BgRemovalSteps />

            {/* Background removal slider section */}
            <BgSlider />

            {/* Buy credits plan section */}
            <Pricing />

            {/* User testimonials section */}

            {/* Try Now section */}
        </div>
    )
}

export default Home;