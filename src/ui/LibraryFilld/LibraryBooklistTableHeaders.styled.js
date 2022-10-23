import styled from 'styled-components';

const LibraryBooklistTableHeader = styled.th`
	text-align: ${props => (props.right ? 'right' : 'left')};
	padding-bottom: 8px;
`;

export default LibraryBooklistTableHeader;
