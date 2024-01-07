/* eslint-disable no-unused-vars */
import CardProduct from "../components/Fragments/CardProduct";
import products from "../utils/products";

function ProductPage() {
    return (
        <div className="flex justify-center py-5 flex-wrap">
            {products.map((product) => (
                <CardProduct key={product.id} >
                    <CardProduct.CardHeader image={product.image} />
                    <CardProduct.CardBody type={product.name}>{product.description}</CardProduct.CardBody>
                    <CardProduct.CardFooter price={product.price} />
                </CardProduct>
            ))}
        </div>
    );
}

export default ProductPage;