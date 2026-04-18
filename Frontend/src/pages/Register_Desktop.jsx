import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import { useAuth } from "../context/AuthContext";

function Register_Desktop() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({ fullname: "", email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        login(data.token);
        navigate("/");
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("Server error");
    }
  };

  return (
    <>
      <Navbar />
    

      <div>
        <ul className="flex gap-4 justify-center mt-10 text-lg mb-10 ">
          <li>Shoes</li>
          <li>Clothing</li>
          <li>Accessories</li>
          <li>Shop All</li>
        </ul>
      </div>
      <div>
        <img
          src="https://images-static.nykaa.com/uploads/b922ca2e-0fac-4d5e-983b-8859d8ff30cc.png?"
          alt=""
          loading="lazy"
        />
        <div className="absolute inset-0 mt-20  items-center justify-center text-center ">
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-6xl md:text-7xl text-white font-semibold tracking-tight">
              IT'S BETTER ON
            </h1>
            <h1 className="text-6xl md:text-7xl text-white font-semibold tracking-tight">NIKE.IN</h1>

            <p className="mt-2 mb-2 text-white">
              Move, Shop and Celebrate with the best of Nike.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full max-w-sm">
              <input name="fullname" type="text" placeholder="Full Name" value={formData.fullname} onChange={handleChange} className="border p-2 rounded" required />
              <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} className="border p-2 rounded" required />
              <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} className="border p-2 rounded" required />
              <button type="submit" className="bg-white px-4 py-2 rounded-2xl font-semibold">
                Sign up
              </button>
            </form>          </div>
        </div>
        <div className="px-12 py-12">
          <h2 className="text-2xl ">Benefits</h2>

          <div className="grid grid-cols-6 grid-rows-4 gap-4 mt-10">
            <div className="col-span-2 row-span-4">
              <img
                src="https://images-static.nykaa.com/uploads/55ae9d10-a606-44ca-a003-403bcfec5f3e.png?tr=cm-pad_resize,w-750"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="col-span-2 row-span-4 col-start-3">
              <img
                src="https://images-static.nykaa.com/uploads/8b158ae4-393b-48be-8dc3-c8dcd42272f9.png?tr=cm-pad_resize,w-750"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="col-span-2 row-span-4 col-start-5">
              <img
                src="https://images-static.nykaa.com/uploads/f00d84a5-cd5c-4b5c-98c4-33b370e451dc.png?tr=cm-pad_resize,w-750"
                alt=""
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="mt-20">
          <img
            src="https://images-static.nykaa.com/uploads/5798fd24-2b2e-41d6-a1f0-c1312af314d9.png?tr=cm-pad_resize,w-1800"
            alt=""
            loading="lazy"
          />
        </div>

        <div>
          <img
            src="https://images-static.nykaa.com/uploads/790152ce-5c47-4dd6-9bd9-58231ef7d86e.png?tr=cm-pad_resize,w-1800"
            alt=""
            loading="lazy"
          />
        </div>
        <div>
          <img
            src="https://images-static.nykaa.com/uploads/1ba229df-2e0d-454b-89cf-2fe15f237d54.png?tr=cm-pad_resize,w-1800"
            alt=""
            loading="lazy"
          />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Register_Desktop;
