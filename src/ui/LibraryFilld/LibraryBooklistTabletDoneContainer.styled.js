import styled from 'styled-components';

const LibraryBooklistTabletDoneContainer = styled.div`
	/* width: 100%; */
	width: ${props => (props.shrinkedWidth ? '50%' : '100%')};
`;

export default LibraryBooklistTabletDoneContainer;
