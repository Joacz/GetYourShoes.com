import { Container, Row, Text, Image } from '@nextui-org/react';
import { motion } from 'framer-motion';

export const AboutUs = () => {
  return (
    <motion.div
      initial={{ y: -30, opacity: 0 }}
      whileInView={{ y: 0, opacity: '100%' }}
      transition={{ duration: 1, ease: 'easeIn', delay: 0.3 }}
    >
      <Container justify='center' className='about__container'>
        <Row align='center' className='about_row' css={{ gap: '2em' }}>
          <Text h3 size='4em'>
            About us
          </Text>
          <Text
            size='1.2em'
            css={{
              minWidth: 200,
              maxWidth: 1200,
              textAlign: 'justify',
              lineHeight: '4vh',
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            accusantium, vero eaque molestias cum fugit suscipit nihil?
            Exercitationem a quae minima ipsam, inventore magnam vel dolore nemo
            esse vitae eveniet nam illo cum rem explicabo expedita minus natus
            voluptates quo dolores, tempora est veritatis accusantium? Incidunt
            expedita delectus culpa? Aspernatur velit mollitia sunt reiciendis
            numquam eaque doloremque eum qui sit, delectus cum perferendis
            officiis tenetur et ea dolorum alias nulla, dolore cumque vel
            ducimus nisi dignissimos unde. Incidunt eius, non qui ex magni
            aspernatur quisquam voluptates, illo quasi architecto corporis?
            Quasi odio dolores fuga placeat dolorum culpa voluptatem modi
            distinctio!
          </Text>
        </Row>
        <Row justify='center' align='center' className='about_row'>
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: '100%' }}
            transition={{ duration: 1, ease: 'easeIn', delay: 0.3 }}
          >
            <Image
              className='about__img'
              src={'/about-us.jpg'}
              alt='aboutusimg'
            />
          </motion.div>
        </Row>
      </Container>
    </motion.div>
  );
};
