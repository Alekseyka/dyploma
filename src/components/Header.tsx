import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Виробництво Рубероїду
        </Typography>
        <Link href="/nomenclature" passHref>
          <Button color="inherit">Номенклатура</Button>
        </Link>
        <Link href="/specifications" passHref>
          <Button color="inherit">Специфікаціі</Button>
        </Link>
        <Link href="/orders" passHref>
          <Button color="inherit">Замовлення</Button>
        </Link>
        <Link href="/materials" passHref>
          <Button color="inherit">Залишки матеріалів</Button>
        </Link>
        <Link href="/production-plan" passHref>
          <Button color="inherit">План виробництва</Button>
        </Link>
        <Link href="/procurement-plan" passHref>
          <Button color="inherit">План закупівель</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
