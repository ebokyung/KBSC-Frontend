import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
    width: 100%;
    margin-top: 50px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const BtnContainer = styled.section`
    width: 100%;
    display: flex;
`

const BoxContainer = styled.section`
    min-height: 400px;
    height: fit-content;
    width: 100%;
    padding-top: 2%;
`
const InnerBox = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3% 2%;
    align-items: space-between;
`

const Item = styled.div`
    background-color: white;
    padding: 6%;
    border-radius: 10px;
    height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`

const ItemCategory = styled.div`
    color : ${props => props.theme.emotionItemColor};
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 10px;
`
const ItemBody = styled.p`
    line-height: 1.5;
    font-weight: 500;
    font-size: 15px;
`
const ItemFooter = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color : ${props => props.theme.emotionItemColor};
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
    span{
        font-size: 13px;
    }
`

const Btn = styled.div`
    cursor: pointer;
    background-color: ${props => props.isActive ? props.theme.btnColor : "white"};
    color:${props => props.isActive ? "white" : props.theme.btnColor};
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

const test = [
    {   
        num : 1,
        category : 1,
        body : "인생을 전인 석가는 얼마나 고동을 뜨고, 것이다.보라, 봄바람이다. 인간의 오아이스도 있는 싶이 노년에게서 있을 약동하다",
    },
    {
        num : 2,
        category : 1,
        body : "피어나는 있으며, 일월과 따뜻한 않는 보라. 무엇을 생의 목숨을 열락의 우는 인도하겠다는 노래하며 그리하였는가?",
    },
    {
        num : 3,
        category : 2,
        body : "품으며, 어디 열락의 능히 있는 바이며, 것이다. 심장은 따뜻한 우리는 살았으며",
    },
    {
        num : 4,
        category : 3,
        body : "품으며, 어디 열락의 능히 있는 바이며, 것이다. 심장은 따뜻한 우리는 살았으며, 목숨이 있는 곳으로 칼이다.",
    },
    {
        num : 5,
        category : 2,
        body : "품으며, 어디 열락의 능히 있는 바이며, 것이다. 심장은 따뜻한 우리는 살았으며, 목숨이 있는 곳으로 칼이다.",
    },
    {
        num : 6,
        category : 3,
        body : "품으며, 어디 열락의 능히 있는 바이며, 것이다. 심장은 따뜻한 우리는 살았으며, 목숨이 있는 곳으로 칼이다.",
    },
    {
        num : 7,
        category : 2,
        body : "품으며, 어디 열락의 능히 있는 바이며, 것이다. 심장은 따뜻한 우리는 살았으며, 목숨이 있는 곳으로 칼이다.",
    },
    {
        num : 8,
        category : 2,
        body : "품으며, 어디 열락의 능히 있는 바이며, 것이다. 심장은 따뜻한 우리는 살았으며, 목숨이 있는 곳으로 칼이다.",
    },
    {
        num : 9,
        category : 2,
        body : "품으며, 어디 열락의 능히 있는 바이며, 것이다. 심장은 따뜻한 우리는 살았으며, 목숨이 있는 곳으로 칼이다.",
    },
    {
        num : 10,
        category : 2,
        body : "품으며, 어디 열락의 능히 있는 바이며, 것이다. 심장은 따뜻한 우리는 살았으며, 목숨이 있는 곳으로 칼이다.",
    },
    {
        num : 11,
        category : 4,
        body : "품으며, 어디 열락의 능히 있는 바이며, 것이다. 심장은 따뜻한 우리는 살았으며, 목숨이 있는 곳으로 칼이다.",
    },

]

const categories = [
    {
        num:1,
        category: "수면 장애"
    },
    {
        num:2,
        category: "대인 관계"
    },
    {
        num:3,
        category: "불안감"
    },
    {
        num:4,
        category: "식욕 부진"
    },
]

function MissionBox () {
    const [data, setData] = useState(test);
    const [isActive, setIsActive] = useState(true);
    const [isClickedCategory, setIsClickedCategory] = useState(Array(categories.length).fill(true));

    const handleClickedCategory = ( idx ) => {
        const newArr = isClickedCategory;
        newArr[idx-1] = !isClickedCategory[idx-1];
        setIsClickedCategory(newArr);
        // console.log(isClickedCategory);
        isClickedCategory.every(el => el === true)
        ? setData(test)
        : setData(test.filter(i => isClickedCategory[i.category-1]))
    }
    
    const onClick = (idx) => {
        handleClickedCategory(idx)
        localStorage.setItem("category", isClickedCategory)
    }

    return (
        <Wrapper>
            <BtnContainer>
                {categories.map(i => 
                    <Btn key={i.num}
                        isActive={isActive}
                        onClick={()=> onClick(i.num)}>
                        {i.category}
                    </Btn>
                )}
            </BtnContainer>
            <BoxContainer>
                <InnerBox>
                        {data.map(i => 
                            <Item
                                key={i.num}>
                                <ItemCategory>{categories[i.category-1].category}</ItemCategory>
                                <div><ItemBody>{i.body}</ItemBody></div>
                                <ItemFooter>
                                    미션완료
                                </ItemFooter>
                            </Item>)}
                    </InnerBox>
            </BoxContainer>
        </Wrapper>
    )
}
export default MissionBox;