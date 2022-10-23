import styled from 'styled-components';

const LibraryContainer = styled.div`
	display: flex;
	align-self: flex-start;
	position: relative;
	height: 100%;
	z-index: 1;
	flex-direction: column;
	justify-content: center;
	color: #898f9f;
	@media screen and (min-width: 768px) {
		display: none;
	}
`;

export default LibraryContainer;
