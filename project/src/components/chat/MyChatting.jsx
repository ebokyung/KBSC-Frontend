import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

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
const TabInfo = styled.span`
    font-size: 10px;
    color: gray;
    display: flex;
    align-items: center;
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
    color: ${props => props.state ? props.theme.tabTitleColor : "gray"};
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
    border-color: ${props => props.theme.tabTitleColor};
    color: ${props => props.theme.tabTitleColor};
    background-color: white;
    border-style: solid;
    border-radius: 3px;
    font-size: 12px;
    cursor: pointer;
`

const testMy = [
    {
        id: 1,
        state: 0,
        title: "소통방의 제목을 입력해주세요.",
        nickname: "내닉네임",
        recommand: 24,
    },
    {
        id: 2,
        state: 1,
        title: "소통방의 제목을 입력해주세요.",
        nickname: "내닉네임",
        recommand: 33,
    },
    {
        id: 3,
        state: 0,
        title: "소통방의 제목을 입력해주세요.",
        nickname: "내닉네임",
        recommand: 2,
    },
]

function MyChatting () {
    const [myChat, setMyChat] = useState(testMy);

    // useEffect(()=>{
    //     setMyChat(testMy);
    // },[]);

    return(
        <Container>
            <Tab>
                <TabTitle>내 소통방</TabTitle>
                <TabInfo>* 아직 내 상담방이 없어요. 하단의 폼을 채워 상담방을 개설해보세요!</TabInfo>
            </Tab>
            <Wrap>
                {myChat.map(i => 
                    <ChatDiv key={i.id}>
                        { i.state === 0 
                        ? 
                        <ChatStateDiv>
                            <ChatStateSpan state='true'>상담해드려요</ChatStateSpan>
                            <ChatStateSpan>|</ChatStateSpan> 
                            <ChatStateSpan>상담해주세요</ChatStateSpan> 
                        </ChatStateDiv>
                        :
                        <ChatStateDiv>
                            <ChatStateSpan>상담해드려요</ChatStateSpan>
                            <ChatStateSpan>|</ChatStateSpan> 
                            <ChatStateSpan state='true'>상담해주세요</ChatStateSpan> 
                        </ChatStateDiv>
                        }
                        <ChatTitle>
                            소통방의 제목을 입력해주세요.
                        </ChatTitle>
                        <ChatFooterDiv>
                            <ChatFooterInfoDiv>
                                <ChatFooterInfoSpan>내닉네임</ChatFooterInfoSpan>
                                <ChatFooterInfoSpan>|</ChatFooterInfoSpan>
                                <ChatFooterInfoSpan>124명 추천</ChatFooterInfoSpan>
                            </ChatFooterInfoDiv>
                            <ChatBtn>상담방 개설하기</ChatBtn>
                        </ChatFooterDiv>
                    </ChatDiv>
                )}
                
            </Wrap>
        </Container>
        
    )
}
export default MyChatting;