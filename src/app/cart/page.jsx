import { Container } from "reactstrap";
import CartTable from "@/components/CartTable";
import CartTotal from "@/components/CartTotal";
import { CartContextProvider } from "@/hooks/useCart";

export const metadata = {
    title: "Carrinho",
    description: "Meu Carrinho de compras",
    icons: {
        icon: "/favicon.ico",
    },
};

const Cart = () => {

    return (
        <Container className="mb-5">
            <h1 className="my-5">Carrinho</h1>
           <CartTable />
           <CartTotal />
        </Container>
    );

}

export default Cart