"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button, Card, CardBody, CardSubtitle, Table } from "reactstrap";
import SucessToast from "./SucessToast";
import { useCart } from "@/hooks/useCart";
import CartTableRow from "./CartTable";


const ProductCard = ({ product }) => {

    const [toastIsOpen, setToastIsOpen] = useState(false);
    const { id, name, imageUrl, price } = product
    const { addProduct } = useCart()

    return (
        <>
            <Card>

                <Link
                    href={`/products/${id}`}>
                    <Image
                        className="card-img-top img-fluid"
                        src={imageUrl}
                        alt={name}
                        width={500}
                        height={230}
                    />
                </Link>
                <CardBody>
                    <Link
                        href={`/products/${id}`}>
                        <h5
                            className="card-title"
                            style={{ cursor: "pointer" }}>
                            {name}
                        </h5>
                    </Link>

                    <CardSubtitle
                        className="mb-3 text-muted"
                        tag="h6">
                        ${price}
                    </CardSubtitle>

                    <Button
                        color="dark"
                        className="pb-2"
                        block
                        onClick={() => {
                            addProduct(product)
                            setToastIsOpen(true);
                            setTimeout(() => setToastIsOpen(false), 1000 * 3);
                        }}
                    >
                        Adicionar ao Carrinho
                    </Button>
                </CardBody>
            </Card>

            <SucessToast toastIsOpen={toastIsOpen} setToastIsOpen={setToastIsOpen} />
        </>
    )

};

export default ProductCard;