import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleChange = e => {
		const { value } = e.target;
		if (e.target.name === 'email') {
			setEmail(value);
		}
		if (e.target.name === 'password') {
			setPassword(value);
		}
	};

      const handleSubmit = e => {
    e.preventDefault();
    // const chekName = contacts.find(
    //   el => el.name.toLowerCase() === name.toLowerCase()
    // );
    // if (chekName) {
    //   alert('Такий контакт вже є...');
    //   return;
    // }

    // dispatch(addContact({ name, phone }));
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

	return (
        <>
            <button type='button'>google</button>
            <form onSubmit={handleSubmit}>
                <label>Електронна адреса *
				<input value={email} type="text" name="email" placeholder='your@email.com' onChange={handleChange}/>
                </label>
                <label>Пароль *
				<input value={password} type="password" name="password" placeholder='Пароль' onChange={handleChange}/>
                </label>
                <button type="submit">Увійти</button>
                <Link to='/register'>Реєстрація</Link>
			</form>
		</>
	);
};

export default Login;
