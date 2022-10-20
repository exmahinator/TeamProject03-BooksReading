import { AddBook } from 'components/Library';
import { Section, Container } from 'ui/BasicStyles';
import { LibraryContainer } from 'ui/LibraryPage';

export const LibraryPage = () => {
	return (
		<Section>
			<Container>
				<LibraryContainer>
					<AddBook />
				</LibraryContainer>
			</Container>
		</Section>
	);
};
