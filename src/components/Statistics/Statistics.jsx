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
import { useDispatch, useSelector } from 'react-redux';
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
import { getCurrentlyReading, getPagesPerDay, getStats } from '../../redux/library/librarySelector';
import { ButtonLogout } from 'ui/Modal/Modal.styled';
import { ButtonConteinerCentred } from 'ui/Modal/Modal.styled';
import { IconConteiner } from 'ui/Modal/Modal.styled';
import { ModalConteinerFinal } from '../../ui/Modal/Modal.styled';

const Statistics = () => {
	const dispatch = useDispatch();
	const [pages, setPages] = useState('');
	const [isModal, setIsModal] = useState(true);
	const [isModal2, setIsModal2] = useState(true);

	const currentlyReading = useSelector(getCurrentlyReading);
	const pagesPerDay = useSelector(getPagesPerDay);
	const pagesStats = useSelector(getStats);
	const today = new Date().getUTCDate();
	
	const toogleModal = () => {
		setIsModal(!isModal);
	};

	const toogleModal2 = () => {
		setIsModal2(!isModal2);
	};

	const total = pagesStats.reduce((acc, el) => {
		const dateNow = Number(el.time.slice(8, 10));
		let totalPages = 0;
		if (today === dateNow) {
			totalPages =  acc + el.pagesCount;
		}
		return totalPages;
	}, 0);

	// const getResult = () => {
	// 	console.log(total)
	// 	console.log(total < pagesPerDay);
	// 	if (total < pagesPerDay) {
	// 	setIsModal(true);
	// 	} else {setIsModal(false)}
	
	// };

	const handleChangePage = evt => {
		setPages(Number(evt.target.value));
	};

	const handleAddResults = pages => {
		dispatch(addFinishedPages(pages));
		setPages('');

	};
	console.log(total)
	console.log(pagesStats);
	console.log(pagesStats.length !== 0 && total < pagesPerDay);

	return (
		<StatPagesContainer>
			<StatTextResolt>????????????????????</StatTextResolt>
			<StatSubContainerTable>
				<StatCommonContainer>
					<StatSubContainer>
						<StatLabel htmlFor="data">????????</StatLabel>
						<StatInput
							id="data"
							type="text"
							defaultValue={new Date().toLocaleDateString()}
						/>
					</StatSubContainer>
					<StatSubContainer>
						<StatLabel htmlFor="pages">?????????????????? ???????????????? </StatLabel>
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
					onClick={() => { handleAddResults({ pages }) }}
				>
					???????????? ??????????????????
				</StatisticsButton>
			</StatSubContainerTable>
			<StatisticsTablet />

			{isModal2 &&
				currentlyReading.some(
					book => book.pagesFinished === book.pagesTotal
				) && (
				<Modal toogleModal={toogleModal2}>
					<ModalConteinerFinal>
						<IconConteiner>
							<Finger />
						</IconConteiner>
						<ModalLogoutText>??????????! ???? ???????? ?????????? ??????????????????.</ModalLogoutText>
						<ButtonConteinerCentred>
							<ButtonLogout type="button" onClick={toogleModal2}>
								????????????
							</ButtonLogout>
						</ButtonConteinerCentred>
					</ModalConteinerFinal>
					</Modal>
				)}
			
			{isModal && (pagesStats.length !== 0 && total < pagesPerDay) && (
				<Modal toogleModal={toogleModal}>
					<ConteinerStats>
						<Finger />
						<ModalLogoutText>
							???? ??????????????????, ?????? ???????????????? ????????????! ???????????????????? ???????? ???????? ??????
							???????????????? &#41;
						</ModalLogoutText>
						<ButtonConteinerStats>
							<ButtonTreining type="button" onClick={toogleModal}>???????? ????????????????????</ButtonTreining>
							<ButtonTreining type="button" onClick={toogleModal}>
								??????????
							</ButtonTreining>
						</ButtonConteinerStats>
					</ConteinerStats>
				</Modal>
			)}
			{/* <button type="button" onClick={toogleModal}>
				?????????????? "???? ????????????????"
			</button> */}
		</StatPagesContainer>
	);
};

export default Statistics;
