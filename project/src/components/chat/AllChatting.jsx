import { useEffect } from "react";
import { useState } from "react";
import styled, { css } from "styled-components";

const Container = styled.section`
    width: 100%;
    min-height: fit-content;
    font-family: 'Nanum Myeongjo', serif;
    display:flex;
    align-items: center;
    flex-direction: column;
`
const Tab = styled.div`
    width: 100%;
    background-color: white;
    margin: 0;
    padding: 0 7%;
    display: flex;
    justify-content: space-between;
`
const TabTitle = styled.span`
    width: 180px;
    height: 30px;
    background-color: ${props => props.theme.tabTitleColor};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px 10px 0 0;
    color: white;
    font-weight: 600;
`
const Categories = styled.span`
    font-size: 13px;
    font-weight: 600;
    color: gray;
    display: flex;
    align-items: center;
`
const Category = styled.span`
    padding-left: 5px;
    color: ${props => props.isActive ? props.theme.tabTitleColor : 'gray'};
    cursor: pointer;
`

const Wrap = styled.div`
    padding: 30px 7%;
    width: 100%;
    min-height: 200px;
    
`
const ChatDiv = styled.div`
    width: 100%;
    height: 100px;
    margin-bottom: 20px;
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1.5% 2%;
`
const ChatStateDiv = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    align-items: start;
`

const ChatStateSpan = styled.span`
    font-size: 11px;
    padding-right: 5px;
    color: ${props => props.state === '0' ? "gray" : props.state === '1' ? props.theme.tabTitleColor : "red"};
`

const ChatTitle = styled.div`
    height: 40%;
    width: 100%;
    font-size: 15px;
    font-weight: 600;
    display: flex;
    align-items: center;
`

const ChatFooterDiv = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    align-items: end;
    justify-content: space-between;
    font-size: 12px;
`
const ChatFooterInfoDiv = styled.div`
    color: rgba(162, 162, 166, 1);
`

const ChatFooterInfoSpan = styled.span`
    padding-right: 5px;
`

const ChatBtn = styled.button`
    width: 130px;
    height: 25px;
    border-style: solid;
    border-radius: 3px;
    font-size: 12px;
    cursor: pointer;
    border-color: ${props => props.state === '0' ? "gray" : props.state === '1' ? props.theme.tabTitleColor : "red"};
    color: ${props => props.state === '0' ? "white" : props.state === '1' ? props.theme.tabTitleColor : "red"};
    background-color: ${props => props.state === '0' ? "gray" : "white"};
`

const testAll = [
    {
        id: 12,
        state: 0,
        title: "사소한 것도 칭찬하는 방! 칭찬이 필요한 모든 분들 환영합니다.",
        nickname: "내닉네임",
        recommand: 24,
        category: 'will',
    },
    {
        id: 23,
        state: 1,
        title: "답답한 마음을 모두 털어 놓아요. 하나 하나 진심으로 듣고 조언해드릴게요!",
        nickname: "내닉네임",
        recommand: 33,
        category: 'will',
    },
    {
        id: 34,
        state: 2,
        title: "저만 아는 고민이 있어요. 들어주실래요?",
        nickname: "내닉네임",
        recommand: 2,
        category: 'want',
    },
    {
        id: 45,
        state: 1,
        title: "하고 싶은 말 다 할 수 있는 방. 자유롭게 들어오세요.",
        nickname: "내닉네임",
        recommand: 24,
        category: 'will',
    },
    {
        id: 56,
        state: 2,
        title: "인간 관계는 정말 어려운 것 같아요... 자꾸만 포기하고 싶어지네요",
        nickname: "내닉네임",
        recommand: 24,
        category: 'want',
    },
]

const categoryArr = [
    {
        id: 11,
        index: 0,
        category: 'All',
        title: '모두',
        isActive: true,
    },
    {
        id: 22,
        index: 1,
        category: 'will',
        title: '상담 해드려요',
        isActive: false,
    },
    {
        id: 33,
        index: 2,
        category: 'want',
        title: '상담 해주세요',
        isActive: false,
    },
]

