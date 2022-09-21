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

type Product = {
    id: number,
    title: string,
    price: number,
    category: string,
    description: string,
    image: string
}

const ProductList = () => {
    
 const [products, setProducts] = useState<Array<any>>([])

 const dispatch: AppDispatch = useDispatch()

 useEffect(()=>{
    getAllProducts().then((value)=> {
      const product: Product[] = value.data
      setProducts(product)
    })
 },[])

 console.log(products)

 const handleImageCLick = (product: Product) => {
  dispatch(oneProduct(product))
 }

  return (
    <TableContainer component={Paper} sx={{width:'100%', alignContent:'center'}}>
      <Table aria-label="simple table" sx={{ margin: 'auto', width: '50%', padding: '10px' }}>

        <TableBody>
          {products.map((product)=>
            <TableRow key={product.id} sx={{ alignItems:'center', textAlign:'center', padding:'0%', margin:'0%'}}>
              <TableCell sx={{borderBottom:'none', padding:'0%'}} align='right'><Link to={("/product/" + product.title)} onClick={() =>handleImageCLick(product)}><img src={product.image} width='100' height='100'></img></Link></TableCell>
              <TableRow>
                <TableCell sx={{borderBottom:'none'}} align="center" width='5%' height='5%'>{product.title}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{borderBottom:'none'}} align="center" width='5%' height='5%'>{product.price}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{borderBottom:'none'}} align="center" width='5%' height='5%'>{product.category}</TableCell>
              </TableRow>
              <Divider key={product.id}/>
            </TableRow>
            )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ProductList
