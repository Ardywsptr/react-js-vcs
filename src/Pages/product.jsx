/* eslint-disable no-unused-vars */
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";
import Counter from "../components/Fragments/Counter";
import products from "../utils/products";

const email = localStorage.getItem("email");
function ProductPage() {
    function handleLogout() {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        window.location.href = "/login";
    }

    return (
        <>
            <div className="flex justify-end h-10 bg-blue-600 text-white items-center p-10">
                {email}
                <Button classname="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
            </div>
            <h1 className="text-3xl font-bold text-center py-5">Products</h1>
            <div className="flex justify-center py-5 flex-wrap">
                {products.map((product) => (
                    <CardProduct key={product.id} >
                        <CardProduct.CardHeader image={product.image} />
                        <CardProduct.CardBody name={product.name}>{product.description}</CardProduct.CardBody>
                        <CardProduct.CardFooter price={IDR(product.price)} />
                    </CardProduct>
                ))}
            </div>
            <Counter></Counter>
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