import { useRef, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import fenceImg from "../img/fence.png"

const Container = styled.section`
    width: 100%;
    margin-top: 30px;
    font-family: 'Nanum Myeongjo', serif;
`

// 울타리 부분
const Fence = styled.section`
    
`

const Img = styled.img`
    width: 100%;
`

const EmotionBox = styled.div`
    margin-top: -4px;
    width: 100%;
    height: 600px;
    border: 5px solid ${props=>props.theme.emotionBoxBorderColor};
    border-radius: 5px;
    background-color: ${props => props.theme.emotionBoxBackColor};
    padding-top: 2%;
    padding-left: 3%;
    padding-right: 3%;
    padding-bottom: 1%;
`
const InnerBox = styled(motion.div)`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`

const Item = styled(motion.div)`
    cursor: pointer;
    background-color: white;
    padding: 6%;
    margin-top: 15px;
    margin-left: 4%;
    margin-right: 4%;
    border-radius: 10px;
    height: fit-content;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    &:active{
        z-index: 100;
    }
`

const ItemDate = styled.div`
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

const boxVariants = {
    start: {
      opactiy: 0,
      scale: 0.5
    },
    end : {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        duration: 0.3,
        bounce: 0.3,
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    }
}
const innerVariants = {
    start : {
      opacity: 0,
      y : 10
    },
    end : {
      opacity: 1,
      y : 0
    }
}

  

// 입력input 부분
const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 4%;
    margin-bottom: 15%;
`

const Toggle = styled(motion.div)`
    cursor: pointer;
    background-color: ${(props) => props.isActive ? props.theme.toggleBtnBackColor : "#DADADA"};
    border: 2px solid ${(props) => props.isActive ? props.theme.toggleBtnBorderColor : "#D0D0D0"};
    height: 40px;
    width: 80px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color : white;
    font-size: 12px;
    font-weight: 500;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const TrueToggle = styled.div`
    
`

const FalseToggle = styled.div`
    
`

const Input = styled.input`
    height: 40px;
    width: 70%;
    border: 1px solid #A2A2A6;
    border-radius: 3px;
    padding: 0 10px;
    ::placeholder {
        color: #A2A2A6;
    }
    :focus {
        outline-color: ${props=>props.theme.SubmitBtnBackColor};
    }
`
const Btn = styled.button`
    height: 40px;
    color:white;
    width: 200px;
    border: none;
    border-radius: 3px;
    background-color: ${props=>props.theme.SubmitBtnBackColor};
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    cursor: pointer;
`

const ToggleCircle = styled(motion.div)`
    width: 32px;
    height: 32px;
    border-radius: 50%;
`

const test = [
    {   
        num : 1,
        date : "2022.08.09",
        body : "인생을 전인 석가는 얼마나 고동을 뜨고, 것이다.보라, 봄바람이다. 인간의 오아이스도 있는 싶이 노년에게서 있을 약동하다. 하였으며, 이상 인생에 무엇이 피가 있는 눈에 석가는 온갖 약동하다."
    },
    {
        num : 2,
        date : "2022.08.11",
        body : "피어나는 있으며, 일월과 따뜻한 않는 보라. 무엇을 생의 목숨을 열락의 우는 인도하겠다는 노래하며 그리하였는가? 없으면, 그들에게 크고 어디 예수는 위하여서. 꾸며 트고, 청춘이 보는 커다란 있다."
    },
    {
        num : 3,
        date : "2022.08.16",
        body : "품으며, 어디 열락의 능히 있는 바이며, 것이다. 심장은 따뜻한 우리는 살았으며, 목숨이 있는 곳으로 칼이다."
    },
    {
        num : 4,
        date : "2022.08.12",
        body : "열락의 이상 듣기만 청춘의 영원히 이상의 듣는다. 많이 대한 우리의 무한한 있을 두기 같은 불어 부패를 봄바람이다."
    },
    {
        num : 5,
        date : "2022.08.09",
        body : "가지에 하였으며, 있는 피고, 동산에는 그들의 품에 미인을 풀밭에 부패뿐이다. 청춘의 실로 인생의 이상의 가지에 인간의 속잎나고, 힘차게 평화스러운 사막이다. "
    },
    {
        num : 6,
        date : "2022.08.09",
        body : "인생을 전인 석가는 얼마나 고동을 뜨고, 것이다.보라, 봄바람이다. 인간의 오아이스도 있는 싶이 노년에게서 있을 약동하다. 하였으며, 이상 인생에 무엇이 피가 있는 눈에 석가는 온갖 약동하다."
    },

]
function EmptyFence () {
    const [toggle, setToggle] = useState(false);
    const { register, handleSubmit, setValue } = useForm();
    const dragConstraints = useRef(null);

    const onDrag = (event, info, id) => {
        console.log(id)
    }


    const onValid = (data) => {
        setValue("write", "")
    }

    return(
        <Container ref={dragConstraints}>
            <Fence>
                <Img src={fenceImg}></Img>
                <EmotionBox>
                    <InnerBox variants={boxVariants} initial="start" animate="end">
                        {test.map(i => 
                        <Item
                            key={i.num}
                            variants={innerVariants}
                            drag
                            dragConstraints={dragConstraints}
                            onDrag={
                                (event, info) => onDrag(event, info, i.num)
                              }>
                            <ItemDate>{i.date}</ItemDate>
                            <ItemBody>{i.body}</ItemBody>
                        </Item>)}
                    </InnerBox>
                </EmotionBox>
            </Fence>
            <Form onSubmit={handleSubmit(onValid)}>
                <Toggle isActive={toggle} onClick={() => setToggle(prev => !prev)}>
                    {toggle ? <><TrueToggle style={{marginRight : "7px"}} >공개</TrueToggle><ToggleCircle layoutId = "circle" style={{backgroundColor : "white"}}></ToggleCircle></> : 
                    <><ToggleCircle layoutId = "circle" style={{backgroundColor : "#EBEBEB"}}></ToggleCircle><FalseToggle>비공개</FalseToggle></>}
                </Toggle>
                <Input {...register("write", {required : true})} placeholder="비우고 싶은 감정을 입력해주세요. 어떤 내용이든 좋아요." />
                <Btn>작성 완료</Btn>
            </Form>
        </Container>
    )
}
export default EmptyFence;