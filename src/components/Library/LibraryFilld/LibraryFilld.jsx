import {
    LibraryTitle, LibraryWripperList, BookName, FilldList, BookItem, Heading, Value, LibraryButton, BookTitle, AddButton} from 'ui/LibraryFilld';
import { ReactComponent as Flat } from './icons/Flat.svg'
import { ReactComponent as Rating } from './icons/rating.svg'


function LibraryFilld() {
    return (
        <>
            <div className="Wrapper">
                <LibraryTitle>Прочитано</LibraryTitle>
                <LibraryWripperList>
                    <BookName>
                        <div><Flat style={{margin:'0 12px 0 0'}}/></div>
                        <BookTitle>Scrum. Революционный метод управлениями проектами</BookTitle>
                    </BookName>
                    
                        <FilldList>
                            <BookItem>
                                <Heading>Автор:</Heading>
                                <Value>Джефф Сазерленд</Value>
                            </BookItem>
                            <BookItem>
                                <Heading>Рік:</Heading>
                                <Value>2014</Value>
                            </BookItem>
                            <BookItem>
                                <Heading>Стор.:</Heading>
                                <Value>25</Value>
                            </BookItem>
                            <BookItem>
                                <Heading>Рейтинг:</Heading>
                                <Value><Rating/></Value>
                            </BookItem>
                        </FilldList>
                        <LibraryButton type='button'>Резюме</LibraryButton>
                    
                </LibraryWripperList>
            </div>
            <div>
                <LibraryTitle>Читаю</LibraryTitle>
                <LibraryWripperList style={{ margin: '0 0 16px 0' }}>
                    <BookName>
                        <div><Flat style={{margin:'0 12px 0 0'}}/></div>
                        <BookTitle>Разработка ценностных предложений.</BookTitle>
                    </BookName> 
                    
                        <FilldList>
                            <BookItem>
                                <Heading>Автор:</Heading>
                                <Value>Алекс Остервальдер, Ив Пинье</Value>
                            </BookItem>
                            <BookItem>
                                <Heading>Рік:</Heading>
                                <Value>2016</Value>
                            </BookItem>
                            <BookItem>
                                <Heading>Стор.:</Heading>
                                <Value>188</Value>
                            </BookItem>     
                        </FilldList>    
                    
                </LibraryWripperList>
                <LibraryWripperList>
                    <BookName>
                        <div><Flat style={{margin:'0 12px 0 0'}}/></div>
                        <BookTitle>Управление продуктом в Scrum. Agile-методы для вашего бизнеса.</BookTitle>
                    </BookName>
                    
                        <FilldList>
                            <BookItem>
                                <Heading>Автор:</Heading>
                                <Value>Роман Пихлер</Value>
                            </BookItem>
                            <BookItem>
                                <Heading>Рік:</Heading>
                                <Value>2010</Value>
                            </BookItem>
                            <BookItem>
                                <Heading>Стор.:</Heading>
                                <Value>92</Value>
                            </BookItem>    
                        </FilldList>  
                    
                </LibraryWripperList>
            </div>
            <div>
                <LibraryTitle>Маю намір прочитати</LibraryTitle>
                <LibraryWripperList style={{ margin: '0 0 16px 0' }}>
                    <BookName>
                        <div><Flat style={{margin:'0 12px 0 0'}}/></div>
                        <BookTitle>Scrum. Револючионный метод управлениями проектами.</BookTitle>
                    </BookName> 
                    
                        <FilldList>
                            <BookItem>
                                <Heading>Автор:</Heading>
                                <Value>Джефф Сазерленд</Value>
                            </BookItem>
                            <BookItem>
                                <Heading>Рік:</Heading>
                                <Value>2014</Value>
                            </BookItem>
                            <BookItem>
                                <Heading>Стор.:</Heading>
                                <Value>25</Value>
                            </BookItem>     
                        </FilldList>    
                    
                </LibraryWripperList>
                <LibraryWripperList>
                    <BookName>
                        <div><Flat style={{margin:'0 12px 0 0'}}/></div>
                        <BookTitle>5 Пороков команды.Притча о лидерстве.</BookTitle>
                    </BookName>
                    
                        <FilldList>
                            <BookItem>
                                <Heading>Автор:</Heading>
                                <Value>Патрик Ленсиони</Value>
                            </BookItem>
                            <BookItem>
                                <Heading>Рік:</Heading>
                                <Value>2011</Value>
                            </BookItem>
                            <BookItem>
                                <Heading>Стор.:</Heading>
                                <Value>125</Value>
                            </BookItem>    
                        </FilldList>  
                        <AddButton type='button'>+++</AddButton>
                    
                </LibraryWripperList>
            </div>
        </>
    )
}

export default LibraryFilld;