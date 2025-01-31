import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Loading from '../components/Loading';
import ManageCard from '../components/ManageCard';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const ManageService = () => {

    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const { email } = user || {};  // Safely handle user if not available
    // console.log(email);
    const [myServices, setmyServices] = useState([])

    const removeCard = async (id) => {
        // Confirm before deletion (optional)
        
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                setLoading(true)
                
                 axios.delete(`https://dfghjk/services/${id}`, {
                    withCredentials: true
                })
                    .then(res => {
                        setLoading(false);
                        //console.log("Response Data:", res.data);
                    })

              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              setLoading(false)
              setmyServices(myServices.filter((service) => service._id !== id));
              //console.log("Deleted",id)
            }
            
          });

        

       
    };


    useEffect(() => {
        if (user) {
            setLoading(true);
            axios.get(`https://asdfg/myservices?email=${email}`, {
                withCredentials: true
            })
                .then(res => {
                    setLoading(false);
                    //console.log("Response Data:", res.data);
                    setmyServices(res.data)
                })
                .catch(err => {
                    setLoading(false);
                    console.error("Error:", err);
                });
        }
    }, []);

    if (loading) return <Loading></Loading>;

    return (
        <div>
            <Helmet><title>Manage Service and car</title></Helmet>
            <h2 className="text-3xl my-10 font-bold text-center">Manage Service</h2>
            <div className='flex flex-col mx-auto gap-y-6'>
                {
                    myServices.map((service) => {
                        return <ManageCard key={service._id} {...service} removeCard={removeCard} ></ManageCard>
                    })
                }
            </div>
        </div>
    );
};

export default ManageService;
