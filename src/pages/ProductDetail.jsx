import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../api/product";

const ProductDetail = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        (async () => {
            const data = await getProductById(id);
            setProduct(data);
        })();
    }, [id]);
    return <div>{product.name}</div>;
};

export default ProductDetail;
