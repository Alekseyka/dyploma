import React from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { ordersData } from '../../data/orders';

const Orders: React.FC = () => {
  return (
    <Container>
      <h1>Замовлення</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ backgroundColor: 'primary.main', color: 'primary.contrastText' }}>Назва клієнта</TableCell>
              <TableCell sx={{ backgroundColor: 'primary.main', color: 'primary.contrastText' }}>Тип рубероїду</TableCell>
              <TableCell sx={{ backgroundColor: 'primary.main', color: 'primary.contrastText' }}>Кількість</TableCell>
              <TableCell sx={{ backgroundColor: 'primary.main', color: 'primary.contrastText' }}>Термін</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ordersData.map((order, index) => (
              <TableRow key={index}>
                <TableCell>{order.customerName}</TableCell>
                <TableCell>{order.roofingFeltType}</TableCell>
                <TableCell>{order.amount}</TableCell>
                <TableCell>{order.deadlineDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Orders;
