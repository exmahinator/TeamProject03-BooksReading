import React from 'react';
import { useState } from 'react';
import {
  LibraryForm,
  LibrarySubContainer,
  LibraryInput,
  LibraryInputContainer,
  LibraryNameContainer,
  LibraryButton,
} from 'ui/LibraryPage';

function AddBook() {
  const [bookName, setBookName] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const [bookYear, setBookYear] = useState('');
  const [bookPages, setBookPages] = useState('');
  const [book, setBook] = useState('');

  const onInput = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setBookName(value);
        break;
      case 'author':
        setBookAuthor(value);
        break;
      case 'year':
        setBookYear(value);
        break;
      case 'pages':
        setBookPages(value);
        break;
      default:
        alert('Something went wrong...');
        return;
    }
  };

  const handleAddBook = event => {
    event.preventDefault();
    console.log('clicking');
    setBook({
      name: bookName,
      author: bookAuthor,
      year: bookYear,
      pages: bookPages,
    });
    console.log(book);
  };

  return (
    <>
      <LibraryForm onSubmit={handleAddBook}>
        <LibraryNameContainer>
          <label htmlFor="name">Назва книги</label>
          <LibraryInput
            id="name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Book name may contain only letters, apostrophe, dash and spaces"
            value={bookName}
            onChange={onInput}
            placeholder="..."
            required
          />
        </LibraryNameContainer>
        <LibraryInputContainer>
          <LibrarySubContainer>
            <label htmlFor="author">Автор книги</label>
            <LibraryInput
              id="author"
              type="text"
              name="author"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              value={bookAuthor}
              onChange={onInput}
              placeholder="..."
              required
            />
          </LibrarySubContainer>
          <LibrarySubContainer>
            <label htmlFor="year">Рік випуску</label>
            <LibraryInput
              id="year"
              type="number"
              name="year"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Year must be digits"
              value={bookYear}
              onChange={onInput}
              placeholder="..."
              required
            />
          </LibrarySubContainer>
          <LibrarySubContainer>
            <label htmlFor="pages">Кількість сторінок</label>
            <LibraryInput
              id="pages"
              type="number"
              name="pages"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Page number must be digits"
              value={bookPages}
              onChange={onInput}
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
