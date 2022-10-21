import Login from 'components/Login/Login';
import LoginCitate from 'components/Login/LoginCitate';
import { AuthContainer } from 'ui/AuthPage';

export const AuthLogin = () => {
	return (
		<>
			<AuthContainer>
				<Login />
				<LoginCitate />
			</AuthContainer>
		</>
	);
};
