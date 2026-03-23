import { useState } from "react";
import { Link } from "react-router-dom";
import PhoneModal from "../components/UI/PhoneModal";

function Login() {
  const [open, setOpen] = useState(false);
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
    
    <>
    {open && <PhoneModal close={() => setOpen(false)} />}
    </>
          
  );
}

export default Login;
