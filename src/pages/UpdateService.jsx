import { useLoaderData } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useState } from "react";
import Loading from "../components/Loading";
import { Helmet } from "react-helmet-async";

const UpdateService = () => {
  const consultService = useLoaderData();
  const { _id, url, name, price, area, description, model, registration } =
    consultService;
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedService = {
      url: formData.get("url"),
      name: formData.get("name"),
      price: formData.get("price"),
      area: formData.get("area"),
      description: formData.get("description"),
      model: formData.get("model"),
      registration: formData.get("registration"),
    };

    try {
      setLoading(true);
      const response = await axios.put(
        `https://ass-10-server-umber.vercel.app/services/${_id}`,
        updatedService
      );
      //console.log(response.data);
      setLoading(false);
      if (response.data.success) {
        Swal.fire({
          title: "Updated",
          icon: "success",
        });
      }
    } catch (error) {
      console.error("Error updating service:", error);
      toast.error("Failed to update the service.");
      // alert('Failed to update the service.');
    }
  };

  if (loading) return <Loading></Loading>;

  return (
    <div className="hero bg-base-200 min-h-screen">
      <Helmet>
        <title>Update Hive</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Update Service</h1>
          <p className="py-6">
            Modify your service details below and submit the form to update.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <fieldset className="fieldset">
                <label className="fieldset-label">Image URL</label>
                <input
                  name="url"
                  defaultValue={url}
                  required
                  type="url"
                  className="input"
                  placeholder="Image URL of the Service"
                />
                <label className="fieldset-label">Game Name</label>
                <input
                  name="name"
                  defaultValue={name}
                  required
                  type="text"
                  className="input"
                  placeholder="Game Name"
                />

                <label className="fieldset-label">Car Model</label>
                <input
                  name="model"
                  required
                  type="text"
                  defaultValue={model}
                  className="input"
                  placeholder="Car Model"
                />

                {/* <label className="fieldset-label">
                  Vechile Registration number
                </label>
                <input
                  name="registration"
                  defaultValue={registration}
                  required
                  type="text"
                  className="input"
                  placeholder="registration"
                /> */}

                <label className="fieldset-label">Price</label>
                <input
                  name="price"
                  defaultValue={price}
                  required
                  type="number"
                  className="input"
                  placeholder="Price"
                />
                {/* <label className="fieldset-label">Service Area</label>
                <input
                  name="area"
                  defaultValue={area}
                  required
                  type="text"
                  className="input"
                  placeholder="Service Area"
                />
                <label className="fieldset-label">Description</label> */}
                <textarea
                  name="description"
                  defaultValue={description}
                  className="h-24 textarea textarea-bordered"
                  placeholder="Description"
                ></textarea>
                <button className="btn btn-neutral mt-4">Update</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateService;
