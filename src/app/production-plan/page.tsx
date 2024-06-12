// src/app/production-plan/page.tsx
'use client'
import React, { useState } from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, MenuItem, Select, FormControl, InputLabel, SelectChangeEvent } from '@mui/material';
import { productionPlanData } from '@/data/productionPlan';

const ProductionPlan: React.FC = () => {
  const [selectedWeek, setSelectedWeek] = useState<string>('');

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedWeek(event.target.value as string);
  };

  const filteredProductionPlans = productionPlanData.filter(plan => plan.week === selectedWeek);

  return (
    <Container>
      <h1>План виробництва</h1>
      <FormControl fullWidth>
        <InputLabel id="week-select-label">Виберіть тиждень</InputLabel>
        <Select
          labelId="week-select-label"
          value={selectedWeek}
          label="Виберіть тиждень"
          onChange={handleChange}
        >
          {[...new Set(productionPlanData.map(plan => plan.week))].map((week, index) => (
            <MenuItem key={index} value={week}>
              {week}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {filteredProductionPlans.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ backgroundColor: 'primary.main', color: 'primary.contrastText' }}>Лінія виробництва</TableCell>
                  <TableCell sx={{ backgroundColor: 'primary.main', color: 'primary.contrastText' }}>Тип рубероїду</TableCell>
                  <TableCell sx={{ backgroundColor: 'primary.main', color: 'primary.contrastText' }}>Кількість</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredProductionPlans.map((plan, index) => (
                  <TableRow key={index}>
                    <TableCell>{plan.productionLine}</TableCell>
                    <TableCell>{plan.roofingFeltType}</TableCell>
                    <TableCell>{plan.quantity}</TableCell>
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

export default ProductionPlan;
