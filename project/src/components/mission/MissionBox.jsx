import styled from "styled-components";

const Wrapper = styled.section`
    width: 100%;
    margin-top: 50px;
`

const BtnContainer = styled.section`
    width: 100%;
    display: flex;

`

const BoxContainer = styled.section`
    
`

const Btn = styled.div`
    cursor: pointer;
    background-color: ${props => props.isActive ? "white" : props.theme.btnColor};
    color:${props => props.isActive ? props.theme.btnColor : "white"};
    border: 1.5px solid ${props => props.theme.btnColor};
    border-radius: 20px;
    width: 120px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 30px;
    font-weight: 500;
    font-size: 14px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`

function MissionBox () {
    const BtnClick = (event) => {
        const localList = localStorage.getItem("clickBtn");
        const clickValue = event.target.textContent;
        console.log(clickValue + "")
        if (localList === null){
            const array = []
            array.push(clickValue + "")
            localStorage.setItem("clickBtn", array);
        }else{
            const old = localList;
            localStorage.setItem("clickBtn", [...old, clickValue]);
        }
    }
    return (
        <Wrapper>
            <BtnContainer>
                <Btn onClick={BtnClick}>수면 장애</Btn>
                <Btn onClick={BtnClick}>대인 관계</Btn>
                <Btn onClick={BtnClick}>트라우마</Btn>
                <Btn onClick={BtnClick}>불안감</Btn>
                <Btn onClick={BtnClick}>식욕 부진</Btn>
            </BtnContainer>
            <BoxContainer>

            </BoxContainer>
        </Wrapper>
    )
}
export default MissionBox;