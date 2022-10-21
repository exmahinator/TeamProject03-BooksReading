import { Outlet } from 'react-router-dom';

import Header from './Header/Header';
import LibraryFilld from './Library/LibraryFilld/LibraryFilld';
import LibraryModal from './Library/LibraryModal/LibraryModal';

export const Layout = () => {
	return (
		<>
			<Header />
			<LibraryFilld />
			<LibraryModal />
			<Outlet />
		</>
	);
};
