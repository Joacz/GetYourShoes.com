import { Card, Link, Text } from '@nextui-org/react';
import { FunctionComponent } from 'react';
import css from '@/styles/ui/navBar.module.css';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  content: string;
  imageUrl: string;
  id: string;
}

export const CategoryCard: FunctionComponent<CardProps> = ({
  title,
  content,
  imageUrl,
  id,
}) => {
  return (
    <motion.div
      style={{ margin: '1em' }}
      whileInView={{ y: 0, opacity: '100%' }}
      initial={{ y: 30, opacity: 0 }}
      transition={{ bounce: 1, delay: 0.2, ease: 'easeIn', duration: 0.5 }}
    >
      <Link href={`/products/${id}`}>
        <Card
          isHoverable
          isPressable
          variant='flat'
          className='card'
          css={{ position: 'relative', boxShadow: '0 0 2em #ffffff30' }}
        >
          <Card.Body css={{ p: '0' }} className='card__body'>
            <Card.Image
              className='card__image'
              css={{ borderRadius: '.5em' }}
              src={imageUrl}
              objectFit='cover'
              width='100%'
              height='100%'
            />
          </Card.Body>{' '}
          <Card.Header
            className='card__header'
            css={{ position: 'absolute', zIndex: 1 }}
          >
            <Text p>{title}</Text>
            <Text p>{content}</Text>
          </Card.Header>
        </Card>
      </Link>
    </motion.div>
  );
};
