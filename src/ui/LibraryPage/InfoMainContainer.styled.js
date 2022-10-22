import styled from 'styled-components';

const InfoMainContainer = styled.div`
	display: flex;
	position: absolute;
	width: 100%;
	max-height: 425px;
	top: 62%;
	left: 50%;
	transform: translate(-50%, -50%);
	flex-direction: column;
	justify-content: center;
	margin: 0 auto;
	@media screen and (min-width: 768px) {
		position: static;
		transform: translate(0, 0);
		max-width: 608px;
		max-height: 272px;
	}
`;

export default InfoMainContainer;
