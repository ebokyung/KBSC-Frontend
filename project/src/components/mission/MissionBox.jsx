import { useEffect, useState } from "react";
import styled from "styled-components";
import { LogAPI } from "../../axios";
import Img from "../img/blur.png";

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
    margin-top: 20px;
    align-items: space-between;
`

const Item = styled.div`
    background-color: white;
    position: relative;
    padding: 6%;
    border-radius: 10px;
    height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: rgba(50, 50, 105, 0.15) 0px 1px 3px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
`

const ItemCategory = styled.div`
    font-family: 'Nanum Myeongjo', serif;
    color : ${props => props.theme.emotionItemColor};
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 10px;
`
const ItemBody = styled.p`
    font-family: 'Nanum Myeongjo', serif;
    line-height: 1.5;
    font-weight: 500;
    font-size: 15px;
`
const ItemFooter = styled.div`
    border: 1px solid ${props => props.theme.lineColor};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color : ${props => props.theme.lineColor};
    text-align: center;
    margin-top: 15px;
    padding: 5px 10px;
    width: 100px;
    font-size: 13px;
    border-radius: 5px;
    align-self: flex-end;
    cursor: pointer;
    transition: all 0.3s;
    :hover{
        color : white;
        background-color: ${props => props.theme.lineColor};
        transition: all 0.3s;
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

const ItemBlur = styled.div`
    border-radius: 10px;
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background-color: white;
    opacity: 0.92;
    display: flex;
    justify-content: center;
    align-items: center;
`
const BlurImg = styled.img`
    width: 110px;
    height: 60px;
`

const test = [
    {   
        num : 1,
        category : 1,
        body : "인생을 전인 석가는 얼마나 고동을 뜨고, 것이다.보라, 봄바람이다. 인간의 오아이스도 있는 싶이 노년에게서 있을 약동하다",
    },
    {
        num : 2,
        category : 2,
        body : "피어나는 있으며, 일월과 따뜻한 않는 보라. 무엇을 생의 목숨을 열락의 우는 인도하겠다는 노래하며 그리하였는가?",
    },
    {
        num : 3,
        category : 1,
        body : "품으며, 어디 열락의 능히 있는 바이며, 것이다. 심장은 따뜻한 우리는 살았으며",
    },
    {
        num : 4,
        category : 2,
        body : "품으며, 어디 열락의 능히 있는 바이며, 것이다. 심장은 따뜻한 우리는 살았으며, 목숨이 있는 곳으로 칼이다.",
    },
    {
        num : 5,
        category : 5,
        body : "품으며, 어디 열락의 능히 있는 바이며, 것이다. 심장은 따뜻한 우리는 살았으며, 목숨이 있는 곳으로 칼이다.",
    },
    {
        num : 8,
        category :4,
        body : "품으며, 어디 열락의 능히 있는 바이며, 것이다. 심장은 따뜻한 우리는 살았으며, 목숨이 있는 곳으로 칼이다.",
    },
    {
        num : 9,
        category :4,
        body : "품으며, 어디 열락의 능히 있는 바이며, 것이다. 심장은 따뜻한 우리는 살았으며, 목숨이 있는 곳으로 칼이다.",
    },
    {
        num : 10,
        category : 3,
        body : "어디 열락의 능히 있는 바이며, 것이다. 심장은 따뜻한 우리는 살았으며, 목숨이 있는 곳으로 칼이다.",
    },
    {
        num : 11,
        category : 3,
        body : "품으며, 어디 열락의 능히 있는 바이며, 것이다. 심장은 따뜻한 우리는 살았으며, 목숨이 있는 곳으로 칼이다.",
    },

]

function MissionBox () {
    const [data, setData] = useState(test);
    const [categories, setCategories] = useState([])
    //const [isClickedCategory, setIsClickedCategory] = useState(Array(categories.length).fill(true));
    const [localCateogry, setLocalCategory] = useState([])
    const [checkClick, setCheckClick] = useState(0)

    const handleClickedCategory = ( idx ) => {
    }
    
    const onClick = async(idx) => {
        // if(categories[idx-1].isActive){
        //     categories[idx-1].isActive = false
        //     localCateogry[idx-1] = false
        // }else{
        //     categories[idx-1].isActive = true
        //     localCateogry[idx-1] = true
        // }
        // handleClickedCategory(idx)
        // localStorage.setItem("category", localCateogry)
        // setCheckClick(prev => prev + 1)
        try{
            await LogAPI.put(`/api/v1/missions/categories/${idx}`)
            const categories = await LogAPI.get("/api/v1/missions/categories")
            setCategories(categories.data.data)
        }catch(e){
            console.log(e)
        }
    }
    const getCategory = async() => {
        try{
            const categories = await LogAPI.get("/api/v1/missions/categories")
            console.log(categories.data.data)
            const messions = await LogAPI.get("/api/v1/missions")
            console.log(messions)
            setCategories(categories.data.data)
        }catch(e){
            console.log(e)
        }
    }

    useEffect(()=>{
        /* if(localStorage.getItem("category") !== null){
            const array = localStorage.getItem("category").split(',').map(i=>JSON.parse(i))
            setLocalCategory(array);
            categories.map(i => i.isActive = array[i.num-1])
        }else{
            const firstArray = [false,false,false,false,false]
            setLocalCategory(firstArray)
            localStorage.setItem("category", firstArray)
        } */
        getCategory()
    },[checkClick])

    return (
        <Wrapper>
            <BtnContainer>
                {categories.map(i => 
                    <Btn key={i.id}
                        isActive={i.checked}
                        onClick={()=> onClick(i.id)}>
                        {i.category}
                    </Btn>
                )}
            </BtnContainer>
            <BoxContainer>
                <InnerBox>
                        {data.map(i => 
                            <Item
                                key={i.num}>
                                <ItemCategory>{i.category}</ItemCategory>
                                <div><ItemBody>{i.body}</ItemBody></div>
                                <ItemFooter>
                                    미션완료
                                </ItemFooter>
                                {/* <ItemBlur>
                                    <BlurImg src={Img} />
                                </ItemBlur> */}
                            </Item>)}
                    </InnerBox>
            </BoxContainer>
        </Wrapper>
    )
}
export default MissionBox;