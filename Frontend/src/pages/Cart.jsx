import { useEffect, useState, useCallback } from "react";
import Navbar from "../components/Layout/Navbar";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Cart() {
    const { token, logout } = useAuth();
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);
    const [bill, setBill] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchCart = useCallback(() => {
        if (!token) {
            logout();
            navigate("/login");
            return;
        }
        fetch("http://localhost:3001/cart", {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((res) => {
                if (res.status === 401) { logout(); navigate("/login"); return null; }
                if (!res.ok) throw new Error("Failed to fetch cart");
                return res.json();
            })
            .then((data) => {
                if (!data) return;
                setCart(data.cart || []);
                setBill(data.bill || 0);
            })
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, [token]);

    useEffect(() => {
        fetchCart();
    }, [fetchCart]);

    const callApi = async (url) => {
        const res = await fetch(url, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return res.json();
    };

    const increase = async (productId) => {
        await callApi(`http://localhost:3001/addtocart/${productId}`);
        fetchCart();
    };

    const decrease = async (productId) => {
        await callApi(`http://localhost:3001/decreasecart/${productId}`);
        fetchCart();
    };

    const remove = async (productId) => {
        await callApi(`http://localhost:3001/removecart/${productId}`);
        fetchCart();
    };

    if (loading) return <div className="text-center mt-20">Loading cart...</div>;
    if (error) return <div className="text-center mt-20 text-red-500">{error}</div>;

    return (
        <>
            <Navbar />
            <div className="max-w-3xl mx-auto px-4 py-10">
                <h1 className="text-2xl font-semibold mb-6">Your Cart</h1>

                {cart.length === 0 ? (
                    <p className="text-center text-gray-500 mt-10">Your cart is empty</p>
                ) : (
                    <>
                        <div className="flex flex-col gap-4">
                            {cart.map((item) => (
                                <div key={item.product._id} className="flex items-center gap-4 border rounded-xl p-4">
                                    {item.product.image && (
                                        <img
                                            src={item.product.image}
                                            alt={item.product.name}
                                            className="h-20 w-20 object-contain rounded"
                                        />
                                    )}

                                    <div className="flex-1">
                                        <h2 className="font-semibold">{item.product.name}</h2>
                                        <p className="text-sm text-zinc-400">{item.product.description}</p>
                                        <p className="mt-1 font-medium">₹{item.product.price}</p>
                                    </div>

                                    {/* Quantity Controls */}
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => decrease(item.product._id)}
                                            className="w-8 h-8 rounded-full border border-zinc-300 flex items-center justify-center text-lg font-medium hover:bg-zinc-100"
                                        >
                                            −
                                        </button>
                                        <span className="w-6 text-center font-medium">{item.quantity}</span>
                                        <button
                                            onClick={() => increase(item.product._id)}
                                            className="w-8 h-8 rounded-full border border-zinc-300 flex items-center justify-center text-lg font-medium hover:bg-zinc-100"
                                        >
                                            +
                                        </button>
                                    </div>

                                    {/* Remove */}
                                    <button
                                        onClick={() => remove(item.product._id)}
                                        className="text-sm text-red-500 hover:underline ml-2"
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 border-t pt-4 text-right">
                            <p className="text-sm text-zinc-500">Subtotal: ₹{bill - 20}</p>
                            <p className="text-sm text-zinc-500">Delivery: ₹20</p>
                            <p className="text-lg font-semibold mt-1">Total: ₹{bill}</p>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}

export default Cart;
