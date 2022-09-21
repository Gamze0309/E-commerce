import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../Redux/store';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Product = () => {
    console.log('hereee')
    const product = useSelector((state: RootState)=> state.oneProduct)
    console.log(product)
    return(
        <TableContainer component={Paper} sx={{width:'100%', alignContent:'center', mt:'10%'}}>
            <Table aria-label="simple table" sx={{ margin: 'auto', width: '50%', padding: '10px' }}>
                <TableBody>
                    <TableRow sx={{ alignItems:'center', textAlign:'center', padding:'0%', margin:'0%'}}>
                        <TableCell sx={{borderBottom:'none', padding:'0%'}} width='50%' align='right'><img src={product.image} width='200' height='200'></img></TableCell>
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
                            <TableCell sx={{borderBottom:'none'}} align="left" width='5%' height='5%'>{'Category: '+product.category}</TableCell>
                        </TableRow>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Product