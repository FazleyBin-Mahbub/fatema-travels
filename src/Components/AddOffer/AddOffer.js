import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
const AddOffer = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("http://localhost:5000/packages", data)
      .then((res) => {
        if (res.data.insertedId) {
          reset();
        }
      });
  };
  return (
    <div className="mt-5 pt-5">
      <h1>Please add a Service</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} placeholder="Name" />
        <br />
        <input {...register("desc")} placeholder="description" /> <br />
        <input type="number" {...register("price")} placeholder="Price" />
        <br />
        <input {...register("img")} placeholder="image-url" /> <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddOffer;
