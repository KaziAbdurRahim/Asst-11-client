import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import HomeCard from "../components/HomeCard";
import Loading from "../components/Loading";
import TotalConsultaions from "../components/TotalConsultaions";
import Banner from "../components/Banner";


const Home = () => {

    const {loading ,setLoading} = useContext(AuthContext);
    const carServices = useLoaderData();
    setLoading(false);

   
    if(loading) return <Loading></Loading>

    return (
        <div>
         
            <Banner></Banner>
            <h2 className="text-3xl font-bold py-10 text-center">Feature Cars</h2>
            {/* feature service */}
            <div className="grid grid-cols-1 2xl:grid-cols-2 gap-5">
                {carServices?.map(service => <HomeCard key={service._id} {...service}></HomeCard>)}
            </div>

            <div className='max-w-6xl mx-auto mt-32'>
                <TotalConsultaions />
            </div>

            {/* news letter */}
            <div className="bg-base-200 p-6 rounded-lg my-8 text-center">
                <h2 className="text-xl font-bold mb-4">Stay Updated</h2>
                <p className="mb-4">Subscribe to our newsletter for the latest Cars and updates.</p>
                <form className="flex justify-center gap-2">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="input input-bordered w-2/3 md:w-1/3"
                    />
                    <button className="btn btn-primary">Subscribe</button>
                </form>
            </div>
        </div>
    );
};

export default Home;