import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../Redux/store';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import {Route, Link, Routes, useParams} from 'react-router-dom';
import { getSingleProduct } from '../Services/getSingleProduct';
import { addShoppingCart } from '../Redux/Slices/shoppingCart';

const Product = () => {

    const dispatch: AppDispatch = useDispatch()

    let Product = {
        id: 0,
        title: '',
        price: 0,
        category: '',
        description: '',
        image: ''
    }
    const {productId} = useParams()
    const [product, setProduct] = useState(Product)

    useEffect(()=>{
        getSingleProduct(productId).then((value)=>{
            setProduct(value.data)
        })
    },[])

    const handleAddCart = () => {
        dispatch(addShoppingCart(product))
    }

    return(
        <TableContainer component={Paper} sx={{width:'100%', alignContent:'center', mt:'10%'}}>
            <Table aria-label="simple table" sx={{ margin: 'auto', width: '60%', padding: '10px' }}>
                <TableBody>
                    <TableRow sx={{ alignItems:'center', textAlign:'center', padding:'0%', margin:'0%'}}>
                        <TableCell sx={{borderBottom:'none', padding:'0%'}} align='right'><img src={product.image} width='200' height='200'></img></TableCell>
                        <TableRow>
                            <TableCell sx={{borderBottom:'none'}} align="left" height='5%'>{product.title}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{borderBottom:'none'}} align="left" height='5%'>{'Price: '+product.price}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{borderBottom:'none'}} align="left" height='5%'>{'Description: '+product.description}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{borderBottom:'none'}} align="left" height='5%'>{'Category: '+product.category}</TableCell>
                        </TableRow>
                        <TableCell sx={{borderBottom:'none'}} align="left" height='5%'>
                            <Button variant="contained" style={{backgroundColor: '#9C746B', color: '#FFFFFF'}} onClick={()=> handleAddCart()}>Add to Cart</Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Product