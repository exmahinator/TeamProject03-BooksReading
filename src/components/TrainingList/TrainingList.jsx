import { ListMob, ListDesk, Title } from 'ui/TrainingPage';
import styled from 'styled-components';
import {ReactComponent as Flat} from '../../images/icons/Flat.svg'
import {ReactComponent as Del} from '../../images/icons/delete.svg'

const Button = styled.button`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    
    @media screen and (min-width: 768px) {
        
    }
    @media screen and (min-width: 1280px) {
        
    }
`;

const LiWrapper = styled.li`
    margin: 0 0 30px 0;
    padding: 20px 0 20px 0;
    position: relative;
    border-bottom: 1px solid #E0E5EB;
    :first-child {
        border-top: 1px solid #E0E5EB;
    }
`
const DeleteIcon = styled.div`
    position: absolute;
    top: 20px;
    right: 0;
`



function TrainingList () {
    return (
        <>
        {/* Мобильная версия без стилей */}
        <ListMob>
            <LiWrapper>
                <div style={{display: 'flex', margin: '0 0 12px 0'}}> 
                    <div style={{margin: '0 15px 12px 0'}}><Flat /></div>
                    <div style={{padding: '0 25px 0 0'}}>Scrum. Революционный метод управлениями проектами.</div>
                </div>

                <div style={{display: 'flex', margin: '0 0 0 40px',}}> 
                    <div style={{margin: '0 15px 14px 0', color: '#898F9F', width: '25%'}}>Автор:</div>
                    <div>Том ДеМарко</div>
                </div>
                <div style={{display: 'flex', margin: '0 0 0 40px',}}> 
                    <div style={{margin: '0 15px 14px 0', color: '#898F9F', width: '25%'}}>Рік:</div>
                    <div>2015</div>
                </div>
                <div style={{display: 'flex', margin: '0 0 0 40px',}}> 
                    <div style={{marginRight: '15px', color: '#898F9F', width: '25%'}}>Стор.:</div>
                    <div>100</div>
                </div>

                <DeleteIcon><Del /></DeleteIcon>
            </LiWrapper>

            <LiWrapper>
                <div style={{display: 'flex'}}> 
                    <div style={{margin: '0 15px 12px 0'}}><Flat /></div>
                    <div style={{padding: '0 25px 0 0'}}>Deadline. Роман об управлении проектами.</div>
                </div>

                <div style={{display: 'flex', margin: '0 0 0 34px',}}> 
                    <div  style={{margin: '0 15px 14px 0', color: '#898F9F', width: '25%'}}>Автор:</div>
                    <div>Том ДеМарко</div>
                </div>
                <div style={{display: 'flex', margin: '0 0 0 34px',}}> 
                    <div style={{margin: '0 15px 14px 0', color: '#898F9F', width: '25%'}}>Рік:</div>
                    <div>2015</div>
                </div>
                <div style={{display: 'flex', margin: '0 0 0 34px',}}> 
                    <div style={{margin: '0 15px 14px 0', color: '#898F9F', width: '25%'}}>Стор.:</div>
                    <div>100</div>
                </div>

                <DeleteIcon style={{color:'red'}}><Del /></DeleteIcon>
            </LiWrapper>

            <LiWrapper>
                <div style={{display: 'flex'}}> 
                    <div style={{marginRight: '15px'}}><Flat /></div>
                    <div style={{padding: '0 25px 0 0'}}>5 Пороков команды. Притчи о лидерстве.</div>
                </div>

                <div style={{display: 'flex', margin: '0 0 0 34px',}}> 
                    <div style={{margin: '0 15px 14px 0', color: '#898F9F', width: '25%'}}>Автор:</div>
                    <div>Том ДеМарко</div>
                </div>
                <div style={{display: 'flex', margin: '0 0 0 34px',}}> 
                    <div style={{margin: '0 15px 14px 0', color: '#898F9F', width: '25%'}}>Рік:</div>
                    <div>2015</div>
                </div>
                <div style={{display: 'flex', margin: '0 0 0 34px',}}> 
                    <div style={{margin: '0 15px 14px 0', color: '#898F9F', width: '25%'}}>Стор.:</div>
                    <div>100</div>
                </div>

                <DeleteIcon style={{color:'red'}}><Del /></DeleteIcon>
            </LiWrapper>
        </ListMob>

        {/* Планшетная версия без стилей */}
        {/* <br /> удалить... */}
        <br />
        <br />
        <br />


        <div className='wrapper' style={{maxWidth: '800px', margin: '0 auto'}}>
            <Title className='title__wrapper' >
                <div>Назва книги</div>
                <div>Автор</div>
                <div>Рік</div>
                <div>Стор.</div>
            </Title>
            <ListDesk>
                <li style={{display:'flex', justifyContent:'space-between', borderBottom: '1px solid #E0E5EB'}}>
                    <div className='title icon' style={{display: 'flex',}}>
                        <div style={{marginRight: '15px'}}><Flat /></div>
                        <p>Scrum. Революционный метод ...</p>
                    </div>
                    <div className='author'>Джефф Сазерленд</div>
                    <div className='year'>2014</div>
                    <div className='page'>25</div>
                    <div className='del icon' style={{color: 'red'}}><Del/></div>
                </li>
                <li style={{display:'flex', justifyContent:'space-between', borderBottom: '1px solid #E0E5EB'}}>
                    <div className='title icon' style={{display: 'flex',}}>
                        <div style={{marginRight: '15px'}}><Flat /></div>
                        <p>Deadline. Роман об управлении ...</p>
                    </div>
                    <div className='author'>Джефф Сазерленд</div>
                    <div className='year'>2014</div>
                    <div className='page'>25</div>
                    <div className='del icon' style={{color: 'red'}}><Del/></div>
                </li>
                <li style={{display:'flex', justifyContent:'space-between', borderBottom: '1px solid #E0E5EB'}}>
                    <div className='title icon' style={{display: 'flex',}}>
                        <div style={{marginRight: '15px'}}><Flat /></div>
                        <p>5 Пороков команды. Притчи ...</p>
                    </div>
                    <div className='author'>Джефф Сазерленд</div>
                    <div className='year'>2014</div>
                    <div className='page'>25</div>
                    <div className='del icon' style={{color: 'red'}}><Del/></div>
                </li>
            </ListDesk>
        </div>
        <Button >Почати тренування</Button>
        </>
    )
}

export default TrainingList;