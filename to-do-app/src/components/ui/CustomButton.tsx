import { Button } from '@nextui-org/react';
import { motion } from 'framer-motion';
import { FunctionComponent } from 'react';

interface CustomButton {
  children: string;
  href: string;
}

export const CustomButton: FunctionComponent<CustomButton> = ({
  children,
  href,
}) => {
  return (
    <motion.div className='btn-container'>
      <Button
        className='button'
        css={{
          mt: '3.5em',
          bg: '$gradient',
          transition: 'all .2s ease-in',
        }}
      >
        {children}
      </Button>
      <div className='shadow' />
    </motion.div>
  );
};
