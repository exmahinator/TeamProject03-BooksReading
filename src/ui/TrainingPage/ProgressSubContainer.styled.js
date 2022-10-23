import styled from 'styled-components';

const ProgressSubContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	:first-child {
		margin-right: 0;
	}

	@media screen and (min-width: 768px) {
		:first-child {
			margin-right: 100px;
		}
	}
	@media screen and (min-width: 1280px) {
		:first-child {
			margin-right: 0;
		}
	}
`;

export default ProgressSubContainer;
