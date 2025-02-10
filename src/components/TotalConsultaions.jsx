import CountUp from 'react-countup';
import { motion } from "framer-motion";

const TotalConsultaions = () => {
    return (

        <div className="card lg:card-side bg-base-100 shadow-xl pb-4 ">
            <motion.div
                animate={{
                    x: [0, -10, 0, 10, 0], // Move left (-10) and right (10), back to 0
                }}
                transition={{
                    duration: 2,        // Duration of one shake cycle
                    repeat: Infinity,  
                    repeatType: "loop",
                    ease: "easeInOut", 
                }}
            >
                <figure className='w-[300px] h-full object-cover mx-auto rounded-tl-4xl rounded-br-4xl'>
                    <img
                        src={'https://plus.unsplash.com/premium_vector-1716902818044-90a5366a5962?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D'}
                        alt="Album"
                    />
                </figure>
            </motion.div>
            <div className="card-body">
                <h2 className="card-title justify-center text-4xl lg:mt-20">Total Car Provided</h2>
                <div className='grow flex justify-center items-center lg:mb-20'>
                    <CountUp
                        start={0}
                        end={2613}
                        duration={16}
                        suffix="+"
                        enableScrollSpy={true}
                        scrollSpyDelay={100}
                        scrollSpyOnce={true}
                    >
                        {({ countUpRef }) => (
                            <div className='text-3xl font-bold my-5 btn h-auto px-6 py-2 btn-active'>
                                <span ref={countUpRef} />
                            </div>
                        )}
                    </CountUp>
                </div>
                <div className="card-actions justify-end">
                    <a href="">
                        <button className="btn btn-primary">Discover</button>
                    </a>
                </div>
            </div>
        </div>

    );
};

export default TotalConsultaions;
