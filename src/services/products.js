export const fetchProducts = async () =>{
const products = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/products`)
.then(res => res.json());
return products;
};

export const fetchProduct = async (id) =>{
    const product = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/products/${id}`)
    .then(res => res.json());
    return product;
};
