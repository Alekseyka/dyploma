import React from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { materialsData } from '../../data/materials';

const Materials: React.FC = () => {
  return (
    <Container>
      <h1>Залишки матеріалів</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {/*<TableCell sx={{ backgroundColor: 'primary.main', color: 'primary.contrastText' }}>Тип матеріалу</TableCell>*/}
              <TableCell sx={{ backgroundColor: 'primary.main', color: 'primary.contrastText' }}>Номенклатура</TableCell>
              <TableCell sx={{ backgroundColor: 'primary.main', color: 'primary.contrastText' }}>Кількість</TableCell>
              <TableCell sx={{ backgroundColor: 'primary.main', color: 'primary.contrastText' }}>Одиниця виміру</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {materialsData.map((material, index) => (
              <TableRow key={index}>
                {/*<TableCell>{material.type}</TableCell>*/}
                <TableCell>{material.name}</TableCell>
                <TableCell>{material.amount}</TableCell>
                <TableCell>{material.unit}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Materials;
