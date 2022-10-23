import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { ModalTitle, RaitingBlok, RaitingStar, ResumeTitle, InputModal, ButtonBlock, ButtonModal } from 'ui/LibraryModal';


function LibraryModal() {
    const [newValue, setNewValue] = useState(null)
    const [coment, setComent] = useState('')
    console.log(newValue);
    console.log(coment);
    return (
        <>
            <div className="modalForm">
                
                <ModalTitle>Обрати Рейтинг книги</ModalTitle>
                <RaitingBlok>
                <RaitingStar>    
                <Typography component="legend"></Typography>
                <Rating    name="simple-controlled"
                        value={newValue}
                        onChange={(event, newValue) => {
                         setNewValue(newValue);
                            }} />
                </RaitingStar>
                <ResumeTitle>    
                    <label htmlFor="content">Резюме</label>
                </ResumeTitle>
                <InputModal>   
                <textarea onChange={(e) => {
                    setComent(e.target.value);
                        }} rows="10" cols="50" id="content" ></textarea>
                </InputModal>         
                </RaitingBlok>
                <ButtonBlock>
                    <ButtonModal type='button'>Назад</ButtonModal>
                    <ButtonModal type='button'>Рейтинг</ButtonModal>
                </ButtonBlock>
            </div>
                   
              
        </>
    )
}

export default LibraryModal;