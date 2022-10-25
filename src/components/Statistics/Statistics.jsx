import {
	StatInput,
	StatSubContainer,
	StatLabel,
	StatCommonContainer,
	StatisticsButton,
	StatPagesContainer,
	StatSubContainerTable,
	StatTextResolt,
} from 'ui/StatisticsPage';
import { useDispatch } from 'react-redux';
import { addFinishedPages } from '../../redux/library/libraryOperation';

import StatisticsTablet from './StatisticsTablet';
import { useState } from 'react';
// import { DatePicker } from '@mui/x-date-pickers';
import Modal from 'components/Modal/Modal';
import { ConteinerStats } from 'ui/Modal/Modal.styled';
import { ModalLogoutText } from 'ui/Modal/Modal.styled';
import { ReactComponent as Finger } from '../../ui/Modal/imagas/finger.svg';
import { ButtonConteinerStats } from 'ui/Modal/Modal.styled';
import { ButtonTreining } from 'ui/Modal/Modal.styled';

const Statistics = () => {
	const dispatch = useDispatch();
	const [pages, setPages] = useState('');
	const [isModal, setIsModal] = useState(false);

	const handleChangePage = evt => {
		setPages(Number(evt.target.value));
	};

	const handleAddResults = pages => {
		dispatch(addFinishedPages(pages));
		setPages('');
	};

	const toogleModal = () => {
		setIsModal(!isModal);
	};

	return (
		<StatPagesContainer>
			<StatTextResolt>Результаты</StatTextResolt>
			<StatSubContainerTable>
				<StatCommonContainer>
					<StatSubContainer>
						<StatLabel htmlFor="data">Дата</StatLabel>
						<StatInput
							id="data"
							type="text"
							defaultValue={new Date().toLocaleDateString()}
						/>
					</StatSubContainer>
					<StatSubContainer>
						<StatLabel htmlFor="pages">Кількість сторінок </StatLabel>
						<StatInput
							id="pages"
							type="text"
							onChange={handleChangePage}
							value={pages}
						/>
					</StatSubContainer>
				</StatCommonContainer>
				<StatisticsButton
					type="button"
					onClick={() => handleAddResults({ pages })}
				>
					Додати результат
				</StatisticsButton>
			</StatSubContainerTable>
			<StatisticsTablet />

			{isModal && (
				<Modal toogleModal={toogleModal}>
					<ConteinerStats>
						<Finger/>
						<ModalLogoutText>
							Ти молодчина, але потрібно швидше! Наступного разу тобі все
							вдасться &#41;
						</ModalLogoutText>
						<ButtonConteinerStats>
							<ButtonTreining type='button'>Новє тренування</ButtonTreining>
							<ButtonTreining type='button' onClick={toogleModal}>Назад</ButtonTreining>
						</ButtonConteinerStats>
				</ConteinerStats>
					</Modal>
			)}
			<button type="button" onClick={toogleModal}>
				модалка "ти молодець"
			</button>
		</StatPagesContainer>
	);
};

export default Statistics;
