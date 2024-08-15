import ProductDetails from "@/components/ProductDetails";
import { fetchProduct, fetchProducts } from "@/services/products";
import { Container } from "reactstrap";


export const generateStaticParams = async () => {

    const products = await fetchProducts();
   
    return products.map(product => ({
        id: product.id.toString()
    }))
};

export const generateMetadata = async ({ params }) => {
    const { id } = params;
    const product = await fetchProduct(id);
 
    return {
        title: product.name,
        description: product.description,
    }
}


const Product = async ({ params }) => {

    const { id } = params;
    const product = await fetchProduct(id);
    return (
        <Container className="mt-5">
            <ProductDetails product={product} />
        </Container>
    )
};

export default Product