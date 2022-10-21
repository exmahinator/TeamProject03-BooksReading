// import { Outlet } from 'react-router-dom';
import { Container, Section } from 'ui/BasicStyles';
import Header from './Header/Header';
import TrainingList from './TrainingList/TrainingList';

export const Layout = () => {
  return (
    <>
      <Header />
      <Section>
        <Container>
          {/* <Outlet /> */}
          <TrainingList />
        </Container>
      </Section>
    </>
  );
};
