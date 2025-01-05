import React from 'react'
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { id, name, price } = product;

    const navigate = useNavigate();
    return (
        <div style={{marginBottom: '40px', backgroundColor: 'lightgray', padding: '20px'}}>
            <div>Ürün Detayı</div>
            <h3>İsim: {name}</h3>
            <h3>Fiyat: {price}</h3>
            <button onClick={()=> navigate("/product-details/" + id)}>Detayına Git</button>
        </div>

    )
}

export default Product