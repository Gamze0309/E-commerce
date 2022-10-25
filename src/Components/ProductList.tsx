import React, { useEffect, useState, useMemo } from 'react';
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
import Pagination from './Pagination'

type Product = {
    id: number,
    title: string,
    price: number,
    category: string,
    description: string,
    image: string
}
let pageSize = 10
const ProductList = () => {
 
 const [products, setProducts] = useState<Array<any>>([])
 const [currentPage, setCurrentPage] = useState(1);

 const currentData = useMemo(() => {
  const firstPageIndex = (currentPage - 1) * pageSize;
  const lastPageIndex = firstPageIndex + pageSize;
  return products.slice(firstPageIndex, lastPageIndex);
}, [currentPage]);

 const dispatch: AppDispatch = useDispatch()

 useEffect(()=>{
    getAllProducts().then((value)=> {
      const product: Product[] = value.data
      setProducts(product)
    })
 },[])

 const handleAddCart = (product: any) => {
  dispatch(addShoppingCart(product))
 }

  return (
    <>
      <TableContainer component={Paper} sx={{width:'100%', alignContent:'center'}}>
        <Table aria-label="simple table" sx={{ margin: 'auto', width: '50%', padding: '10px' }}>

          <TableBody>
            {currentData.map((product)=>
              <TableRow key={product.id} sx={{ alignItems:'center', textAlign:'center', padding:'0%', margin:'0%'}}>
                <TableCell sx={{borderBottom:'none', padding:'0%'}} align='right'><Link to={("/product/" + product.id)}><img src={product.image} width='100' height='100'></img></Link></TableCell>
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
                <TableCell sx={{borderBottom:'none'}} align="left" height='5%'>
                    <Button variant="contained" style={{backgroundColor: '#9C746B', color: '#FFFFFF'}} onClick={() => handleAddCart(product)}>Add to Cart</Button>
                </TableCell>
              </TableRow>
              )}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
       className="pagination-bar"
       currentPage={currentPage}
       totalCount={products.length}
       pageSize={pageSize}
       siblingCount={1}
       onPageChange={(page) => setCurrentPage(page)}/>
    </>
    
  );
}

export default ProductList
