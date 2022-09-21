import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getAllProducts } from '../Services/getAllProducts';
import {Route, Link, Routes, useParams} from 'react-router-dom';
import Divider from '@mui/material/Divider';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../Redux/store';
import { oneProduct } from '../Redux/Slices/oneProduct';
import Button from '@mui/material/Button';
import { addShoppingCart } from '../Redux/Slices/shoppingCart';

const ShoppingCartList = () => {
    
 const products = useSelector((state: RootState)=> state.shoppingCart.products)

  return (
    <TableContainer component={Paper} sx={{width:'100%', alignContent:'center'}}>
      <Table aria-label="simple table" sx={{ margin: 'auto', width: '50%', padding: '10px' }}>

        <TableBody>
          {products.map((product)=>
            <TableRow key={product.product.id} sx={{ alignItems:'center', textAlign:'center', padding:'0%', margin:'0%'}}>
              <TableCell sx={{borderBottom:'none', padding:'0%'}} align='right'><Link to={("/product/" + product.product.id)}><img src={product.product.image} width='100' height='100'></img></Link></TableCell>
              <TableRow>
                <TableCell sx={{borderBottom:'none'}} align="center" width='5%' height='5%'>{product.product.title}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{borderBottom:'none'}} align="center" width='5%' height='5%'>{'Price: ' + product.product.price}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{borderBottom:'none'}} align="center" width='5%' height='5%'>{'Category: ' + product.product.category}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{borderBottom:'none'}} align="center" width='5%' height='5%'>{'Quantity: ' + product.quantity}</TableCell>
              </TableRow>
              <Divider key={product.product.id}/> 
            </TableRow>
            )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ShoppingCartList
