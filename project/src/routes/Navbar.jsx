import styled from 'styled-components';
import { useState } from 'react';
import { useEffect } from 'react';
import $ from 'jquery';
import logoImg from "../components/img/logo.png";
import { useMatch } from "react-router";
import { useNavigate } from 'react-router-dom';

const Container = styled.body`
    width: 100vw;
    display: flex;
    justify-content: center;
    background-color: ${props => props.theme.navBackColor};
    height: 80px;
    justify-content: center;
    align-items: center;
    position: fixed;
    top:0;
    z-index: 300;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`

const Wrapper = styled.section`
    width : ${props => props.theme.width};
    max-width: ${props => props.theme.maxWidth};
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    flex-wrap: nowrap;
`

const Logoimg = styled.img`
    width: 30px;
    height: 30px;
`

const Logo = styled.div`
    display: flex;
    width: 20%;
    cursor: pointer;
    align-items: center;
`


const LogoTitle = styled.h3`
    font-family: 'Nanum Myeongjo', serif;
    width: 50%;
    font-size: 30px;
    margin-left: 10px;
    font-weight: 500;
`

const Menu = styled.div`
    height: 100%;
    width: 70%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 15px;
    font-weight: 600;
`

const Item = styled.div`
    opacity: ${props => props.isActive ? 1 : 0.6};
    cursor: pointer;
    float:center;
    padding-left:40px;
    position: relative;
    transition: all 0.4s;
    :hover{
        transition: all 0.4s;
        opacity: 1;
    }
`

const Alarm = styled.div`
    cursor: pointer;
    padding: 3px 10px;
    text-align: center;
    font-size: 15px;
    font-weight: 500;
    border: 2px solid white;
    border-radius: 15px;
`
const DropDown = styled.ul`
    display: ${props => props.isActive ? 'block' : 'none'};
    position: absolute;
    top: 16px;
    left:20px;
    background-color: #ffffff;
    width: 110px;
    margin-top: 16px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    /* z-index: 1; */
    color: ${props => props.theme.navBackColor};
    text-align: center;
`

const DropDownList = styled.li`
    padding: 12px 16px;
    font-size:13px;
    &:hover {
        background-color: #f5f5f5;
        border-radius: 5px;
    }
`

function NavBar () {
    // 메뉴 클릭하면 드롭다운 되도록 하는 상태변수
    const [isActive, setIsActive] = useState(false);
    const navigate = useNavigate()
    const emotionMatch = useMatch("/emotion/*")
    const emptyMatch = useMatch("/emotion/empty");
    const shareMatch = useMatch("/emotion/share");
    const mainMatch = useMatch("/");
    const diaryMatch = useMatch("/diary");
    const missionMatch = useMatch("/mission");
    const chatMatch = useMatch("/chat");
    const clinicMatch = useMatch("/clinic");

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll); //clean up
        };
    }, []);

    let lastScrollY = 0;
    const handleScroll = (e) => {
        const scrollY = e.path[1].window.pageYOffset;
        const direction = scrollY > lastScrollY ? false : true;
        lastScrollY = scrollY;
        if(scrollY > 100){
            if (direction){
                $("#navbar").slideDown();
            }else{
                $("#navbar").slideUp();
            }
        }
    };

    const logOut = () => {

    }

    return(
    <Container id='navbar'>
        <Wrapper>
            <Logo>
                <Logoimg src={logoImg} />
                <LogoTitle>한울</LogoTitle>
            </Logo>
            <Menu>
                <Item isActive={mainMatch !== null} onClick={() => navigate("/")}>서비스 소개</Item>
                <Item isActive={emotionMatch  !== null}  onClick={()=>{setIsActive(!isActive)}}>감정 비우기
                    <DropDown isActive={isActive}>
                            <DropDownList isActive={emptyMatch  !== null} onClick={() => navigate("/emotion/empty")}>감정 비우기</DropDownList>
                            <DropDownList isActive={shareMatch  !== null} onClick={() => navigate("/emotion/share")}>감정 나누기</DropDownList>
                    </DropDown>
                </Item>
                <Item isActive={diaryMatch  !== null} onClick={() => navigate("/diary")}>질문 일기</Item>
                <Item isActive={missionMatch  !== null} onClick={() => navigate("/mission")}>일일 미션</Item>
                <Item isActive={chatMatch  !== null} onClick={() => navigate("/chat")}>친구 상담</Item>
                <Item isActive={clinicMatch  !== null} onClick={() => navigate("/clinic")}>상담 및 치유</Item>
            </Menu>
            <Alarm onClick={logOut}>
                로그아웃
            </Alarm>
        </Wrapper>
    </Container>
    )
}

export default NavBar;

// 색상은 theme.js에서 가져와서 쓰세요!! ${props => props.theme.navBackColor};와 같은 방법으로 적용