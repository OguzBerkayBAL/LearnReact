import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { setSelectedProduct } from '../redux/slices/productSlice';
import { HiOutlinePlusCircle } from "react-icons/hi2";
import { HiOutlineMinusCircle } from "react-icons/hi2";

const ProductDetails = () => {
    const { id } = useParams();
    const { products, selectedProduct } = useSelector((store) => store.product)
    const { price, image, title, description } = selectedProduct;

    const dispatch = useDispatch();

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    useEffect(() => {
        getProductById();
    }, [])

    const getProductById = () => {
        products && products.map((product) => {
            if (product.id == id) {
                dispatch(setSelectedProduct(product));
            }
        })
    }

    return (
        <div style={{ marginTop: '50px', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <div style={{ marginRight: '50px' }}>
                <img src={image} width={300} height={500} alt="" />
            </div>
            <div>
                <h1 style={{ fontFamily: 'arial' }}>{title}</h1>
                <p style={{ fontFamily: 'arial', fontSize: '20px' }}>{description}</p>
                <h1 style={{ fontSize: '50px', fontFamily: 'arial', fontWeight: 'bold', color: 'red' }}>{price}₺</h1>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <HiOutlinePlusCircle onClick={increment} style={{ fontSize: '40px', marginRight:'5px' }} />
                    <span style={{fontSize:'30px'}}>{count}</span>

                    <HiOutlineMinusCircle onClick={decrement} style={{ fontSize: '40px', marginLeft:'5px' }} />
                </div>
                <div>
                    <button style={{
                        width:'100%',
                        marginTop:'25px',
                        border:'none',
                        padding:'10px',
                        backgroundColor:'blue',
                        borderRadius:'5px',
                        color:'white',
                    }}>Sepete Ekle</button>
                </div>
            </div>

        </div>
    )
}

export default ProductDetails