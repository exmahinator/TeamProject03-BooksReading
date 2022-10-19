import { Outlet } from 'react-router-dom';
import { Container, Section } from 'ui/BasicStyles';

export const Layout = () => {
  return (
    <>
      HEADER
      <Section>
        <Container>
          <Outlet />
        </Container>
      </Section>
    </>
  );
};
