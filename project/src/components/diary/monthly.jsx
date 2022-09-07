import { useState } from "react";
import styled, { css, keyframes } from "styled-components";

const Container = styled.section`
    width: 100%;
    margin-top: 30px;
    margin-bottom: 10%;
    font-family: 'Nanum Myeongjo', serif;
    display:flex;
    align-items: center;
`

// 책 페이지 넘어가는 버튼
const BtnPage = styled.div`
    width: 7%;
    cursor: pointer;
    font-size: 25px;
    font-weight: 700;
    text-align: center;
    color: ${props=>props.theme.bookPageBtn};
`

// 책 모양
const BookOuter = styled.div`
    position: relative;
    width: 43%;
    height: 580px;
    background-color: ${props=>props.theme.bookOuterColor};
    border-radius: 10px;
    display: flex;
    align-items: center;
`
const BookInner = styled.div`
    position: absolute;
    ${props=> (props.align === 'left' ? 'right:0;' : 'left:0;' )}
    width: 96%;
    height: 95%;
    background-color: ${props=>props.theme.bookInnerColor};
    border-radius: 10px;
    display: flex;
    align-items: center;
`   

const Paper = styled.div`
    position: absolute;
    ${props=> (props.align === 'left' ? 'right:0;' : 'left:0;' )}
    width: 96%;
    height: 95%;
    background-color: white;
    border-radius: 10px;
    box-shadow: rgba(215, 215, 215, 0.80) ${props=> (props.align === 'left' ? '-15px' : '15px')} 0px 20px 0px inset;
    display: flex;
    flex-direction: column;
    overflow-y: hidden;
`

const EmptyPaper = styled(Paper)`
    ${props=> (props.align === 'left' ? 'padding: 20px 40px 20px 30px;' : 'padding: 20px 30px 20px 40px;' )}
`

const Card = styled(Paper)`
    perspective: 1800px;
    ${props=> (props.isActive && css`animation: ${flipEvent(props.flipTo)} 3s;`)}
`
const CardBox = styled(Card)`
    width: 100%;
    height: 100%;
    position: relative;
    backface-visibility: hidden;
    background-color: gray;
`

const CardPaper = styled(CardBox)`
    position: absolute;
    background-color: white;
    ${props=> (props.align === 'left' ? 'padding: 20px 40px 20px 30px;' : 'padding: 20px 30px 20px 40px;' )}
`

const flipEvent = (flipTo) => keyframes`
    0% {
        transform-origin: ${flipTo};
        transform: rotateY(0);
        z-index: 2;
    }
    100% {
        transform-origin: ${flipTo};
        transform: rotateY(180deg);
        z-index: 2;
    }
`

// 책 내용 공통
const Header = styled.div`
    height: 10%;
    display: flex;
    padding-top: 5px;
`

const ContentDiv = styled.div`
    height: 90%;
    display: flex;
    flex-direction: column;
`
const Title = styled.div`
    font-size: 20px;
    font-weight: 700px;
`
const StyledSpanA = styled.span`
    padding-right: 5px;
`
const StyledSpanB = styled.span`
    padding-right: 10px;
`

const ScrollDiv = styled.div`
    overflow-y: scroll;
    height: 100%;
    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: rgba(159, 158, 158, 1);
    }
    ::-webkit-scrollbar-track {
        background-color: rgba(217, 217, 217, 1);
    }
`

// 책 왼쪽 내부
const Item = styled.li`
    font-size: 12px;
    padding-bottom: 20px; 
    color: ${props=>props.color || props.theme.bookBoxTextColor};
    cursor: pointer;
    :hover {
        color: gray;
    }
`

const ItemUnderLine = styled.span`
    display: inline;
    box-shadow: inset 0 -6px 0 ${props => props.theme.underLineColor};
`

// 책 오른쪽 내부
const EmptyGuideDiv = styled.div`
    color: ${props=>props.theme.bookBoxGuideTextColor};
    width: 100%;
    margin: auto;
    text-align: center;
    line-height: 2.5;
`
const UpdateBtn = styled.button`
    height: 20px;
    color:white;
    width: 60px;
    border: none;
    border-radius: 3px;
    background-color: ${props=>props.theme.SubmitBtnBackColor};
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    cursor: pointer;
    margin-left: 20px;
    font-size: 12px;
`

