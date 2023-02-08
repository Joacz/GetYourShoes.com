import { FunctionComponent } from 'react';
import { CategoryCard } from '.';
import { Container, Grid } from '@nextui-org/react';

export const Categories: FunctionComponent = () => {
  return (
    <Container
      className='categories__container'
      css={{
        w: '100%',
      }}
    >
      <Grid.Container
        justify='center'
        alignItems='center'
        className='grid__card__container'
        css={{
          maxWidth: '1920px',
          minWidth: '200px',
        }}
      >
        <div id='categories' />
        <CategoryCard
          title='Elegancy'
          content='"Elegance is the only beauty that never fades."'
          imageUrl='/elegancy.jpg'
          id='elegant'
        />
        <CategoryCard
          title='Street & Style'
          content='"Go confidently in the direction of your dreams"'
          imageUrl='/street.jpg'
          id='street'
        />
        <CategoryCard
          title='Work & Protection'
          content='Rough equipment for harsh conditions.'
          imageUrl='/work.jpg'
          id='work'
        />
        <CategoryCard
          title='Basketball'
          content='Show them on the court.'
          imageUrl='/basketball.jpg'
          id='basketball'
        />
        <CategoryCard
          title='Boots & Hiking'
          content='The highest quality in boots and hiking shoes'
          imageUrl='/hiking.jpg'
          id='boots'
        />
        <CategoryCard
          title='Sneakers & Training'
          content='The most popular sport shoes, nearly for every sport.'
          imageUrl='/training.jpg'
          id='sneakers'
        />
      </Grid.Container>
    </Container>
  );
};
