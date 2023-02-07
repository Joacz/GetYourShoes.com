import { Container, Link, Row, Spacer, Text } from '@nextui-org/react';
import React, { FunctionComponent } from 'react';
import css from '@/styles/ui/navBar.module.css';
import { motion } from 'framer-motion';

interface NavbarProps {
  current: string
}

export const Navbar: FunctionComponent<NavbarProps> = (current) => {
  return (
    <nav className='navbar'>
      <motion.div animate={{ opacity: '100%' }} initial={{ opacity: '0%' }}>
        <Container justify='center' align='right' css={{ w: '100%' }}>
          <Row justify='space-between' align='center'>
            <Text b>GetYourShoes.com</Text>
            <Row
              css={{
                gap: '3em',
                w: 'auto',
              }}
            >
              <Link className='link__container active' href='#'>
                <Text color='#ffffff30'>Home</Text>
                <div className='link__underline' />
              </Link>
              <Link className='link__container' href='/contact'>
                <Text className='link__text'>Contact</Text>
                <div className='link__underline' />
              </Link>
              <Link className='link__container' href='/products'>
                <Text className='link__text'>Products</Text>
                <div className='link__underline' />
              </Link>
              <Link className='link__container' href='/about'>
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
