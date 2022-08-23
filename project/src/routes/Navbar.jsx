import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';

const Wrapper = styled.div`
    display: flex;
    height: 80px;
    width: 100vw;
    background-color: ${props => props.theme.navBackColor};
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`
const NavDiv = styled.div`
    width: 85%;
    height: 40px;
    color: white;
    display:flex;
    justify-content:space-between;
    flex-wrap: nowrap;
    align-items: center;
`

const Logo = styled.div`
    width: 10%;
    font-size: 23px;
`

const Menu = styled.div`
    height: 100%;
    width: 80%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 15px;
`

const Item = styled.div`
    float:center;
    padding-left:40px;
    position: relative;
`

const Alarm = styled.div`
    width: 5%;
    font-size: 18px;
    text-align: center;
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

    return(
    <Wrapper>
        <NavDiv>
            <Logo>한울</Logo>
            <Menu>
                <Item>서비스 소개</Item>
                <Item  onClick={()=>{setIsActive(!isActive)}}>감정 비우기
                    <DropDown isActive={isActive}>
                            <DropDownList>감정 비우기</DropDownList>
                            <DropDownList>감정 나누기</DropDownList>
                    </DropDown>
                </Item>
                <Item>질문 일기</Item>
                <Item>일일 미션</Item>
                <Item>친구 상담</Item>
                <Item>상담 및 치유</Item>
            </Menu>
            <Alarm><FontAwesomeIcon icon={faBell} /></Alarm>
        </NavDiv>
    </Wrapper>
    )
}

export default NavBar;

// 색상은 theme.js에서 가져와서 쓰세요!! ${props => props.theme.navBackColor};와 같은 방법으로 적용