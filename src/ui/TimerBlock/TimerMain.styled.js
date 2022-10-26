import styled from 'styled-components';

const TimerMain = styled.div`
	/* max-width: 450px; */
	text-align: center;
	justify-content: center;
	/* margin: 0 auto; */

	@media screen and (min-width: 768px) {
		/* margin-right: 32px; */
		/* max-width: 290px; */
		display: flex;
		align-items: start;

		:not(:first-child) {
			/* margin-right: 32px; */
		}

		/* &:first-child {
			margin-right: 32px;
		} */
		/* justify-content: start; */
		/* text-align: center; */
	}

	@media screen and (min-width: 1280px) {
		/* display: flex;
    align-items: center;
    text-align: center; */
	margin-bottom: 40px;
	}
`;

export default TimerMain;
