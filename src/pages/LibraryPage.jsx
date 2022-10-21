import { AddBook } from 'components/Library';
import { Section, Container } from 'ui/BasicStyles';
import { LibraryContainer } from 'ui/LibraryPage';
import { NavLink } from 'react-router-dom';

export const LibraryPage = () => {
	return (
		<Section>
			<Container>
				<LibraryContainer>
					<AddBook />
					<NavLink to="/training">training</NavLink>
				</LibraryContainer>
			</Container>
		</Section>
	);
};
