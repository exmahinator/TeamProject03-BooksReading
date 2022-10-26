import TimerBlock from 'components/TimerBlock/TimerBlock';
import Statistics from 'components/Statistics/Statistics';
import LineChart from 'components/Chart/Chart';
import { Section, Container } from 'ui/BasicStyles';
import {
	StatisticsContainerCommon,
	BoxStatGoals,
	BoxStatGoalsDesctop,
	BoxStatDesctop,
	BoxGoalsDesctop,
} from 'ui/StatisticsPage';
import { useSelector } from 'react-redux';
import {
	getCurrentlyReading,
	getFinishedReading,
} from '../redux/library/librarySelector';
import TrainingList from 'components/TrainingList';

import MyGoals from "../components/MyGoals/MyGoals";

// import Modal from 'components/Modal/Modal';
// import { ConteinerStats } from '../ui/Modal/Modal.styled';
// import { ModalLogoutText } from '../ui/Modal/Modal.styled';
// import { ReactComponent as Finger } from '../ui/Modal/imagas/finger.svg';
// import { ButtonConteinerStats } from '../ui/Modal/Modal.styled';
// import { ButtonTreining } from '../ui/Modal/Modal.styled';
// import { useState } from 'react';


export const StatisticsPage = () => {
	const currentlyReading = useSelector(getCurrentlyReading);
	const finishedReading = useSelector(getFinishedReading);
	// const [isModal, setIsModal] = useState(false);

	// const toogleModal = () => {
	// 	setIsModal(!isModal);
	// };

	return (
		<Section>
			<Container>
				<BoxStatGoals>
					<TimerBlock />
					<MyGoals />
					<TrainingList
						books={[...finishedReading, ...currentlyReading]}
						// startDate={startDate}
						// endDate={endDate}
						// booksDelete={hanleDelete}
					/>
					<LineChart />
					<StatisticsContainerCommon>
						<Statistics />
					</StatisticsContainerCommon>
				</BoxStatGoals>

				<BoxStatGoalsDesctop>

					<BoxStatDesctop>
						<TimerBlock />
						<TrainingList
							books={[...finishedReading, ...currentlyReading]}
							// startDate={startDate}
							// endDate={endDate}
							// booksDelete={hanleDelete}
						/>
						<LineChart />
					</BoxStatDesctop>

					<BoxGoalsDesctop>
						<MyGoals />
						<StatisticsContainerCommon>
							<Statistics />
						</StatisticsContainerCommon>
					</BoxGoalsDesctop>
				</BoxStatGoalsDesctop>
			</Container>
		</Section>
	);
};
