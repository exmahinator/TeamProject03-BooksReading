import {
	RegistrationDescriptionTitle,
	RegistrationDescriptionSubTitle,
	RegistrationDescriptionText,
	RegistrationDescriptionList,
	RegistrationDescriptionItem,
	RegistrationDescriptionContainer,
	RegistrationDescriptionButton,
	RegistrationDescriptionContainerButton,
	RegistrationDescriptionDivList,
} from 'ui/AuthPage';
import { ReactComponent as Arrow } from '../../ui/AuthPage/Image/Arrow.svg';

const RegistrationDescription = () => {
	return (
		<RegistrationDescriptionContainer>
			<RegistrationDescriptionTitle>Books Reading</RegistrationDescriptionTitle>
			<RegistrationDescriptionDivList>
				{' '}
				<RegistrationDescriptionSubTitle>
					Допоможе вам
				</RegistrationDescriptionSubTitle>
				<RegistrationDescriptionList>
					<RegistrationDescriptionItem>
						<span>
							<Arrow />
						</span>
						<RegistrationDescriptionText>
							Швидше сформулювати свою ціль і розпочати читати
						</RegistrationDescriptionText>
					</RegistrationDescriptionItem>
					<RegistrationDescriptionItem>
						<span>
							<Arrow />
						</span>
						<RegistrationDescriptionText>
							Пропорційно розподілити навантаження на кожний день
						</RegistrationDescriptionText>
					</RegistrationDescriptionItem>
					<RegistrationDescriptionItem>
						<span>
							<Arrow />
						</span>
						<RegistrationDescriptionText>
							Відстежувати особистий успіх
						</RegistrationDescriptionText>
					</RegistrationDescriptionItem>
				</RegistrationDescriptionList>
				<RegistrationDescriptionSubTitle>
					Також ви зможете
				</RegistrationDescriptionSubTitle>
				<RegistrationDescriptionList>
					<RegistrationDescriptionItem>
						<span>
							<Arrow />
						</span>
						<RegistrationDescriptionText>
							Формувати особисту думку незалежну від інших
						</RegistrationDescriptionText>
					</RegistrationDescriptionItem>
					<RegistrationDescriptionItem>
						<span>
							<Arrow />
						</span>
						<RegistrationDescriptionText>
							Підвищити свої професійні якості опираючись на нові знання
						</RegistrationDescriptionText>
					</RegistrationDescriptionItem>
					<RegistrationDescriptionItem>
						<span>
							<Arrow />
						</span>
						<RegistrationDescriptionText>
							Стати цікавим співрозмовником
						</RegistrationDescriptionText>
					</RegistrationDescriptionItem>
				</RegistrationDescriptionList>
			</RegistrationDescriptionDivList>
			<RegistrationDescriptionContainerButton>
				<RegistrationDescriptionButton>Увійти</RegistrationDescriptionButton>
				<RegistrationDescriptionButton>
					Реєстрація
				</RegistrationDescriptionButton>
			</RegistrationDescriptionContainerButton>
		</RegistrationDescriptionContainer>
	);
};

export default RegistrationDescription;
