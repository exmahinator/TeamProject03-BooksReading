import styled from 'styled-components';

const LibraryBooklistTabletCell = styled.td`
	text-align: ${props => (props.right ? 'right' : 'left')};
`;

export default LibraryBooklistTabletCell;
