// import {Button} from 'components/ui';

import styled from 'styled-components';

const Button = styled.button`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    
    @media screen and (min-width: 768px) {
        
    }
    @media screen and (min-width: 1280px) {
        
    }
`;
const UlWrapper = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column; 
    align-items: center;
    margin: 0;

`

function TrainingList () {
    return (
        <>
        {/* Мобильная версия без стилей */}
        <UlWrapper>
            <li style={{margin: '0 0 30px 0'}}>
                <div style={{display: 'flex'}}> 
                    <div style={{marginRight: '15px'}}>Icon/checkbox</div>
                    <div>Title</div>
                </div>

                <div style={{display: 'flex'}}> 
                    <div style={{marginRight: '15px'}}>Автор:</div>
                    <div>Том ДеМарко</div>
                </div>
                <div style={{display: 'flex'}}> 
                    <div style={{marginRight: '15px'}}>Рік:</div>
                    <div>2015</div>
                </div>
                <div style={{display: 'flex'}}> 
                    <div style={{marginRight: '15px'}}>Стор.:</div>
                    <div>100</div>
                </div>

                <div style={{color:'red'}}>del</div>
            </li>

            <li style={{margin: '0 0 30px 0'}}>
                <div style={{display: 'flex'}}> 
                    <div style={{marginRight: '15px'}}>Icon/checkbox</div>
                    <div>Title</div>
                </div>

                <div style={{display: 'flex'}}> 
                    <div style={{marginRight: '15px'}}>Автор:</div>
                    <div>Том ДеМарко</div>
                </div>
                <div style={{display: 'flex'}}> 
                    <div style={{marginRight: '15px'}}>Рік:</div>
                    <div>2015</div>
                </div>
                <div style={{display: 'flex'}}> 
                    <div style={{marginRight: '15px'}}>Стор.:</div>
                    <div>100</div>
                </div>

                <div style={{color:'red'}}>del</div>
            </li>

            <li>
                <div style={{display: 'flex'}}> 
                    <div style={{marginRight: '15px'}}>Icon/checkbox</div>
                    <div>Title</div>
                </div>

                <div style={{display: 'flex'}}> 
                    <div style={{marginRight: '15px'}}>Автор:</div>
                    <div>Том ДеМарко</div>
                </div>
                <div style={{display: 'flex'}}> 
                    <div style={{marginRight: '15px'}}>Рік:</div>
                    <div>2015</div>
                </div>
                <div style={{display: 'flex'}}> 
                    <div style={{marginRight: '15px'}}>Стор.:</div>
                    <div>100</div>
                </div>

                <div style={{color:'red'}}>del</div>
            </li>
        </UlWrapper>

        {/* Планшетная версия без стилей */}
        {/* <br /> удалить... */}
        <br />
        <br />
        <br />

        <div className='wrapper'>
        <div className='title__wrapper' style={{display:'flex', justifyContent:'space-around'}}>
            <div>Назва книги</div>
            <div>Автор</div>
            <div>Рік</div>
            <div>Стор.</div>
        </div>
        <UlWrapper>
            <li style={{display:'flex', justifyContent:'space-around'}}>
                <div className='title icon'>
                    <div style={{marginRight: '15px'}}>Icon/checkbox</div>
                    Title
                </div>
                <div className='author'>Джефф Сазерленд</div>
                <div className='year'>2014</div>
                <div className='page'>25</div>
                <div className='del icon' style={{color: 'red'}}>del</div>
            </li>
            
        </UlWrapper>
        </div>
        <Button >Почати тренування</Button>
        </>
    )
}

export default TrainingList;