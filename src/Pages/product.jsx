import CardProduct from "../components/Fragments/CardProduct";

function ProductPage() {
    return (
        <div className="flex justify-center py-5">
            <CardProduct>
                <CardProduct.CardHeader image="/images/product1.jpg" />
                <CardProduct.CardBody type="Sepatu Baru">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem repellat velit voluptatem beatae natus consequatur dolorem nostrum amet minus incidunt maiores quisquam, enim quibusdam impedit! Vel provident debitis inventore neque?</CardProduct.CardBody>
                <CardProduct.CardFooter price="Rp.1.000.000" />
            </CardProduct>
            <CardProduct>
                <CardProduct.CardHeader image="/images/product1.jpg" />
                <CardProduct.CardBody type="Sepatu Baru">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem repellat velit voluptatem beatae natus consequatur dolorem nostrum amet minus incidunt maiores quisquam, enim quibusdam impedit! Vel provident debitis inventore neque?</CardProduct.CardBody>
                <CardProduct.CardFooter price="Rp.1.000.000" />
            </CardProduct>
        </div>
    )
}

export default ProductPage;