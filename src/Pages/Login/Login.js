import React, { useEffect } from "react";
import auth from "../../firebase.init";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [signInWithGoogle, userGoogle, loading, error] =
    useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, userEmail, loadingEmail, errorEmail] =
    useSignInWithEmailAndPassword(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (userGoogle || userEmail) {
      console.log(userGoogle);
      navigate(from, { replace: true });
    }
  }, [userEmail, userGoogle, navigate, from]);
  if (loading || loadingEmail) {
    return <Loading></Loading>;
  }
  let signInError;

  if (error || errorEmail) {
    signInError = (
      <p className="text-red-500">{error?.message || errorEmail?.message}</p>
    );
  }
  const handleGoogleLogin = (event) => {
    event.preventDefault();
    signInWithGoogle();
  };

  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
  };
  return (
    <div className="flex h-screen justify-center items-center ">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body text-center">
          <h2 class=" text-2xl font-bold">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Your Email"
              class="input input-bordered w-full max-w-xs"
              {...register("email", {
                required: {
                  value: true,
                  message: "email is required",
                },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "provide a valid email",
                },
              })}
            />
            <label class="label">
              {errors.email?.type === "required" && (
                <span class="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
              {errors.email?.type === "pattern" && (
                <span class="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
            </label>

            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Your Password"
              class="input input-bordered w-full max-w-xs"
              {...register("password", {
                required: {
                  value: true,
                  message: "password is required",
                },
                minLength: {
                  value: 6,
                  message: "Password should be of minimum 6 charecters",
                },
              })}
            />

            <label className="label">
              {errors.password?.type === "required" && (
                <span class="label-text-alt text-red-500">
                  {errors.password.message}
                </span>
              )}
              {errors.password?.type === "pattern" && (
                <span class="label-text-alt text-red-500">
                  {errors.password.message}
                </span>
              )}
            </label>
            {signInError}

            <input type="submit" value="Login" class="btn w-full max-w-xs" />
            <small>
              New to Doctors Portal?{" "}
              <Link className="text-secondary" to="/signup">
                Create new account
              </Link>{" "}
            </small>

            <div class="divider">OR</div>
            <button
              onClick={handleGoogleLogin}
              type="submit"
              class="btn btn-outline w-full"
            >
              Continue with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
