import { Header, Categories, AboutUs } from '@/components/ui';
import { MainLayout } from '../components/layout/MainLayout';
import { Spacer } from '@nextui-org/react';

export default function Home() {
  return (
    <MainLayout>
      <Header />
      <Spacer css={{ h: '350px' }} />
      <Categories />
      <Spacer css={{ h: '350px' }} />
      <AboutUs />
      <Spacer css={{ h: '150px' }} />
    </MainLayout>
  );
}
