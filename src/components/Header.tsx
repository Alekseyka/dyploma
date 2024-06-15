import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image'

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box >
          <Image
            src="/logo.png"
            alt='logo'
            width={200}
            height={50}
          />
        </Box>
        {/*<Typography variant="h6" style={{ flexGrow: 1 }} color="inherit">*/}
        {/*  Виробництво Рубероїду*/}
        {/*</Typography>*/}
        <Link href="/nomenclature" passHref style={{marginLeft: "31px"}}>
          <Button color="inherit">Номенклатура</Button>
        </Link>
        <Link href="/specifications" passHref>
          <Button color="inherit">Специфікаціі</Button>
        </Link>
        <Link href="/orders" passHref>
          <Button color="inherit">Замовлення</Button>
        </Link>
        {/*<Link href="/materials" passHref>*/}
        {/*  <Button color="inherit">Залишки матеріалів</Button>*/}
        {/*</Link>*/}
        <Link href="/production-plan" passHref>
          <Button color="inherit">План виробництва</Button>
        </Link>
        <Link href="/required-materials" passHref>
          <Button color="inherit">Необхідна сировина</Button>
        </Link>
        <Link href="/procurement-plan" passHref>
          <Button color="inherit">План закупівель</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
