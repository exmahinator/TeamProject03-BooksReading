import { AddBook } from 'components/Library';
import { Section, Container } from 'ui/BasicStyles';
import { LibraryContainer } from 'ui/LibraryPage';
import { NavLink } from 'react-router-dom';
import LibraryFilld from '../components/Library/LibraryFilld/LibraryFilld';
import LibraryModal from '../components/Library/LibraryModal/LibraryModal';

export const LibraryPage = () => {
	return (
		<Section>
			<Container>
				<LibraryContainer>
					<AddBook />
					<LibraryFilld />
					<LibraryModal />
					<NavLink to="/training">training</NavLink>
				</LibraryContainer>
			</Container>
		</Section>
	);
};
