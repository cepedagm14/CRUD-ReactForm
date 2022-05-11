import React from "react";
import { useForm } from "react-hook-form";

const AddUserForm = (props) => {
  const { addUser } = props;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    addUser(data);
    //limpiar campos
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        {...register("name", { required: true })}
      />
      <div>{errors.name?.type === "required" && "name is required"}</div>
      <label>Username</label>
      <input
        type="text"
        name="username"
        {...register("username", {
          required: true,
        })}
      />
      <div>
        {errors.username?.type === "required" && "username is required"}
      </div>
      <button type="submit">Add user</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  );
};

export default AddUserForm;
