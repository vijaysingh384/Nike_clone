import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch("http://localhost:3000/users/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formData)
    });

    const data = await response.json();

    if(response.ok){
        alert("Login successful");
        Navigate("/shop");
    }else{
        alert(data.message);
    }


  }

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen ">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-3xl overflow-hidden flex flex-col">

        {/* Hero Section */}
        <div className="relative h-64">
          <img
            src="https://images.unsplash.com/photo-1584917865442-de89df76afd3"
            alt="Luxury handbag"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute top-1/3 w-full text-center text-white">
            <h1 className="text-3xl font-bold tracking-tight">
              LUXEBAGS
            </h1>
            <p className="text-xs uppercase tracking-widest mt-1 opacity-80">
              Premium Collection
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="flex-3 bg-white  rounded-t-3xl px-8 pt-10 pb-6 flex flex-col shadow-lg">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mt-4">
              Welcome Back
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Sign in to continue your shopping
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Email Field */}
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder=" "
                onChange={handleChange}
                required
                className="peer w-full px-4 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition"
              />
              <label className="absolute left-4 top-4 text-gray-400 transition-all 
                peer-placeholder-shown:top-4 
                peer-placeholder-shown:text-base 
                peer-focus:-top-2 
                peer-focus:text-xs 
                peer-focus:text-purple-600 
                peer-focus:bg-white 
                peer-focus:px-1">
                Email Address
              </label>
            </div>

            {/* Password Field */}
            <div className="relative">
              <input
                type="password"
                name="password"
                placeholder=" "
                onChange={handleChange}
                required
                className="peer w-full px-4 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition"
              />
              <label className="absolute left-4 top-4 text-gray-400 transition-all 
                peer-placeholder-shown:top-4 
                peer-placeholder-shown:text-base 
                peer-focus:-top-2 
                peer-focus:text-xs 
                peer-focus:text-purple-600 
                peer-focus:bg-white 
                peer-focus:px-1">
                Password
              </label>
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                className="text-sm text-purple-600 hover:underline"
              >
                Forgot Password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-xl shadow-lg transition active:scale-95"
            >
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="border-t border-gray-200" />
            <p className="absolute left-1/2 -translate-x-1/2 -top-3 bg-white px-3 text-sm text-gray-400">
              Or sign in with
            </p>
          </div>

          {/* Social Buttons */}
          <div className="flex justify-center space-x-4">
            <button className="w-14 h-14 rounded-xl border flex items-center justify-center hover:bg-gray-50 transition">
              G
            </button>
            <button className="w-14 h-14 rounded-xl border flex items-center justify-center hover:bg-gray-50 transition">
              A
            </button>
            <button className="w-14 h-14 rounded-xl border flex items-center justify-center hover:bg-gray-50 transition">
              F
            </button>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center text-sm text-gray-500">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-purple-600 font-semibold hover:underline"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
