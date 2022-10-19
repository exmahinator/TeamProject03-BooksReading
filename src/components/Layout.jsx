import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <div>HEADER</div> <Outlet />
    </>
  );
};