const Question = styled.div`
    height: 10%;
    font-size: 12px;
`

const Answer = styled.div`
    height: 90%;
    font-size: 12px;
    line-height: 1.5;
    color: gray;
`

const TextArea = styled.textarea`
    width: 100%;
    height: 100%;
    border: 1px solid #A2A2A6;
    border-radius: 3px;
    padding: 10px;
    margin-bottom: 30px;
    resize:none;
    color: ${props=>props.theme.bookBoxTextColor};
    font-family: 'Nanum Myeongjo', serif;
    :focus {
        outline-color: ${props=>props.theme.SubmitBtnBackColor};
    }
    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #9F9E9E;
    }
    ::-webkit-scrollbar-track {
        background-color: #D9D9D9;
    }
`

const test = [
    {   
        num : 1,
        day : "01",
        question : "인간이 주는 싶이 착목한는 있으며, 힘차게 가진 내는 심장은 있으랴?",
        content : ""
    },
    {
        num : 2,
        day : "02",
        question : "부패를 청춘의 만물은 이것은 피는 오아이스도 같이, 그들의 교향악이다.",
        content : "소녀들의 밤이 지나고 이름자를 내 말 사랑과 많은 다하지 까닭입니다. 무덤 아름다운 계집애들의 내 이름을 별을 까닭입니다. 된 가슴속에 밤이 시인의 이름과, 듯합니다. 벌써 가을 마디씩 멀리 듯합니다. 어머님, 오면 북간도에 동경과 새겨지는 까닭입니다. 당신은 아침이 했던 불러 별을 계십니다. 한 이네들은 차 계절이 듯합니다. 언덕 둘 겨울이 쉬이 봅니다. 불러 하나의 별들을 자랑처럼 노새, 별 헤일 봅니다. \n\n 별들을 헤는 프랑시스 청춘이 겨울이 했던 가을로 나의 듯합니다. 계절이 많은 했던 파란 못 이름자 계십니다. 그러나 내린 딴은 까닭입니다. 너무나 애기 부끄러운 별 하나에 봅니다. 봄이 피어나듯이 다하지 남은 있습니다. 마디씩 잠, 이름과 자랑처럼 묻힌 그리고 까닭입니다. 것은 가을로 나의 듯합니다. 토끼, 써 이네들은 불러 묻힌 계십니다. 내일 어머니, 강아지, 가슴속에 듯합니다. 계집애들의 가득 벌써 별에도 하나에 아침이 잠, 이웃 내일 까닭입니다. 별 가난한 말 별 가슴속에 써 나의 까닭입니다. \n\n 같이 소학교 않은 불러 내 사람들의 어머니, 나의 버리었습니다. 이름자 차 아무 하나 내일 이웃 봅니다. 아직 아름다운 추억과 계십니다. 하나 라이너 지나고 않은 하늘에는 이름과, 마리아 그러나 거외다. 차 않은 내 무성할 보고, 청춘이 버리었습니다. 벌써 마리아 까닭이요, 그러나 거외다. 이름자 하나에 하나에 비둘기, 버리었습니다. 하나에 별 청춘이 오는 동경과 거외다. 청춘이 다하지 나의 봅니다. 밤이 하나에 이름을 당신은 별 하나에 이름을 별을 듯합니다. 위에 이웃 둘 잔디가 언덕 가을로 마리아 이네들은  아직 거외다."
    },
    {
        num : 3,
        day : "03",
        question : "풀이 피가 따뜻한 웅대한 예가 눈이 할지라도 이상의 보배를 있다.",
        content : "소녀들의 밤이 지나고 이름자를 내 말 사랑과 많은 다하지 까닭입니다. 무덤 아름다운 계집애들의 내 이름을 별을 까닭입니다. 된 가슴속에 밤이 시인의 이름과, 듯합니다. 벌써 가을 마디씩 멀리 듯합니다. 어머님, 오면 북간도에 동경과 새겨지는 까닭입니다. 당신은 아침이 했던 불러 별을 계십니다. 한 이네들은 차 계절이 듯합니다. 언덕 둘 겨울이 쉬이 봅니다. 불러 하나의 별들을 자랑처럼 노새, 별 헤일 봅니다. \n\n 별들을 헤는 프랑시스 청춘이 겨울이 했던 가을로 나의 듯합니다. 계절이 많은 했던 파란 못 이름자 계십니다. 그러나 내린 딴은 까닭입니다. 너무나 애기 부끄러운 별 하나에 봅니다. 봄이 피어나듯이 다하지 남은 있습니다. 마디씩 잠, 이름과 자랑처럼 묻힌 그리고 까닭입니다. 것은 가을로 나의 듯합니다. 토끼, 써 이네들은 불러 묻힌 계십니다. 내일 어머니, 강아지, 가슴속에 듯합니다. 계집애들의 가득 벌써 별에도 하나에 아침이 잠, 이웃 내일 까닭입니다. 별 가난한 말 별 가슴속에 써 나의 까닭입니다. \n\n 같이 소학교 않은 불러 내 사람들의 어머니, 나의 버리었습니다. 이름자 차 아무 하나 내일 이웃 봅니다. 아직 아름다운 추억과 계십니다. 하나 라이너 지나고 않은 하늘에는 이름과, 마리아 그러나 거외다. 차 않은 내 무성할 보고, 청춘이 버리었습니다. 벌써 마리아 까닭이요, 그러나 거외다. 이름자 하나에 하나에 비둘기, 버리었습니다. 하나에 별 청춘이 오는 동경과 거외다. 청춘이 다하지 나의 봅니다. 밤이 하나에 이름을 당신은 별 하나에 이름을 별을 듯합니다. 위에 이웃 둘 잔디가 언덕 가을로 마리아 이네들은  아직 거외다."
    },
    {
        num : 4,
        day : "04",
        question : "꽃이 하는 얼음 이것이다.",
        content : ""
    },
    {
        num : 5,
        day : "05",
        question : "거친 대중을 부패를 낙원을 들어 소담스러운 우리 수 교향악이다.",
        content : ""
    },
    {
        num : 6,
        day : "06",
        question : "실로 투명하되 청춘의 놀이 이상의 따뜻한 아니더면, 꽃이 옷을 것이다.",
        content : ""
    },
    {
        num : 7,
        day : "07",
        question : "남는 그들은 우리의 이상의 불어 뿐이다. 우리 황금시대의 사람은 위하여서.",
        content : ""
    },
    {
        num : 8,
        day : "08",
        question : "주는 있는 그와 실현에 봄바람이다.",
        content : ""
    },
    {
        num : 9,
        day : "09",
        question : "그림자는 이것은 미묘한 별과 스며들어 청춘의 뿐이다.",
        content : ""
    },
    {
        num : 10,
        day : "10",
        question : "눈이 위하여 것은 되는 보라.",
        content : ""
    },
    {
        num : 11,
        day : "11",
        question : "있는 같이, 설레는 없으면, 구하기 작고 약동하다.",
        content : ""
    },
    {
        num : 12,
        day : "12",
        question : "속에서 고행을 열락의 목숨이 피가 기쁘며, 그리하였는가?",
        content : ""
    },
    {
        num : 13,
        day : "13",
        question : "사라지지 청춘 피가 우리의 찾아다녀도, 보라. 온갖 없으면, 능히 피가 힘있다.",
        content : ""
    },
    {
        num : 14,
        day : "14",
        question : "그와 못하다 끝에 가지에 설레는 바로 것이다..",
        content : ""
    },
]

