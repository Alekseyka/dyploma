// src/app/required-materials/page.tsx

import React, { useMemo } from 'react';
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
  Button
} from '@mui/material';
import { productionPlanData } from '@/data/productionPlan';
import { specificationData } from '@/data/specifications';
import Link from "next/link";

const calculateRequiredMaterials = () => {
  const materialMap = new Map<string, { amount: number; unit: string }>();

  productionPlanData.forEach(plan => {
    const spec = specificationData.find(spec => spec.roofingFelt === plan.roofingFeltType);
    if (spec) {
      spec.materials.forEach(material => {
        if (materialMap.has(material.name)) {
          const existingMaterial = materialMap.get(material.name)!;
          existingMaterial.amount += material.amount * plan.quantity;
        } else {
          materialMap.set(material.name, {
            amount: material.amount * plan.quantity,
            unit: material.unit,
          });
        }
      });
    }
  });

  return Array.from(materialMap.entries()).map(([name, { amount, unit }]) => ({
    name,
    amount,
    unit,
  }));
};

const RequiredMaterials: React.FC = () => {
  const requiredMaterials = useMemo(calculateRequiredMaterials, []);

  return (
    <Container>
      <h1>Необхідна сировина для виконання плану</h1>
      <Box mb={2}>
        <Link href="/procurement-plan" passHref>
          <Button variant="contained" color="secondary" style={{ marginRight: '10px' }}>Сформувати план закупівель матеріалів</Button>
        </Link>
      </Box>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell sx={{ backgroundColor: 'info.main', color: 'primary.contrastText' }}>Назва матеріалу</TableCell>
              <TableCell sx={{ backgroundColor: 'info.main', color: 'primary.contrastText' }}>Кількість</TableCell>
              <TableCell sx={{ backgroundColor: 'info.main', color: 'primary.contrastText' }}>Одиниця виміру</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {requiredMaterials.map((material, index) => (
              <TableRow key={index}>
                <TableCell>{material.name}</TableCell>
                <TableCell>{material.amount.toFixed(1)}</TableCell>
                <TableCell>{material.unit}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default RequiredMaterials;
