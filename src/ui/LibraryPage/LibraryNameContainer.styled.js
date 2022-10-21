import styled from 'styled-components';

const LibraryNameContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	margin-bottom: 20px;
	@media screen and (min-width: 768px) {
		margin-bottom: 24px;
	}
	@media screen and (min-width: 1280px) {
		margin-bottom: 0;
		margin-right: 16px;
	}
`;

export default LibraryNameContainer;
