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
        <Button variant="contained" color="secondary" style={{ marginRight: '10px' }}>Додати Матеріал</Button>
      </Box>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell sx={{ backgroundColor: 'info.main', color: 'primary.contrastText' }}>Назва</TableCell>
              {/*<TableCell sx={{ backgroundColor: 'info.main', color: 'primary.contrastText' }}>Ціна</TableCell>*/}
              <TableCell sx={{ backgroundColor: 'info.main', color: 'primary.contrastText' }}>Вага</TableCell>
              <TableCell sx={{ backgroundColor: 'info.main', color: 'primary.contrastText' }}>Довжина</TableCell>
              <TableCell sx={{ backgroundColor: 'info.main', color: 'primary.contrastText' }}>Товщина</TableCell>
              <TableCell sx={{ backgroundColor: 'info.main', color: 'primary.contrastText' }}>Основа</TableCell>
              <TableCell sx={{ backgroundColor: 'info.main', color: 'primary.contrastText' }}>Дії</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {roofingFeltData.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.name}</TableCell>
                {/*<TableCell>{item.price}</TableCell>*/}
                <TableCell>{item.weight} (кг.)</TableCell>
                <TableCell>{item.length} (м.)</TableCell>
                <TableCell>{item.thickness} (мм.)</TableCell>
                <TableCell>{item.base}</TableCell>
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

export default Nomenclature;
