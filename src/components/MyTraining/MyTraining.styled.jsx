import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
`;

export const Title = styled.h2`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 60px;
	margin: 20px 0;
	background-color: rgba(177, 181, 194, 1);
	color: rgba(255, 255, 255, 1);
`;

export const BoxForm = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

export const Button = styled.button`
	margin-top: 32px;
	font-family: Montserrat;
	font-weight: 500;
	font-size: 14px;
	line-height: 1.21;

	@media screen and (min-width: 768px) {
		width: 171px;
		height: 42px;
	}
`;
