import './HeroSection.scss';
import HeroBanner from '../../Components/HeroBanner';
import HeroForm from '../../Components/HeroForm';


function HeroSection() {
    return (
        <div className="container">
            <div className="hero-section">
                <HeroBanner />
                <HeroForm />
            </div>
        </div>
    )
}

export default HeroSection;