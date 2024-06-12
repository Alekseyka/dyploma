// src/app/specifications/page.tsx

'use client'
import React, { useState } from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, MenuItem, Select, FormControl, InputLabel, SelectChangeEvent } from '@mui/material';
import { specificationData } from '@/data/specifications';

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
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ backgroundColor: 'primary.main', color: 'primary.contrastText' }}>Назва матеріалу</TableCell>
                  <TableCell sx={{ backgroundColor: 'primary.main', color: 'primary.contrastText' }}>Кількість</TableCell>
                  <TableCell sx={{ backgroundColor: 'primary.main', color: 'primary.contrastText' }}>Одиниця виміру</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {selectedSpecification.materials.map((material, matIndex) => (
                  <TableRow key={matIndex}>
                    <TableCell>{material.name}</TableCell>
                    <TableCell>{material.amount}</TableCell>
                    <TableCell>{material.unit}</TableCell>
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
