import { Container, Link, Row, Text } from '@nextui-org/react';
import React, { FunctionComponent } from 'react';
import { motion } from 'framer-motion';

interface NavbarProps {
  current?: string;
}

export const Navbar: FunctionComponent<NavbarProps> = (current) => {
  return (
    <nav className='navbar'>
      <motion.div animate={{ opacity: '100%' }} initial={{ opacity: '0%' }}>
        <Container justify='center' alignItems='flex-start' css={{ w: '100%' }}>
          <Row justify='space-between' align='center'>
            <Link href='/'>
              <Text b>GetYourShoes.com</Text>
            </Link>
            <Row
              css={{
                gap: '3em',
                w: 'auto',
              }}
            >
              <Link className='link__container' data-status='active' href='#'>
                <Text color='$primary'>Home</Text>
                <div className='link__underline' />
              </Link>
              <Link
                className='link__container'
                data-status='unactive'
                href='/contact'
              >
                <Text className='link__text'>Contact</Text>
                <div className='link__underline' />
              </Link>
              <Link
                className='link__container'
                data-status='unactive'
                href='/products'
              >
                <Text className='link__text'>Products</Text>
                <div className='link__underline' />
              </Link>
              <Link
                className='link__container'
                data-status='unactive'
                href='/about'
              >
                <Text className='link__text'>About</Text>
                <div className='link__underline' />
              </Link>
            </Row>
          </Row>
        </Container>
      </motion.div>
    </nav>
  );
};
