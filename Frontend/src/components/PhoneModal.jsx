import OTPInput from "./OTPInput";
import { useState } from "react";

function PhoneModal({ close }) {

  const [showOTP, setShowOTP] = useState(false);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">

      <div className="bg-white p-6 rounded-2xl w-[400px]">

        <button className="right-2 text-zinc-300 " onClick={close}>x</button>

        {!showOTP ? (
          <>
          <img className=" w-22 h-22 flex items-center justify-center  ml-36 " src="https://prod-assets.nike.in/NIKE/nes-nike-reloaded-svc/static/assets/images/nike-logo-192x192.svg" alt="" />
          <h2 className="font-semibold">Sign Up To Get Started</h2>
            <h2 className="text-zinc-400 text-md" >Get personalised picks & faster checkout</h2>

            <input 
              type="tel"
              placeholder="Phone number"
              className="border p-2 w-full mt-5 rounded-lg "
            />

            <button className="bg-zinc-100 rounded-2xl px-4 py-2 w-full mt-5" onClick={() => setShowOTP(true)}>
              Get OTP
            </button>

            <p className="px-10 mt-4 text-sm text-zinc-400">By entering this site, you agree to the <span className="font-semibold text-black">Terms & Conditions</span> and <span className="font-semibold text-black">Privacy Policy</span></p>
          </>
        ) : (
          <OTPInput />
        )}

      </div>

    </div>
  );
}

export default PhoneModal;