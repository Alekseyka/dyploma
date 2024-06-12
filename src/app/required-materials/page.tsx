// src/app/required-materials/page.tsx

import React, { useMemo } from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { productionPlanData } from '@/data/productionPlan';
import { specificationData } from '@/data/specifications';

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
      <h1>Необхідні матеріали</h1>
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
            {requiredMaterials.map((material, index) => (
              <TableRow key={index}>
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

export default RequiredMaterials;