function AllChatting () {    
    const [myChat, setMyChat] = useState(testAll);
    // const [isClickedCategory, setIsClickedCategory] = useState([true, false, false]);
    // const [click]

    const handleCategory = ( idx ) => {
        // 클릭된 카테고리 확인하기
        // const newArr = Array(category.length).fill(false);
        // newArr[idx] = true;
        // setIsClickedCategory(newArr);
        // console.log('isClickedCategory: ', isClickedCategory);

        // 클릭된 카테고리 상태 변화
        categoryArr.map(i => i.isActive = false);
        categoryArr[idx].isActive = true;
        console.log('category arr:', categoryArr);



        // // 클릭된 카테고리에 해당되는 데이터만 필터링하기
        // isClickedCategory === [true, false, false]
        // ? setMyChat(testAll)
        // : isClickedCategory === [false, true, false]
        // ? setMyChat(testAll.filter(i => i.category === 'will'))
        // : setMyChat(testAll.filter(i => i.category === 'want'))
    }

    const clickEvent = (e) => {
        console.log(e.target);
        handleCategory(e.target.index)
        console.log(e.target.category);
    }

    return(
        <Container>
            <Tab>
                <TabTitle>소통방 목록</TabTitle>
                <Categories>
                    {categoryArr.map(i => 
                        <Category key={i.id} isActive={i.isActive} onClick={(e)=>clickEvent(e)} >
                           | {i.title}
                        </Category>
                    )}     
                </Categories>
            </Tab>
            <Wrap>
                {myChat.map(i => 
                    <ChatDiv key={i.id}>
                        {
                        i.state === 0 ? 
                        <>
                            <ChatStateDiv>
                                <ChatStateSpan state='0'>상담 진행 중</ChatStateSpan> 
                            </ChatStateDiv> 
                            <ChatTitle>
                                {i.title}
                            </ChatTitle>
                            <ChatFooterDiv>
                                <ChatFooterInfoDiv>
                                    <ChatFooterInfoSpan>{i.nickname}</ChatFooterInfoSpan>
                                    <ChatFooterInfoSpan>|</ChatFooterInfoSpan>
                                    <ChatFooterInfoSpan>{i.recommand}명 추천</ChatFooterInfoSpan>
                                </ChatFooterInfoDiv>
                                <ChatBtn state='0'>{i.category === 'will' ? '상담받기' : '상담하기'}</ChatBtn>
                            </ChatFooterDiv>
                        </>
                        : i.state === 1 ?
                        <>
                            <ChatStateDiv>
                                <ChatStateSpan state='1'>상담 해드려요</ChatStateSpan> 
                            </ChatStateDiv> 
                            <ChatTitle>
                                {i.title}
                            </ChatTitle>
                            <ChatFooterDiv>
                                <ChatFooterInfoDiv>
                                    <ChatFooterInfoSpan>{i.nickname}</ChatFooterInfoSpan>
                                    <ChatFooterInfoSpan>|</ChatFooterInfoSpan>
                                    <ChatFooterInfoSpan>{i.recommand}명 추천</ChatFooterInfoSpan>
                                </ChatFooterInfoDiv>
                                <ChatBtn state='1'>상담하기</ChatBtn>
                            </ChatFooterDiv>
                        </>
                        :
                        <>
                            <ChatStateDiv>
                                <ChatStateSpan state='2'>상담 해주세요</ChatStateSpan> 
                            </ChatStateDiv> 
                            <ChatTitle>
                                {i.title}
                            </ChatTitle>
                            <ChatFooterDiv>
                                <ChatFooterInfoDiv>
                                    <ChatFooterInfoSpan>{i.nickname}</ChatFooterInfoSpan>
                                    <ChatFooterInfoSpan>|</ChatFooterInfoSpan>
                                    <ChatFooterInfoSpan>{i.recommand}명 추천</ChatFooterInfoSpan>
                                </ChatFooterInfoDiv>
                                <ChatBtn state='2'>상담받기</ChatBtn>
                            </ChatFooterDiv>
                        </>
                        }
                    </ChatDiv>
                )}
                
            </Wrap>
        </Container>
        
    )
}
export default AllChatting;