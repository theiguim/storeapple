import products from "../../../../../database.json";

export async function GET(req, {params}){

    const {id} = params;

    const product = products.find(prod => prod.id === Number(id));

    return new Response(JSON.stringify(product), {
        status: 200,
        headers:{
            "Content-Type":"application/json",
        },
    });
};