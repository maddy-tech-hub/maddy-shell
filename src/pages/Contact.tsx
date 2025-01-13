import React, { memo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Contact: React.FC = () => {
  const [contacts, setContacts] = useState<any>([]);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data: any) => {
    console.log(JSON.stringify(data));
    setContacts([data]);
  };

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Contact</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstname">Enter first name:</label>
          <input
            type="text"
            {...register("firstname", {
              required: "First Name is required",
              minLength: {
                value: 3,
                message: "Min Length of First Name is 3",
              },
            })}
          />
          {errors.firstname && (
            <div>
              <small style={{ color: "red" }}>{errors.firstname.message}</small>
            </div>
          )}
        </div>

        <div>
          <label htmlFor="lastname">Enter last name:</label>
          <input
            type="text"
            {...register("lastname", {
              required: "Last Name is required",
              minLength: {
                value: 3,
                message: "Min Length of Last Name is 3",
              },
            })}
          />
          {errors.lastname && (
            <div>
              <small style={{ color: "red" }}>{errors.lastname.message}</small>
            </div>
          )}
        </div>

        <div>
          <label htmlFor="age">Enter age:</label>
          <input
            type="number"
            {...register("age", {
              required: "Age is required",
              min: {
                value: 1,
                message: "Age should be positive",
              },
            })}
          />
          {errors.age && (
            <div>
              <small style={{ color: "red" }}>{errors.age.message}</small>
            </div>
          )}
        </div>

        <div>
          <label htmlFor="mobilenumber">Enter mobile number:</label>
          <input
            type="text"
            {...register("mobilenumber", {
              required: "Mobile number is required",
              minLength: {
                value: 10,
                message: "Mobile number must be 10 digits",
              },
              maxLength: {
                value: 10,
                message: "Mobile number must be 10 digits",
              },
              pattern: {
                value: /^(\+\d{1,3}[- ]?)?\d{10}$/,
                message: "Please enter a valid mobile number",
              },
            })}
          />
          {errors.mobilenumber && (
            <div>
              <small style={{ color: "red" }}>{errors.mobilenumber.message}</small>
            </div>
          )}
        </div>

        <div>
          <label htmlFor="email">Enter email:</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/,
                message: "Please enter a valid email",
              },
            })}
          />
          {errors.email && (
            <div>
              <small style={{ color: "red" }}>{errors.email.message}</small>
            </div>
          )}
        </div>

        <br />
        <input type="submit" value="Submit" disabled={!isDirty || !isValid} />
      </form>

      <br />
      <Link to="/">
        <button>Back to Home Page</button>
      </Link>
    </div>
  );
};

export default memo(Contact);
