import React from 'react';
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Button, IconButton
} from '@mui/material';
import { ordersData } from '@/data/orders';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Orders: React.FC = () => {
  return (
    <Container>
      <h1>Замовлення</h1>
      <TableContainer component={Paper}>
        <Box mb={2}>
          <Button variant="contained" color="secondary" style={{ marginRight: '10px' }}>Додати Замовлення</Button>
        </Box>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell sx={{ backgroundColor: 'info.main', color: 'primary.contrastText' }}>Назва клієнта</TableCell>
              <TableCell sx={{ backgroundColor: 'info.main', color: 'primary.contrastText' }}>Тип рубероїду</TableCell>
              <TableCell sx={{ backgroundColor: 'info.main', color: 'primary.contrastText' }}>Кількість</TableCell>
              <TableCell sx={{ backgroundColor: 'info.main', color: 'primary.contrastText' }}>Термін</TableCell>
              <TableCell sx={{ backgroundColor: 'info.main', color: 'primary.contrastText' }}>Дії</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ordersData.map((order, index) => (
              <TableRow key={index}>
                <TableCell>{order.customerName}</TableCell>
                <TableCell>{order.roofingFeltType}</TableCell>
                <TableCell>{order.amount}</TableCell>
                <TableCell>{order.deadlineDate}</TableCell>
                <TableCell>
                  <IconButton color="secondary" aria-label="edit">
                    <EditIcon />
                  </IconButton>
                  <IconButton color="error" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Orders;
