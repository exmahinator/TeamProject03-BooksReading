import styled from 'styled-components';

const LibraryContainer = styled.div`
	display: none;
	align-self: flex-start;
	height: 100%;
	flex-direction: column;
	justify-content: center;
	color: #898f9f;
	@media screen and (min-width: 768px) {
		display: flex;
	}
`;

export default LibraryContainer;
