import { Outlet } from 'react-router-dom';
import { Container, Section } from 'ui/BasicStyles';

import Header from './Header/Header';
import MyGoals from './MyGoals/MyGoals';


export const Layout = () => {
  return (
    <>
     <Header />
      <Section>
        <MyGoals/>
        <Container>
          <Outlet />
        </Container>
      </Section>
    </>
  );
};
