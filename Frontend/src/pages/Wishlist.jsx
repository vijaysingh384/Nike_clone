import Navbar from "../components/Layout/Navbar";
import OfferBar from "../components/Layout/OfferBar";
function Wishlist() {
    return(
        <>
        <Navbar />
        <OfferBar />
        <div>
            <h1 className="text-2xl font-semibold text-center mt-10">Your Wishlist is Empty</h1>
        </div>
        </>
    )
}

export default Wishlist;