// src/app/nomenclature/page.tsx

import React from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Box, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { roofingFeltData } from '@/data/nomenclatures'

const Nomenclature: React.FC = () => {
  return (
    <Container>
      <h1>Номенклатура</h1>
      <Box mb={2}>
        <Button variant="contained" color="primary" style={{ marginRight: '10px' }}>Додати Матеріал</Button>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ backgroundColor: 'primary.main', color: 'primary.contrastText' }}>Назва</TableCell>
              <TableCell sx={{ backgroundColor: 'primary.main', color: 'primary.contrastText' }}>Ціна</TableCell>
              <TableCell sx={{ backgroundColor: 'primary.main', color: 'primary.contrastText' }}>Вага</TableCell>
              <TableCell sx={{ backgroundColor: 'primary.main', color: 'primary.contrastText' }}>Довжина</TableCell>
              <TableCell sx={{ backgroundColor: 'primary.main', color: 'primary.contrastText' }}>Товщина</TableCell>
              <TableCell sx={{ backgroundColor: 'primary.main', color: 'primary.contrastText' }}>Основа</TableCell>
              <TableCell sx={{ backgroundColor: 'primary.main', color: 'primary.contrastText' }}>Дії</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {roofingFeltData.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>{item.weight}</TableCell>
                <TableCell>{item.length}</TableCell>
                <TableCell>{item.thickness}</TableCell>
                <TableCell>{item.base}</TableCell>
                <TableCell>
                  <IconButton color="primary" aria-label="edit">
                    <EditIcon />
                  </IconButton>
                  <IconButton color="secondary" aria-label="delete">
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

export default Nomenclature;
