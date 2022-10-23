import React from 'react';
// import { useState } from "react";
import {
	FormTraining,
	FormName,
	FormCounter,
	FormCounterBox,
	FormCounterNumber,
	FormText,
	FormNumber,
} from 'ui/TrainingPage';

const MyGoals = () => {
	return (
		<>
			<FormTraining>
				<FormName>
					<p style={{ margin: '0' }}>Моя мета прочитати</p>
				</FormName>
				<FormCounter>
					<FormCounterBox>
						<FormCounterNumber>
							<FormNumber>0</FormNumber>
						</FormCounterNumber>
						<FormText>Кількість книжок</FormText>
					</FormCounterBox>
					<FormCounterBox>
						<FormCounterNumber>
							<FormNumber>0</FormNumber>
						</FormCounterNumber>
						<FormText>Кількість днів</FormText>
					</FormCounterBox>
					<FormCounterBox>
						<FormCounterNumber>
							<FormNumber>0</FormNumber>
						</FormCounterNumber>
						<FormText>Залишилось книжок</FormText>
					</FormCounterBox>
				</FormCounter>
			</FormTraining>
		</>
	);
};

export default MyGoals;
