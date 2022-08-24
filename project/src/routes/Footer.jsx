import styled from "styled-components";

const Wapper = styled.section`
    width: 100vw;
    height: 220px;
    background-color: ${props => props.theme.footerBackColor};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    padding-bottom: 55px;
    color : ${props => props.theme.footerColor};
`

const Item = styled.div`
    &:first-child{
        width: 270px;
    }
    &:nth-child(2){
    }
    &:last-child{
        display: flex;
        flex-direction: column;
        width: 270px;
    }
`

const Items = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`

const Part = styled.span`
    width:50%;
`
const Name = styled.span`
    width: 50%;
    text-align: left;
`

function Footer() {
    return(
        <Wapper>
            <Item></Item>
            <Item>
                ⓒ 2022 한울 All Rights Reserved
            </Item>
            <Item>
                <Items>
                    <Part>
                        기획자, 디자이너
                    </Part>
                    <Name>
                        이영서
                    </Name>
                </Items>
                <Items>
                    <Part>
                        프론트엔드 개발자
                    </Part>
                    <Name>
                        이상돈  이보경
                    </Name>
                </Items>
                <Items>
                    <Part>
                        백엔드 개발자
                    </Part>
                    <Name>
                        안석환  정민주  홍석주
                    </Name>
                </Items>
            </Item>
        </Wapper>
    )
}

export default Footer;