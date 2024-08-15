import ProductsList from "@/components/ProductsList";
import { fetchProducts } from "@/services/products";
import { Container } from "reactstrap";

export const metadata = {
    title: "Nossos Produtos",
    description: "Conheça todos os nossos produtos",
    icons: {
        icon: "/favicon.ico",
    },
};

const Products = async () => {
    const products = await fetchProducts();
    return (
        <Container className="mb-5">
            <h1 className="my-5">
                Nossos Produtos
            </h1>
            {<ProductsList products={products} />}
        </Container>
    );

};
export default Products