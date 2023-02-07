import { Header, Categories } from '@/components/ui';
import { MainLayout } from '../components/layout/MainLayout';
import { Spacer } from '@nextui-org/react';

export default function Home() {
  return (
    <MainLayout>
      <Header />
      <Spacer css={{ h: '150px' }} />
      <Categories />
      <Spacer css={{ h: '150px' }} />
    </MainLayout>
  );
}
