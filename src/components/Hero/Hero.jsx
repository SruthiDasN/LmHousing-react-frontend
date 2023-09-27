import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container ">
            <div className="flexColStart hero-left">
                <div className="hero-title">
                    <div className="orange-circle" />
                
                    
                    <h1>Discover <br />Your Dream <br />Property</h1>
                </div>
                <div className="flexColStart hero-des">
                    <span>Find a variety of properties that suit you very easily</span>
                    <span>Forget all difficulties in finding a residence for you</span>
                </div>
            </div>
            <div className="flexCenter hero-right">
                <div className="image-container">
                    <img src="./main.jpg" alt="hero image" />
                </div>

            </div>
        </div>
    </section>
  )
}

export default Hero