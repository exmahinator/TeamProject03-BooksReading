import { AddBook } from 'components/Library';
import { NavLink } from 'react-router-dom';
import { Section, Container } from 'ui/BasicStyles';
import { LibraryContainer } from 'ui/LibraryPage';

export const LibraryPage = () => {
	return (
		<Section>
			<Container>
				<LibraryContainer>
					<AddBook />
					<NavLink to='/training'>training</NavLink>
				</LibraryContainer>
			</Container>
		</Section>
	);
};
