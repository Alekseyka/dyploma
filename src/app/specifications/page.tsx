// src/app/specifications/page.tsx

'use client'
import React, { useState } from 'react';
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  SelectChangeEvent,
  Button, Box, IconButton
} from '@mui/material';
import { specificationData } from '@/data/specifications';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Specifications: React.FC = () => {
  const [selectedRoofingFelt, setSelectedRoofingFelt] = useState<string>('');

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedRoofingFelt(event.target.value as string);
  };

  const selectedSpecification = specificationData.find(spec => spec.roofingFelt === selectedRoofingFelt);

  return (
    <Container>
      <h1>Специфікація</h1>
      <FormControl fullWidth>
        <InputLabel id="roofing-felt-select-label">Виберіть тип рубероїду</InputLabel>
        <Select
          labelId="roofing-felt-select-label"
          value={selectedRoofingFelt}
          label="Виберіть тип рубероїду"
          onChange={handleChange}
        >
          {specificationData.map((spec, index) => (
            <MenuItem key={index} value={spec.roofingFelt}>
              {spec.roofingFelt}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {selectedSpecification && (
        <div style={{ marginTop: '20px' }}>
          <Box mb={2}>
            <Button variant="contained" color="secondary" style={{ marginRight: '10px' }}>Додати сировину</Button>
          </Box>
          <TableContainer component={Paper}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ backgroundColor: 'info.main', color: 'primary.contrastText' }}>Назва матеріалу</TableCell>
                  <TableCell sx={{ backgroundColor: 'info.main', color: 'primary.contrastText' }}>Кількість</TableCell>
                  <TableCell sx={{ backgroundColor: 'info.main', color: 'primary.contrastText' }}>Одиниця виміру</TableCell>
                  <TableCell sx={{ backgroundColor: 'info.main', color: 'primary.contrastText' }}>Дії</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {selectedSpecification.materials.map((material, matIndex) => (
                  <TableRow key={matIndex}>
                    <TableCell>{material.name}</TableCell>
                    <TableCell>{material.amount.toFixed(1)}</TableCell>
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
        </div>
      )}
    </Container>
  );
};

export default Specifications;
