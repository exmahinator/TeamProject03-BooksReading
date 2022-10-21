import styled from 'styled-components';

const LoginForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 28px;
	gap: 20px;
	@media screen and (min-width: 768px) {
		padding: 0 40px 40px 40px;
	}
`;

export default LoginForm;
