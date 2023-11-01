import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        // after create user to send backend code start here
        const createdAt = result.user?.metadata?.creationTime;
        const user = { email, createdAt: createdAt };

        // using axios
        axios.post("https://coffee-store-server-fullproject-module56-huhgsnlbs.vercel.app/user", user).then((data) => {
         if(data.data.insertedId){
          console.log('Data Added To The Database');
         }
        });

        // using fetch
        // fetch("https://coffee-store-server-fullproject-module56-huhgsnlbs.vercel.app/user", {
        //   method: "POST",
        //   headers: {
        //     "content-type": "application/json",
        //   },
        //   body: JSON.stringify(user),
        // })
        //   .then((res) => res.json())
        //   .then((data) => {
        //    if(data.insertedId){
        //     console.log("User Added To The Database");
        //    }
        //   });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up Now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
