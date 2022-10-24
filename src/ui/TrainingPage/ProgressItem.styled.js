import styled from 'styled-components';

const ProgressItem = styled.li`
	display: flex;
	flex-direction: column;
	max-width: 100px;
	:not(:last-child) {
		margin-right: 20px;
	}
`;

export default ProgressItem;
