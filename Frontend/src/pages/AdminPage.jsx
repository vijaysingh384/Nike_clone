import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AdminPage(){
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:3000/owner/admin")
        .then(res => res.text())
        .then(data => console.log(data));
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        fetch("http://localhost:3000/products/create", {
            method: "POST",
            body: formData,
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            navigate("/products");
        })
        .catch(err => console.error(err));
    }

    return(
        <div className="min-h-screen flex flex-col">
            <div className="container mx-auto px-10 py-20 flex flex-grow">

                {/* Sidebar */}
                <div className="w-[25%] flex h-screen flex-col items-start">
                    <div className="flex flex-col">
                        <a href="#" className="block w-fit mb-2 hover:text-blue-500">All Products</a>
                        <a href="#" className="block w-fit mb-2 hover:text-blue-500">Create new product</a>
                    </div>
                </div>

                {/* Main Content */}
                <main className="w-3/4 bg-white p-8 shadow ml-4 rounded">
                    <h2 className="text-xl font-bold mb-4">Create New Product</h2>

                    <form onSubmit={handleSubmit} encType="multipart/form-data" autoComplete="off">
                        <div className="mb-4">
                            <label className="block mb-2 font-medium">Product Image</label>
                            <input name="image" type="file" className="py-2 px-4 border rounded w-full" />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <input name="name" type="text" placeholder="Product Name" className="border p-2 rounded w-full" />
                            <input name="description" type="text" placeholder="Product description" className="border p-2 rounded w-full" />
                            <input name="price" type="number" placeholder="Product Price" className="border p-2 rounded w-full" />
                        </div>

                        <input
                            type="submit"
                            value="Create New Product"
                            className="px-5 py-2 rounded mt-5 bg-blue-500 text-white hover:bg-blue-600 cursor-pointer"
                        />
                    </form>
                </main>
            </div>
        </div>
    );
}

export default AdminPage;
