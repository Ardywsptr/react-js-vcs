/* eslint-disable no-unused-vars */
import { useState } from "react";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";
import Counter from "../components/Fragments/Counter";
import products from "../utils/products";

const email = localStorage.getItem("email");
function ProductPage() {

    const [cart, setCart] = useState([
        {
            id: 1,
            qty: 1,
        }
    ]);

    function handleLogout() {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        window.location.href = "/login";
    }

    function handleAddToCart(id) {
        if (cart.find((item) => item.id === id)) {
            setCart(
                cart.map((item) =>
                    item.id === id ? { ...item, qty: item.qty + 1 } : item
                )
            );
        } else {
            setCart([
                ...cart,
                {
                    id,
                    qty: 1,
                }
            ])
        }
    }

    return (
        <>
            <div className="flex justify-end h-10 bg-blue-600 text-white items-center p-10">
                {email}
                <Button classname="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
            </div>
            <h1 className="text-3xl font-bold text-center py-5">Products</h1>
            <div className="flex justify-center py-5">
                <div className="w-3/4 flex flex-wrap">
                    {products.map((product) => (
                        <CardProduct key={product.id} >
                            <CardProduct.CardHeader image={product.image} />
                            <CardProduct.CardBody name={product.name}>{product.description}</CardProduct.CardBody>
                            <CardProduct.CardFooter price={IDR(product.price)} handleAddToCart={handleAddToCart} id={product.id} />
                        </CardProduct>
                    ))}
                </div>
                <div className="w-1/4">
                    <h1 className="text-3xl font-bold text-blue-600 ml-3 mb-2">Cart</h1>
                    <table className="text-left table-auto border-separate border-spacing-x-3">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => {
                                const product = products.find((product) => product.id === item.id)
                                return (
                                    <tr key={item.id}>
                                        <td>{product.name}</td>
                                        <td>{IDR(product.price)}</td>
                                        <td>{item.qty}</td>
                                        <td>{IDR(product.price * item.qty)}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div >
        </>
    );
}

function IDR(number) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        currencyDisplay: 'symbol',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
    }).format(number).replace(/\s/g, '\u00a0');
}
export default ProductPage;