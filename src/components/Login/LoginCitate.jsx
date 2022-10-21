import {
	LoginCitateContainer,
	LoginCitateText,
	LoginCitateBorder,
	LoginCitateAutor,
	LoginCitateIcon,
} from 'ui/AuthPage';

const LoginCitate = () => {
	return (
		<LoginCitateContainer>
			<span>
				<LoginCitateIcon />
			</span>
			<LoginCitateText>
				Книги — это корабли мысли, странствующие по волнам времени и бережно
				несущие свой драгоценный груз от поколения к поколению.
			</LoginCitateText>
			<LoginCitateBorder></LoginCitateBorder>
			<LoginCitateAutor>Бэкон Ф.</LoginCitateAutor>
		</LoginCitateContainer>
	);
};

export default LoginCitate;
