/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";
import Counter from "../components/Fragments/Counter";
import products from "../utils/products";
import { getProducts } from "../services/product.service";
import { getUsername } from "../services/auth.service";
import { useLogin } from "../hooks/useLogin";

const ProductPage = () => {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [products, setProducts] = useState([]);
    const username = useLogin();

    // component did mount localstorage
    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem("cart")) || []);
    }, [])

    // component did mount get API
    useEffect(() => {
        getProducts((data) => {
            setProducts(data);
        });
    }, [])

    // component did update
    useEffect(() => {
        if (products.length > 0 && cart.length > 0) {
            const sum = cart.reduce((acc, item) => {
                const product = products.find((product) => product.id === item.id);
                return acc + product.price * item.qty;
            }, 0);
            setTotalPrice(sum);
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }, [cart, products]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("password");
        window.location.href = "/login";
    }

    // tambahkan barang ke keranjang
    const handleAddToCart = (id) => {
        if (cart.find((item) => item.id === id)) {
            setCart(cart.map((item) => item.id === id ? { ...item, qty: item.qty + 1 } : item));
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

    // useRef -> reference values
    // const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);

    // function handleAddToCartRef(id) {
    //     cartRef.current = [...cartRef.current, { id, qty: 1 }];
    //     localStorage.setItem("cart", JSON.stringify(cartRef.current));
    // }

    // useRef -> Manipulasi DOM
    const totalPriceRef = useRef(null);

    useEffect(() => {
        cart.length > 0 ? totalPriceRef.current.style.display = "table-row"
            : totalPriceRef.current.style.display = "none";
    }, [cart]);

    return (
        <>
            <div className="flex justify-end h-10 bg-blue-600 text-white items-center p-10">
                {username}
                <Button classname="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
            </div>
            <h1 className="text-3xl font-bold text-center py-5">Products</h1>
            <div className="flex justify-center py-5">
                <div className="w-3/4 flex flex-wrap">
                    {products.map((product) => (
                        <CardProduct key={product.id} >
                            <CardProduct.CardHeader image={product.image} id={product.id} />
                            <CardProduct.CardBody name={product.title}>{product.description}</CardProduct.CardBody>
                            <CardProduct.CardFooter price={USD(product.price)} handleAddToCart={handleAddToCart} id={product.id} />
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
                                <th>Qty</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.length > 0 && cart.map((item) => {
                                const product = products.find((product) => product.id === item.id)
                                return (
                                    <tr key={item.id}>
                                        <td>{product.title.substring(0, 10)}...</td>
                                        <td>{USD(product.price)}</td>
                                        <td>{item.qty}</td>
                                        <td>{USD(product.price * item.qty)}</td>
                                    </tr>
                                )
                            })}
                            {/* useRef */}
                            <tr ref={totalPriceRef}>
                                <td colSpan={3}>
                                    <b>Total Price</b>
                                </td>
                                <td>
                                    <b>{USD(totalPrice)}</b>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {/* <Counter className="text-3xl font-bold text-center py-5" /> */}
        </>
    );
}

function USD(number) {
    return new Intl.NumberFormat('id-US', {
        style: 'currency',
        currency: 'USD',
        currencyDisplay: 'symbol',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(number).replace(/\s/g, '\u00a0');
}
export default ProductPage;