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

 useEffect(()=>{
  getAllProducts().then((res)=> {
    if(res.status == 200){
      const product: Product[] = res.data
      setProducts(product)
    }
  })
},[])

 const currentData = useMemo(() => {
  console.log('burda')
  const firstPageIndex = (currentPage - 1) * pageSize;
  const lastPageIndex = firstPageIndex + pageSize;
  console.log(products.slice(firstPageIndex, lastPageIndex))
  return products.slice(firstPageIndex, lastPageIndex);
}, [products, currentPage]);

 const dispatch: AppDispatch = useDispatch()

 

 const handleAddCart = (product: any) => {
  dispatch(addShoppingCart(product))
 }

  return (
    <>
      <TableContainer component={Paper} sx={{width:'100%'}}>
        <Table aria-label="simple table" sx={{ margin: 'auto', width: '50%'}}>

          <TableBody>
            {currentData.map((product)=>
              <TableRow key={product.id} sx={{ alignItems:'center', textAlign:'center', margin:'0px, auto'}}>
                <TableCell sx={{borderBottom:'none', padding:'0%'}} align='right'><Link to={("/product/" + product.id)}><img src={product.image} width='100' height='100'></img></Link></TableCell>
                <div style={{textAlign:'center', margin:'0px, auto'}}>
                  <TableCell sx={{borderBottom:'none', display:'block',textAlign:'center', margin:'0px, auto'}}>{product.title}</TableCell>
                  <TableCell sx={{borderBottom:'none', display:'block',textAlign:'center', margin:'0px, auto'}}>{product.price}</TableCell>
                  <TableCell sx={{borderBottom:'none', display:'block',textAlign:'center', margin:'0px, auto'}}>{product.category}</TableCell>
                </div>
                <Divider key={product.id}/>
                <TableCell sx={{borderBottom:'none', padding:'0px'}} align="left" height='5%'>
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
