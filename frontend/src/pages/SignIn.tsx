import { useAppContext } from "@/contexts/AppContext";
import { useLoginUser } from "@/hooks/api/user/login/login-user";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

export type SignInFormData = {
  email: string;
  password: string;
};

export const SignIn = () => {
  const { showToast } = useAppContext();
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>();
  const { mutate, isSuccess, isError } = useLoginUser();

  useEffect(() => {
    if (isSuccess) {
      showToast({ message: "Login Success!", type: "SUCCESS" });
      navigate(location.state?.from?.pathname || "/");
    }
    if (isError) {
      showToast({ message: "Login Failed!", type: "ERROR" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError, isSuccess]);

  const onSubmit = handleSubmit((data) => {
    mutate(data);
  });

  return (
    <form className="flex flex-col gap-5" onSubmit={onSubmit}>
      <h2 className="text-3xl font-bold">Sign In</h2>
      <label className="text-gray-700 text-sm font-bold flex-1">
        Email
        <input
          type="email"
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("email", { required: "This field is required" })}
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}
      </label>
      <label className="text-gray-700 text-sm font-bold flex-1">
        Password
        <input
          type="password"
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("password", {
            required: "This field is required",
            maxLength: {
              value: 8,
              message: "Password must be at least 8 characters long",
            },
          })}
        />
        {errors.password && (
          <span className="text-red-500 text-sm">
            {errors.password.message}
          </span>
        )}
      </label>
      <span className="flex flex-row justify-between">
        <span>
          Don't have an account?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Register
          </a>
        </span>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-500 text-white font-bold p-2 text-xl"
        >
          Login
        </button>
      </span>
    </form>
  );
};
