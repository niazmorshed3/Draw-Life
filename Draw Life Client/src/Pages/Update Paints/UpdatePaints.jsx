import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdatePaints = () => {
  const updateLoader = useLoaderData();
  const {
    _id,
    name,
    email,
    itemName,
    subcategory,
    price,
    rating,
    customization,
    stockStatus,
    image,
    description,
  } = updateLoader;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const itemName = form.item_name.value;
    const subcategory = form.subcategory_Name.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const stockStatus = form.stockStatus.value;
    const image = form.image.value;
    const description = form.short_description.value;
    const updatePaint = {
      name,
      email,
      itemName,
      subcategory,
      price,
      rating,
      customization,
      stockStatus,
      image,
      description,
    };
    // Sending Data to the server
    fetch(`https://assignmint-10-server.vercel.app/paint/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatePaint),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Paint Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="p-16">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Update Paint|Draw Life</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h2 className="text-3xl font-extrabold text-center pb-10">
        Update Your Paints
      </h2>
      <form onSubmit={handleUpdate}>
        {/* form name and quantity row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Item Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                defaultValue={itemName}
                name="item_name"
                placeholder="Item Name"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text">Subcategory Name</span>
            </label>
            <label className="input-group">
              <input
                defaultValue={subcategory}
                type="text"
                name="subcategory_Name"
                placeholder="Subcategory Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* ----- */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                defaultValue={price}
                type="text"
                name="price"
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
              <input
                defaultValue={rating}
                type="text"
                name="rating"
                placeholder="Rating"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form category and details row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Customization</span>
            </label>
            <label className="input-group">
              <input
                defaultValue={customization}
                type="text"
                name="customization"
                placeholder="Yes/No"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text">Processing Time</span>
            </label>
            <label className="input-group">
              <input
                //   defaultValue={time}
                type="text"
                name="processing_time"
                placeholder="Processing Time"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Stock Status</span>
            </label>
            <label className="input-group">
              <input
                defaultValue={stockStatus}
                type="text"
                name="stockStatus"
                placeholder="In stock/Made to Order"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                defaultValue={image}
                type="text"
                name="image"
                placeholder="Photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <label className="input-group">
              <input
                defaultValue={name}
                type="text"
                name="name"
                placeholder="Please Enter Your Name"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <label className="input-group">
              <input
                defaultValue={email}
                type="text"
                name="email"
                placeholder="Please Enter Your Email"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
        </div>
        {/* form Photo url row */}
        <div className="mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Short Description</span>
            </label>
            <label className="input-group">
              <input
                defaultValue={description}
                type="text"
                name="short_description"
                placeholder="Enter a Short Description"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input type="submit" value="Update Paint" className="btn btn-block" />
      </form>
    </div>
  );
};

export default UpdatePaints;
