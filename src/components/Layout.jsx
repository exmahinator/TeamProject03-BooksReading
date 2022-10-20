import { Outlet } from 'react-router-dom';
import { Container, Section } from 'ui/BasicStyles';
import TrainingList from './TrainingList';

import Header from './Header/Header';


export const Layout = () => {
  return (
    <>
      HEADER
      <TrainingList/>
      <Section>
        <Container>
          <Outlet />
        </Container>
      </Section>
    </>
  );
};