function DiaryMonthly () {
    
    const [isClicked, setIsClicked] = useState([false, false]);
    const [isPrevBtnActive, setIsPrevBtnActive] = useState(false);
    const [isNextBtnActive, setIsNextBtnActive] = useState(false);
    const [updateContent, setUpdateContent] = useState(false);

    // 클릭된 질문 index 알아내기
    const handleSelect = (index) => {
        const newArr = Array(test.length).fill(false);
        newArr[index] = true;
        setIsClicked(newArr);
    };

    // 수정버튼 클릭 시 모드변경 
    const handleUpdate = (i) => {
        if(updateContent){
            // api로 서버에 새로운 내용 변경 사항 보내기 (put요청)
        }else{
            // 수정하기로 넘어가면서 api를 통해서 해당 게시글 내용 받아오기 (get요청)
        }
        console.log(i.content);
        setUpdateContent(prev=>!prev);
    }
    // 일기 수정된 내용 반영
    const handleContentChange = (e) => {
        // e.target.value;
    }

    // 이전 페이지 버튼 클릭 시 애니메이션 효과 & 페이지 내용 변화
    const handlePrevBtn = () => {
        setIsPrevBtnActive(prev => !prev);
    }
    // 다음 페이지 버튼 클릭 시 애니메이션 효과 & 페이지 내용 변화
    const handleNextBtn = () => {
        setIsNextBtnActive(prev => !prev);
        // setIsClicked([false,false]);
        //
    }

    return(
    <Container>
        {/* 책 왼쪽 */}
        <BtnPage onClick={handlePrevBtn}>{'<'}</BtnPage>
        <BookOuter>
            <BookInner align='left'>
                <EmptyPaper align='left'>
                        <Header>
                            <Title>
                                <StyledSpanA>2022년</StyledSpanA>
                                <StyledSpanA>07월</StyledSpanA>
                            </Title>
                        </Header>
                </EmptyPaper>
                <Card align='left' isActive={isPrevBtnActive} flipTo='right' onAnimationEnd={()=>(setIsPrevBtnActive(prev => !prev), setIsClicked([false,false]))}>
                    <CardBox align='left'>
                        <CardPaper align='left'>
                            <Header>
                                <Title>
                                    <StyledSpanA>2022년</StyledSpanA>
                                    <StyledSpanA>08월</StyledSpanA>
                                </Title>
                            </Header>
                            <ContentDiv>
                                <ScrollDiv>
                                    <ul>
                                    {test.map(i =>
                                        <Item key={i.num} 
                                            isClicked={isClicked} 
                                            onClick={()=>handleSelect(i.num)} 
                                            color={isClicked[i.num] ? 'black' : ''}>
                                            {
                                                isClicked[i.num] ? 
                                                <ItemUnderLine>
                                                    <StyledSpanB>{i.day}일</StyledSpanB>
                                                    <span>{i.question}</span>
                                                </ItemUnderLine> :
                                                <span>
                                                    <StyledSpanB>{i.day}일</StyledSpanB>
                                                    <span>{i.question}</span>
                                                </span>
                                            }
                                        </Item>
                                    )}
                                    </ul>
                                </ScrollDiv>
                            </ContentDiv> 
                        </CardPaper>
                    </CardBox>
                </Card>
            </BookInner>
        </BookOuter>
        {/* 책 오른쪽*/}
        <BookOuter>
            <BookInner align='right'>
                <EmptyPaper align='right'>
                    <EmptyGuideDiv>
                        왼쪽 페이지에서 <br />
                        답변을 보고 싶은 질문을 클릭해주세요.
                    </EmptyGuideDiv> 
                </EmptyPaper>
                <Card align='right' isActive={isNextBtnActive}  flipTo='left' onAnimationEnd={()=>(setIsNextBtnActive(prev => !prev), setIsClicked([false,false]))}>
                    <CardBox>
                        <CardPaper>
                        {
                            isClicked.every(el => el === false) ?
                            <EmptyGuideDiv>
                                왼쪽 페이지에서 <br />
                                답변을 보고 싶은 질문을 클릭해주세요.
                            </EmptyGuideDiv> 
                            :
                            test.filter(i=> isClicked[i.num]).map(i =>
                                <div key={i.num} style={{height: '100%', width: '100%'}}>
                                    <Header>
                                        <Title>
                                            <StyledSpanB>08월</StyledSpanB>
                                            <span>{i.day}일</span>       
                                        </Title>
                                        <UpdateBtn onClick={()=>handleUpdate(i)}>
                                            { updateContent ? '완료' : '수정' }
                                        </UpdateBtn>
                                    </Header>
                                    <ContentDiv>
                                        <Question>
                                            <ItemUnderLine>{i.question}</ItemUnderLine>
                                        </Question>
                                        <Answer>
                                            {
                                                updateContent ? 
                                                <TextArea value={i.content} onChange={()=>handleContentChange} />
                                                :
                                                <ScrollDiv>
                                                    <pre style={{whiteSpace: 'pre-wrap', paddingRight: '10px'}}>
                                                        {i.content}
                                                    </pre>
                                                </ScrollDiv>
                                            }
                                            
                                        </Answer>
                                    </ContentDiv>
                                </div> 
                            )
                        }
                    </CardPaper>
                    </CardBox>
                </Card>
            </BookInner>
        </BookOuter>
        <BtnPage onClick={handleNextBtn}>{'>'}</BtnPage>
    </Container>
    );
}
export default DiaryMonthly;