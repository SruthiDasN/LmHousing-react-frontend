import './Hero.css';
import { HiLocationMarker } from 'react-icons/hi';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container ">
            
            <div className="flexColStart hero-left">
                <div className="hero-title">
                    <div className="orange-circle" /> 

                    {/* adding animation to h1 */}

                    <motion.h1
                        initial={{y: '2rem', opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{
                            duration: 4,
                            type: 'spring'
                        }}
                    >                  
                                      
                    Discover <br />
                    Your Dream <br />Property
                    </motion.h1>
                </div>
                <div className="flexColStart hero-des">
                    <span className='secondaryText'>Find a variety of properties that suit you very easily</span>
                    <span className='secondaryText'>Forget all difficulties in finding a residence for you</span>
                </div>

                <div className="flexCenter search-bar">
                    <HiLocationMarker color="var(--blue)" size={25}/>
                    <input type="text" />
                    <button className="button">Search</button>
                </div>

                
                {/* numbers - CountUp library used here*/}

                <div className="flexCenter stats">
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={8000} end={9000} duration={4} />
                            <span> +</span>
                        </span>
                        <span className='secondaryText'>Premium Products</span>
                    </div>

                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={1000} end={2000} duration={4} />
                            <span> +</span>
                        </span>
                        <span className='secondaryText'>Happy Customer</span>
                    </div>

                    <div className="flexColCenter stat">
                        <span>
                            <CountUp end={20} />
                            <span> +</span>
                        </span>
                        <span className='secondaryText'>Award Winning</span>
                    </div>
                </div>
                
            </div>


            <div className="flexCenter hero-right">
                <motion.div
                initial={{x: "7rem", opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{
                    duration: 4,
                    type: "spring"
                }}
                 className="image-container">
                    <img src="./main.jpg" alt="hero image" />
                </motion.div>

            </div>
        </div>
    </section>
  )
}

export default Hero