import React from 'react';
import { useDispatch } from 'react-redux';
import { addBookToRead } from '../../redux/library/libraryOperation';
import {
	LibraryForm,
	LibrarySubContainer,
	LibraryInput,
	LibraryInputContainer,
	LibraryNameContainer,
	LibraryButton,
	LibraryLabel,
} from 'ui/LibraryPage';

function AddBook() {
	const dispatch = useDispatch();

	const handleAddBook = event => {
		event.preventDefault();
		const form = event.currentTarget;

		dispatch(
			addBookToRead({
				title: form.elements.name.value,
				author: form.elements.author.value,
				publishYear: form.elements.year.value,
				pagesTotal: form.elements.pages.value,
			})
		);
		form.reset();
	};

	return (
		<>
			<LibraryForm onSubmit={handleAddBook}>
				<LibraryNameContainer>
					<LibraryLabel htmlFor="name">Назва книги</LibraryLabel>
					<LibraryInput
						id="name"
						type="text"
						name="name"
						pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
						title="Book name may contain only letters, apostrophe, dash and spaces"
						placeholder="..."
						required
					/>
				</LibraryNameContainer>
				<LibraryInputContainer>
					<LibrarySubContainer>
						<LibraryLabel htmlFor="author">Автор книги</LibraryLabel>
						<LibraryInput
							id="author"
							type="text"
							name="author"
							pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
							title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
							placeholder="..."
							required
						/>
					</LibrarySubContainer>
					<LibrarySubContainer>
						<LibraryLabel htmlFor="year">Рік випуску</LibraryLabel>
						<LibraryInput
							id="year"
							type="number"
							name="year"
							pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
							title="Year must be digits"
							placeholder="..."
							required
						/>
					</LibrarySubContainer>
					<LibrarySubContainer>
						<LibraryLabel htmlFor="pages">Кількість сторінок</LibraryLabel>
						<LibraryInput
							id="pages"
							type="number"
							name="pages"
							pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
							title="Page number must be digits"
							placeholder="..."
							required
						/>
					</LibrarySubContainer>
				</LibraryInputContainer>
				<LibraryButton type="submit">Додати</LibraryButton>
			</LibraryForm>
		</>
	);
}

export default AddBook;
