"use client"

import { useCart } from "@/hooks/useCart";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button, Col, Row, Table } from "reactstrap";


const CartTableRow = (props) => {

    const { addProduct, removeProduct } = useCart();

    return (
        <tr>
            <td>
                <Row className="align-items-center">
                    <Col xs={4} md={3} lg={1}>
                        <Image
                        className="img-fluid"
                            src={props.entry.product.imageUrl}
                            alt={props.entry.product.name}
                            height={50}
                            width={50}
                        />
                    </Col>
                    <Col xs={8} md={10} lg={11}>
                        {props.entry.product.name}
                    </Col>
                </Row>
            </td>
            <td>$ {props.entry.product.price}</td>
            <td>{props.entry.quantity}</td>
            <td>$ {(props.entry.product.price * props.entry.quantity)}</td>
            <td>
                <Button
                    color="primary"
                    size="sm"
                    onClick={() => addProduct(props.entry.product)}
                >
                    +
                </Button>
                {" "}
                <Button
                    color="danger"
                    size="sm"
                    onClick={() => removeProduct(props.entry.product.id)}
                >
                    -
                </Button>
            </td>
        </tr>
    )

};

const CartTable = () => {

    const [cartEntries, setCartEntries] = useState([]);
    const { cart } = useCart();

    useEffect(() => {
        const entriesList = cart.reduce((list, product) => {
            const entryIndex = list.findIndex(entry => entry.product.id === product.id);

            if (entryIndex === -1) {
                return [
                    ...list,
                    {
                        product,
                        quantity: 1
                    }
                ];
            };

            list[entryIndex].quantity++
            return list
        }, []);
        entriesList.sort((a, b) => a.product.id - b.product.id);
        setCartEntries(entriesList);
    }, [cart]);

    return (
        <Table responsive className="align-middle" style={{ minWidth: "32rem" }}>
            <thead>
                <tr>
                    <th>Produto</th>
                    <th>Preço</th>
                    <th>Qtd.</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {cartEntries.map(entry => <CartTableRow key={entry.product.id} entry={entry} />)}
            </tbody>

        </Table>
    );

};

export default CartTable