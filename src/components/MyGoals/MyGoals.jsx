import React from 'react';
// import { useState } from "react";
import {
	ProgressItem,
	ProgressNumber,
	ProgressText,
	ProgressList,
	ProgressTitle,
	ProgressSubContainer,
	ProgressContainer,
} from 'ui/TrainingPage';

const MyGoals = () => {
	return (
		<ProgressContainer>
			<ProgressSubContainer>
				<ProgressTitle>Моя мета прочитати</ProgressTitle>
			</ProgressSubContainer>
			<ProgressSubContainer>
				<ProgressList>
					<ProgressItem>
						<ProgressNumber>3</ProgressNumber>
						<ProgressText>Кількість книжок</ProgressText>
					</ProgressItem>
					<ProgressItem>
						<ProgressNumber>22</ProgressNumber>
						<ProgressText>Кількість днів</ProgressText>
					</ProgressItem>
					{/* <ProgressItem>
						<ProgressNumber>1</ProgressNumber>
						<ProgressText>Залишилось книжок</ProgressText>
					</ProgressItem> */}
				</ProgressList>
			</ProgressSubContainer>
		</ProgressContainer>
	);
};

export default MyGoals;
