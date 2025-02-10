import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from "../provider/AuthProvider";

const Banner = () => {
    const {loading ,setLoading} = useContext(AuthContext);
    return (
        <div className="carousel w-full max-h-[900px] my-5 relative">
        <div id="slide1" className="carousel-item relative w-full">
            <img
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhcnN8ZW58MHx8MHx8fDA%3D"
                className="w-full object-cover" />
            <div className="absolute inset-0 bg-opacity-40 flex flex-col items-center justify-center ">
                <h2 className="text-white text-4xl md:text-6xl font-bold font-['Limelight'] tracking-wider drop-shadow-[2px_2px_8px_rgba(0,0,0,0.75)] border-4 border-white p-4">
                Drive Your Dreams Today!
                </h2>
                <button className="btn mt-5 "  ><Link to="/allservice" onClick={() => setLoading(true)}>Available cars</Link></button>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide4" className="btn btn-circle">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
            <img
                src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D"
                className="w-full object-cover" />
            <div className="absolute inset-0  bg-opacity-40 flex items-center justify-center flex-col">
                <h2 className="text-white text-4xl md:text-6xl font-bold font-['Limelight'] tracking-wider drop-shadow-[2px_2px_8px_rgba(0,0,0,0.75)] border-4 border-white p-4">
                Your Next Car Awaits You
                </h2>
                <button className="btn mt-5 "  ><Link to="/allservice" onClick={() => setLoading(true)}>Available cars</Link></button>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide1" className="btn btn-circle">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
            <img
                src="https://images.unsplash.com/photo-1493238792000-8113da705763?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhcnN8ZW58MHx8MHx8fDA%3D"
                className="w-full object-cover object-bottom" />
            <div className="absolute inset-0  bg-opacity-40 flex items-center justify-center flex-col">
                <h2 className="text-white text-4xl md:text-6xl font-bold font-['Limelight'] tracking-wider drop-shadow-[2px_2px_8px_rgba(0,0,0,0.75)] border-4 border-white p-4">
                    Fell the Speed!!!!
                </h2>
                <button className="btn mt-5 "  ><Link to="/allservice" onClick={() => setLoading(true)}>Available cars</Link></button>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide2" className="btn btn-circle">❮</a>
                <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
            <img
                src="https://images.unsplash.com/photo-1493238792000-8113da705763?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhcnN8ZW58MHx8MHx8fDA%3D"
                className="w-full object-cover object-top" />
            <div className="absolute inset-0  bg-opacity-40 flex items-center justify-center flex-col">
                <h2 className="text-white text-4xl md:text-6xl font-bold font-['Limelight'] tracking-wider drop-shadow-[2px_2px_8px_rgba(0,0,0,0.75)] border-4 border-white p-4">
                    Go for It.....
                </h2>
                <button className="btn mt-5 "  ><Link to="/allservice" onClick={() => setLoading(true)}>Available cars</Link></button>
                
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide3" className="btn btn-circle">❮</a>
                <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
        </div>
    </div>
    );
};

export default Banner;
