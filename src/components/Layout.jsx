import { Outlet } from 'react-router-dom';
import { Container, Section } from 'ui/BasicStyles';
import Header from './Header/Header';

export const Layout = () => {
  return (
    <>
      <Header />
      <Section>
        <Container>
          <Outlet />
        </Container>
      </Section>
    </>
  );
};
