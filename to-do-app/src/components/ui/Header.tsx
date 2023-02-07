import { Button, Grid, Row, Text, Image, Card } from '@nextui-org/react';
import { motion } from 'framer-motion';
import { CustomButton } from '.';
import { FunctionComponent } from 'react';

export const Header: FunctionComponent = () => {
  return (
    <motion.div
      animate={{ opacity: '100%' }}
      transition={{ ease: 'easeOut', duration: 2 }}
      initial={{ opacity: '0%' }}
    >
      <Grid.Container
        className='container-title'
        justify='left'
        css={{
          height: '800px',
        }}
      >
        <Grid
          justify='center'
          className='title'
          lg={5}
          md={6}
          sm={7}
          xs='100%'
          css={{ flexDirection: 'column', w: 'auto', padding: '5em' }}
        >
          <motion.div
            animate={{ x: 0, opacity: '100%' }}
            initial={{ opacity: '0%', x: 50 }}
            transition={{ ease: 'easeOut', duration: 1.5 }}
          >
            <Text h1 size='3.5em'>
              The highest quality shoes in the country
            </Text>
            <Text p color='$gray600' size='1.3em'>
              Find the best shoes, we distribute for all the country. Modern
              style, customized and a lot of brands. We have the best pricing in
              the world!
            </Text>
            <CustomButton href='/categories'>Start searching</CustomButton>
          </motion.div>
        </Grid>
      </Grid.Container>
    </motion.div>
  );
};
