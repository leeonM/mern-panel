import React from 'react'
import "./History.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import moment from 'moment'


const History = ({user}) => {
  
  const products = user.products

  return (
    <div className='history'>
      <div className="top">
            <span><h3>History</h3></span>
        </div>
        <hr />
        <div className="bottom">
        <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='tableCell'>Description</TableCell>
            <TableCell className='tableCell' align="right">Date</TableCell>
            <TableCell className='tableCell' align="right">Type</TableCell>
            <TableCell className='tableCell' align="right">Amount (£)</TableCell>
            <TableCell className='tableCell' align="right">Term (Years)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.productName}
              </TableCell>
              <TableCell align="right">{moment(row.createdAt).format("D MMM YY")}</TableCell>
              <TableCell align="right">{row.type}</TableCell>
              <TableCell align="right">£{row.amount.toLocaleString('en-US')}</TableCell>
              <TableCell align="right">{row.years}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    </div>
  )
}

export default History