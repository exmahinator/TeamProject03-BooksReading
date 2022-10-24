import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
	ModalTitle,
	RaitingBlok,
	RaitingStar,
	ResumeTitle,
	InputModal,
	ButtonBlock,
	ButtonModal,
} from 'ui/LibraryModal';
import { addBookReview } from '../../../redux/library/libraryOperation';

function LibraryModal({ toogleModal }) {
	const [newValue, setNewValue] = useState(null);
	const [coment, setComent] = useState('');
	// console.log(newValue);
	// console.log(coment);

	const dispatch = useDispatch();

	const bookId = '63554a973551fd60da511947';

	const handleAddReview = (newValue, coment, bookId) => {
		dispatch(
			addBookReview({
				bookId,
				rating: newValue,
				feedback: coment,
			})
		);
	};

	// console.log({
	//     bookId,
	// 	rating: newValue,
	// 	feedback: coment,
	// });

	return (
		<>
			<ModalTitle>Обрати Рейтинг книги</ModalTitle>
			<RaitingBlok>
				<RaitingStar>
					<Typography component="legend"></Typography>
					<Rating
						name="simple-controlled"
						value={newValue}
						onChange={(event, newValue) => {
							setNewValue(newValue);
						}}
					/>
				</RaitingStar>
				<ResumeTitle>
					<label htmlFor="content">Резюме</label>
				</ResumeTitle>
				<InputModal>
					<textarea style={{'width': '100%'}}
						onChange={e => {
							setComent(e.target.value);
						}}
						rows="10"
						cols="50"
						id="content"
					></textarea>
				</InputModal>
			</RaitingBlok>
			<ButtonBlock>
				<ButtonModal type="button" onClick={toogleModal}>Назад</ButtonModal>
				<ButtonModal
					type="button"
					onClick={() => handleAddReview(newValue, coment, bookId)}
				>
					Рейтинг
				</ButtonModal>
			</ButtonBlock>
		</>
	);
}

export default LibraryModal;
