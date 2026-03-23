import { useState, useRef } from "react";
import { auth } from "../../firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

export default function PhoneModal({ close }) {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [confirmation, setConfirmation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const refs = useRef([]);

  async function sendOTP() {
    if (phone.length < 10) return setError("Enter a valid 10-digit number");
    try {
      setLoading(true); setError("");
      window.recaptchaVerifier ??= new RecaptchaVerifier(auth, "recaptcha-container", { size: "invisible" });
      setConfirmation(await signInWithPhoneNumber(auth, `+91${phone}`, window.recaptchaVerifier));
    } catch (e) {
      setError(e.message); window.recaptchaVerifier = null;
    } finally { setLoading(false); }
  }

  async function verifyOTP() {
    if (otp.join("").length < 6) return setError("Enter the 6-digit OTP");
    try {
      setLoading(true); setError("");
      await confirmation.confirm(otp.join(""));
      alert("Phone verified!"); close();
    } catch { setError("Invalid OTP. Try again."); }
    finally { setLoading(false); }
  }

  function handleOtpChange(val, i) {
    if (!/^\d*$/.test(val)) return;
    const updated = [...otp];
    updated[i] = val;
    setOtp(updated);
    if (val) refs.current[i + 1]?.focus();
  }



  return (
    
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-2xl w-[400px]">
        <button className="float-right text-zinc-400" onClick={close}>✕</button>
        <img className="w-16 h-16 mx-auto mb-4" src="https://prod-assets.nike.in/NIKE/nes-nike-reloaded-svc/static/assets/images/nike-logo-192x192.svg" alt="Nike" />

        <div id="recaptcha-container" />

        {!confirmation ? (
          <>
            <h2 className="font-semibold text-lg">Sign Up To Get Started</h2>
            <p className="text-zinc-400 text-sm mb-4">Get personalised picks & faster checkout</p>
            <input type="tel" placeholder="Phone number (10 digits)" maxLength={10} value={phone}
              onChange={e => setPhone(e.target.value)} className="border p-2 w-full rounded-lg" />
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <button onClick={sendOTP} disabled={loading} className="bg-black text-white rounded-2xl px-4 py-2 w-full mt-4 disabled:opacity-50">
              {loading ? "Sending..." : "Get OTP"}
            </button>
            <p className="mt-4 text-xs text-zinc-400 text-center">
              By continuing, you agree to the <span className="font-semibold text-black">Terms & Conditions</span> and <span className="font-semibold text-black">Privacy Policy</span>
            </p>
          </>
        ) : (
          <>
            <h2 className="font-semibold text-lg">Enter OTP</h2>
            <p className="text-zinc-400 text-sm mb-4">Sent to +91 {phone}</p>
            <div className="flex gap-2 justify-center">
              {otp.map((d, i) => (
                <input key={i} ref={el => refs.current[i] = el} type="text" maxLength={1} value={d}
                  onChange={e => handleOtpChange(e.target.value, i)}
                  onKeyDown={e => e.key === "Backspace" && !d && refs.current[i - 1]?.focus()}
                  className="w-10 h-10 border rounded text-center text-lg font-semibold" />
              ))}
            </div>
            {error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}
            <button onClick={verifyOTP} disabled={loading} className="bg-black text-white rounded-2xl px-4 py-2 w-full mt-4 disabled:opacity-50">
              {loading ? "Verifying..." : "Verify OTP"}
            </button>
            <button onClick={() => { setConfirmation(null); setOtp(Array(6).fill("")); setError(""); }}
              className="text-sm text-zinc-400 w-full mt-2 underline">Change number</button>
          </>
        )}
      </div>
    </div>
  );
  
}