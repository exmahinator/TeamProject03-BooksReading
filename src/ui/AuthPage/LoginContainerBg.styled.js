import styled from 'styled-components';
import imgPhone from './Image/imgPhone.jpg';
import imgTablet from './Image/imgTablet.jpg';
import imgDesktop from './Image/imgDesktop.jpg';
const LoginContainerBg = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 32px 20px;
	background-image: linear-gradient(
			to right,
			rgba(9, 30, 63, 0.8),
			rgba(9, 30, 63, 0.8)
		),
		url(${imgPhone});
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;

	@media screen and (min-width: 768px) {
		/* padding: 65px 185px; */
		background-image: linear-gradient(
				to right,
				rgba(9, 30, 63, 0.8),
				rgba(9, 30, 63, 0.8)
			),
			url(${imgTablet});
		background-repeat: no-repeat;
		background-position: bottom;
		background-size: cover;
		padding: 0;

		width: 768px;
		height: 737px;
	}
	@media screen and (min-width: 1280px) {
		background-image: linear-gradient(
				to right,
				rgba(9, 30, 63, 0.8),
				rgba(9, 30, 63, 0.8)
			),
			url(${imgDesktop});
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		padding: 0;
		width: 550px;
		height: 790px;
	}
`;

export default LoginContainerBg;
