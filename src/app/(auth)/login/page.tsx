"use client";
import React, { useEffect } from "react";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
// import { Button } from "@/components/ui/button";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import { signIn, getProviders } from "next-auth/react";
// import { useAppDispatch } from "@/stores/hooks";
// import { loginThunk } from "@/stores/thunks/user";
// import { userValidate } from "@/validations/user";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { useForm } from "react-hook-form";
// import { useRouter } from "next/navigation";
// import { toast } from "react-toastify";

function Login() {
  // const [providers, setProviders] = useState(null);

  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();
      console.log("Providers from Google/GitHub:", res); // 👉 xuất hiện ở trình duyệt DevTools
      // setProviders(res);
    };

    fetchProviders();
  }, []);
  // console.log("Providers:", providers); // 👉 xuất hiện ở trình duyệt DevTools

  //   const dispatch = useAppDispatch();
  //   const router = useRouter();
  //   const {
  //     register,
  //     handleSubmit,
  //     formState: { errors },
  //   } = useForm({
  //     resolver: yupResolver(userValidate.login),
  //   });

  //   const onSubmit = async (data: any) => {
  //     const result = await dispatch(loginThunk(data));
  //     if (result.type === "user/dang-nhap/fulfilled") {
  //       toast.success("Đăng nhập thành công");
  //       setTimeout(() => {
  //         router.push("/");
  //       }, 3000);
  //     }
  //   };

  return (
    <div
      style={{ background: "linear-gradient(-135deg, #c850c0, #4158d0)" }}
      className="w-full min-h-screen flex flex-wrap justify-center items-center p-[15px]"
    >
      <div className="bg-white w-[960px] rounded-xl overflow-hidden  h-[600px]">
        <div className="flex flex-wrap justify-around items-center my-auto h-full">
          <div className="w-[316px] my-auto">
            <Image
              width={316}
              height={289}
              src="https://colorlib.com/etc/lf/Login_v1/images/img-01.png"
              alt="login"
              className="w-[316px] h-[289px] object-cover"
            />
          </div>
          <div className="w-[290px] my-auto">
            <div className="mx-auto text-center">
              <p className="text-black font-semibold text-3xl">Member Login</p>
              <form
                //   onSubmit={handleSubmit(onSubmit)}
                className="my-16"
              >
                <div className="block my-4 relative">
                  <input
                    // {...register("email")}
                    style={{ color: "#666666", background: "#e6e6e6" }}
                    className="rounded-full w-[290px] h-[50px] pl-[40px] border-none focus:outline-none focus:ring-0"
                    type="email"
                    placeholder="Email"
                  />
                  <div className="absolute top-1/2 transform -translate-y-1/2 left-5">
                    <MdEmail className="text-gray-400 text-sm" />
                  </div>
                  {/* {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )} */}
                </div>
                <div className="block my-4 relative">
                  <input
                    // {...register("password")}
                    style={{ color: "#666666", background: "#e6e6e6" }}
                    className="rounded-full w-[290px] h-[50px] pl-[40px] border-none focus:outline-none focus:ring-0"
                    type="password"
                    placeholder="Password"
                  />
                  <div className="absolute top-1/2 transform -translate-y-1/2 left-5">
                    <FaLock className="text-gray-400 text-sm" />
                  </div>
                  {/* {errors.password && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.password.message}
                    </p>
                  )} */}
                </div>
                <button
                  type="submit"
                  style={{ background: "#57b846" }}
                  className="text-white rounded-full w-[290px] h-[50px] text-lg font-semibold my-4"
                >
                  Login
                </button>
                <div className="flex items-center w-[290px] my-2">
                  <div className="flex-grow border-t border-gray-300"></div>
                  <span className="mx-2 text-sm text-gray-500 font-bold">
                    OR
                  </span>
                  <div className="flex-grow border-t border-gray-300"></div>
                </div>
                {/* <div className="flex gap-4 justify-center mb-4">
                  <button className="cursor-pointer flex items-center gap-0.5 px-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:shadow-md hover:border-blue-400 transition font-medium text-gray-700">
                    <Image
                      width={20}
                      height={20}
                      src="https://www.svgrepo.com/show/475656/google-color.svg"
                      alt="Google"
                      className="w-5 h-5"
                    />
                    <span className="text-sm font-bold">
                      Continue with Google
                    </span>
                  </button>
                  <button className="cursor-pointer flex items-center gap-0.5 px-2 py-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:shadow-md hover:border-gray-700 transition font-medium text-gray-700">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                    <span className="text-sm font-bold">
                      Continue with Github
                    </span>
                  </button>
                </div> */}
                <div className="flex gap-4 justify-center mb-4">
                  <button
                    onClick={() =>
                      signIn("google", { callbackUrl: "/dashboard" })
                    }
                    className="cursor-pointer flex items-center gap-0.5 p-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:shadow-md hover:border-blue-400 transition font-medium text-gray-700"
                  >
                    <Image
                      width={20}
                      height={20}
                      src="https://www.svgrepo.com/show/475656/google-color.svg"
                      alt="Google"
                      className="w-5 h-5"
                    />
                    <span className="text-sm font-bold">
                      Continue with Google
                    </span>
                  </button>
                  <button
                    onClick={() => signIn("github")}
                    className="cursor-pointer flex items-center gap-0.5 p-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:shadow-md hover:border-gray-700 transition font-medium text-gray-700"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                    <span className="text-sm font-bold">
                      Continue with GitHub
                    </span>
                  </button>
                </div>

                <div className="flex gap-1 text-center justify-center">
                  <p style={{ color: "#999999" }} className="text-base">
                    Forgot
                  </p>
                  <a
                    className="hover:text-green-400 text-gray-600 text-base"
                    href="/forgotPassword"
                  >
                    Password?
                  </a>
                </div>
              </form>
              <a
                href="/register"
                className="text-center justify-center text-base text-gray-500 flex gap-2 hover:opacity-65 cursor-pointer"
              >
                <p>Create your Account </p>
                <FaArrowRightLong className="mt-1 text-base" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
