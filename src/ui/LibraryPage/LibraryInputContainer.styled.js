import styled from 'styled-components';

const LibraryInputContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 40px;
	@media screen and (min-width: 768px) {
		flex-direction: row;
	}
	@media screen and (min-width: 1280px) {
		flex-direction: row;
		margin-bottom: 0;
		margin-right: 48px;
	}
`;

export default LibraryInputContainer;
