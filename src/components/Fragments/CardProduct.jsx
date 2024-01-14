/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import Button from "../Elements/Button";

function CardProduct({ children }) {
    return (
        <div className="w-full max-w-xs bg-gray-800 border border-gray-700 rounded-lg shadow m-2 flex flex-col justify-between">
            {children}
        </div>
    )
}

function CardHeader({ image }) {
    return (
        <a href="#">
            <img src={image} alt="product" className="p-8 rounded-t-lg" />
        </a>
    )
}

function CardBody({ children, name }) {
    return (
        <div className="px-5 pb-5 h-full">
            <a href="">
                <h5 className="text-white text-xl font-semibold tracking-tight">{name}</h5>
                <p className="text-s text-white">{children}</p>
            </a>
        </div>
    )
}

function CardFooter({ price, handleAddToCart, id }) {
    return (
        <div className="flex items-center justify-between px-5 pb-5">
            <span className="text-xl font-bold text-white">{price}</span>
            <Button className="bg-blue-600" onClick={() => handleAddToCart(id)}>Add To Cart</Button>
        </div>
    )
}

CardProduct.CardHeader = CardHeader;
CardProduct.CardBody = CardBody;
CardProduct.CardFooter = CardFooter;


export default CardProduct;