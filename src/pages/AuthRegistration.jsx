import RegistrationDescription from 'components/Registration/RegistrationDescription';
import Registration from './../components/Registration/Registration';
import { AuthContainer } from 'ui/AuthPage';

export const AuthRegistration = () => {
	return (
		<>
			<AuthContainer>
				<Registration />
				<RegistrationDescription />
			</AuthContainer>
		</>
	);
};
