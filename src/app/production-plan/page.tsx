'use client'
import React, { useState, useMemo } from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, MenuItem, Select, FormControl, InputLabel, SelectChangeEvent } from '@mui/material';
import { productionPlanData } from '@/data/productionPlan';
import { ordersData } from '@/data/orders';

const calculateProductionPlanForWeek = (week: string | undefined) => {
  if (!week) return [];

  const lineCapacities = {
    "Лінія 1": 50, // Line 1 capacity per day (cardboard-based items)
    "Лінія 2": 70, // Line 2 capacity per day (fiberglass-based items)
  };

  const productionPlans = productionPlanData.filter(plan => plan.week === week);
  const schedule = {
    "Лінія 1": [],
    "Лінія 2": [],
  };

  productionPlans.forEach(plan => {
    const order = ordersData.find(o => o.roofingFeltType === plan.roofingFeltType);
    if (order) {
      const daysNeeded = Math.ceil(order.amount / lineCapacities[plan.productionLine]);
      const event = {
        name: order.roofingFeltType,
        days: daysNeeded,
        productionLine: plan.productionLine,
        startDate: new Date(week), // Assuming the week starts on the given date
      };
      schedule[plan.productionLine].push(event);
    }
  });

  return schedule;
};

const generateTableData = (productionSchedule) => {
  const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const tableData = {
    "Лінія 1": Array(7).fill(''),
    "Лінія 2": Array(7).fill(''),
  };

  Object.keys(productionSchedule).forEach(line => {
    productionSchedule[line].forEach(event => {
      for (let i = 0; i < event.days; i++) {
        tableData[line][i] = `Producing ${event.name}`;
      }
    });
  });

  return tableData;
};

const ProductionPlan: React.FC = () => {
  const [selectedWeek, setSelectedWeek] = useState<string | undefined>();

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedWeek(event.target.value as string);
  };

  const productionSchedule = useMemo(() => calculateProductionPlanForWeek(selectedWeek), [selectedWeek]);
  const tableData = useMemo(() => generateTableData(productionSchedule), [productionSchedule]);

  return (
    <Container>
      <h1>План виробництва</h1>
      <FormControl fullWidth>
        <InputLabel id="week-select-label">Виберіть тиждень</InputLabel>
        <Select
          labelId="week-select-label"
          value={selectedWeek || ''}
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
      {selectedWeek && (
        <TableContainer component={Paper} style={{ marginTop: '20px' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ backgroundColor: 'info.main', color: 'primary.contrastText' }}>Line #</TableCell>
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                  <TableCell key={day} sx={{ backgroundColor: 'info.main', color: 'primary.contrastText' }}>{day}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.keys(tableData).map(line => (
                <TableRow key={line}>
                  <TableCell>{line}</TableCell>
                  <TableCell>{line == 'Лінія 1' ? 'Єврорубероїд ПромІзол' : 'Рубероїд Економ'}</TableCell>
                  <TableCell>{line == 'Лінія 1' ? 'Єврорубероїд ПромІзол' : 'Рубероїд Економ'}</TableCell>
                  <TableCell>{line == 'Лінія 1' ? 'Єврорубероїд ПромІзол' : 'Рубероїд Економ'}</TableCell>
                  <TableCell>{line == 'Лінія 1' ? 'Єврорубероїд ПромІзол, Рубероїд Стандарт' : 'Рубероїд Економ'}</TableCell>
                  <TableCell>{line == 'Лінія 1' ? 'Рубероїд Стандарт' : 'Рубероїд Економ'}</TableCell>
                  <TableCell>{line == 'Лінія 1' ? 'Рубероїд Стандарт' : 'Рубероїд Економ'}</TableCell>
                  <TableCell>{line == 'Лінія 1' ? 'Рубероїд Стандарт' : 'Рубероїд Економ'}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
};

export default ProductionPlan;
