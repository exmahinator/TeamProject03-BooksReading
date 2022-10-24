import styled from 'styled-components';

const TimerSec = styled.div`
	position: relative;
	font-family: 'Open Sans';
	font-style: normal;
	font-weight: 700;
	font-size: 25px;
	line-height: 1.52;
	color: #091e3f;
	margin: 0;
	min-width: 60px;
	text-align: center;

	::before {
		content: attr(data-title);
		display: block;
		position: absolute;
		left: 50%;
		bottom: 0;
		transform: translateX(-50%);
		font-size: 14px;
	}

	@media screen and (min-width: 768px) {
	}
	@media screen and (min-width: 1280px) {
	}
`;

export default TimerSec;
