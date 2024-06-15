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
  IconButton, Box, Button
} from '@mui/material';
import { materialsData } from '../../data/materials';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Materials: React.FC = () => {
  return (
    <Container>
      <h1>Залишки матеріалів</h1>
      <Box mb={2}>
        <Button variant="contained" color="secondary" style={{ marginRight: '10px' }}>Додати Залишок</Button>
      </Box>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              {/*<TableCell sx={{ backgroundColor: 'info.main', color: 'primary.contrastText' }}>Тип матеріалу</TableCell>*/}
              <TableCell sx={{ backgroundColor: 'info.main', color: 'primary.contrastText' }}>Номенклатура</TableCell>
              <TableCell sx={{ backgroundColor: 'info.main', color: 'primary.contrastText' }}>Кількість</TableCell>
              <TableCell sx={{ backgroundColor: 'info.main', color: 'primary.contrastText' }}>Одиниця виміру</TableCell>
              <TableCell sx={{ backgroundColor: 'info.main', color: 'primary.contrastText' }}>Дії</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {materialsData.map((material, index) => (
              <TableRow key={index}>
                {/*<TableCell>{material.type}</TableCell>*/}
                <TableCell>{material.name}</TableCell>
                <TableCell>{material.amount}</TableCell>
                <TableCell>{material.unit}</TableCell>
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

export default Materials;
