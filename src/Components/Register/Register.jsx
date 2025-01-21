import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Register() {
  // controlled element vs uncontrolled element
const navigate = useNavigate();
  const {register, handleSubmit,formState: { errors }, trigger , watch , reset} = useForm();




 async function formSubmimt(value) {
    console.log(value);
    try {
        let {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, value);
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: "Signed Up successfully"
          });
          reset(),
          setTimeout(() => navigate('/login'), 3000);
    console.log(data);
    } catch({response:{data:{message}}}){
        console.log(message);   
        Swal.fire({
            icon: 'error',
            html: `<h2 class='text-red-700 font-bold'>${message}</h2>`,
            confirmButtonColor: 'rgb(185 28 28)',
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
          });
    }
    
  }

  return (
    <div className="py-12">
      <h1 className="text-5xl text-secondary-color py-5 text-center mb-5">
        Register
      </h1>

      <form className="max-w-md mx-auto" onSubmit={handleSubmit(formSubmimt)}>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            autoComplete="username"
            id="name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
            placeholder=" "
            {...register("name", {
              required: { value: true, message: "Name is Required" },
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters",
              },
              onBlur: () => trigger("name"),
              onChange: () => trigger("name"),
            })}
          />
          <label
            htmlFor="name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Name
          </label>
          {errors.name ? (
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              <span className="font-medium">Oops!</span> {errors.name.message}
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            autoComplete="username"
            id="email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
            placeholder=" "
            {...register("email", {
              required: { value: true, message: "Email is Required" },
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Enter Valid Name",
              },
              onBlur: () => trigger("email"),
              onChange: () => trigger("email"),
            })}
          />
          <label
            htmlFor="email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email
          </label>
          {errors.email && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              <span className="font-medium">Oops!</span> {errors.email.message}
            </p>
          )}
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="password"
            autoComplete="new-password"
            id="password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
            placeholder=" "
            {...register("password", {
              required: { value: true, message: "Password is Required" },
              pattern: {
                value:
                  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "Password must be at least 8 characters, include one uppercase, one lowercase, one number, and one special character",
              },
              onBlur: () => trigger("password"),
              onChange: () => trigger("password"),
            })}
          />
          <label
            htmlFor="password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
          {errors.password && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              <span className="font-medium">Oops!</span>{" "}
              {errors.password.message}
            </p>
          )}
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="password"
            autoComplete="new-password"
            id="rePassword"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
            placeholder=" "
            {...register("rePassword", {
              required: { value: true, message: "rePassword is Required" },
             validate: (value) => value === watch('password') || 'Password and repassword not same',
              onBlur: () => trigger("rePassword"),
              onChange: () => trigger("rePassword"),

            })}
          />
          <label
            htmlFor="rePassword"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Confirm Password
          </label>
          {errors.rePassword && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              <span className="font-medium">Oops!</span>{" "}
              {errors.rePassword.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
