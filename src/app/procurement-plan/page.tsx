// src/app/procurement-plan/page.tsx

import React, { useMemo } from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { materialsData } from '@/data/materials';
import { productionPlanData } from '@/data/productionPlan';
import { specificationData } from '@/data/specifications';
import { vendorMapping } from '../../data/vendors';

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

const calculateProcurementPlan = () => {
  const requiredMaterials = calculateRequiredMaterials();
  const warehouseMaterials = new Map<string, number>(
    materialsData.map(material => [material.name, material.amount])
  );

  return requiredMaterials.map(material => {
    const warehouseAmount = warehouseMaterials.get(material.name) || 0;
    const procurementAmount = material.amount - warehouseAmount;
    return {
      ...material,
      amount: procurementAmount > 0 ? procurementAmount : 0,
      vendor: vendorMapping[material.name] || 'Unknown',
    };
  });
};

const ProcurementPlan: React.FC = () => {
  const procurementPlan = useMemo(calculateProcurementPlan, []);

  return (
    <Container>
      <h1>План закупівель</h1>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell sx={{ backgroundColor: 'info.main', color: 'primary.contrastText' }}>Назва матеріалу</TableCell>
              <TableCell sx={{ backgroundColor: 'info.main', color: 'primary.contrastText' }}>Необхідна кількість</TableCell>
              <TableCell sx={{ backgroundColor: 'info.main', color: 'primary.contrastText' }}>Одиниця виміру</TableCell>
              <TableCell sx={{ backgroundColor: 'info.main', color: 'primary.contrastText' }}>Постачальник</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {procurementPlan.map((material, index) => (
              <TableRow key={index}>
                <TableCell>{material.name}</TableCell>
                <TableCell>{material.amount.toFixed(1)}</TableCell>
                <TableCell>{material.unit}</TableCell>
                <TableCell>{material.vendor}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ProcurementPlan;
