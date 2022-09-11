import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useForm } from "react-hook-form";
import fenceImg from "../img/fence.png"
import { LogAPI } from "../../axios";

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
    },
    leaving : {
        opacity: 0,
        y : 100
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

function EmptyFence () {
    const [toggle, setToggle] = useState(false);
    const { register, handleSubmit, setValue } = useForm();
    const dragConstraints = useRef(null);
    const [hidden , setHidden] = useState(-1);
    const [emotion, setEmotion] = useState([]);
    const fence = useRef();

    const getdata = async() => {
        try{
            const data = await LogAPI.get("/api/v1/emotion?type=private");
            setEmotion(data.data.data);
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        getdata();
    },[])
    

    const onDrag = async(event, info, id) => {
        console.log(info.point.y)
        if(info.offset.y < -150 && info.offset.y > -180 && info.point.y < 400){
            try{
                setHidden(id)
                await LogAPI.delete(`/api/v1/emotion/${id}`);
            }catch(error){
                console.log(error);
            }
        }
        event.preventDefault()
    }


    const onValid = async(data) => {
        let how = ""
        if (toggle){
            how = "PUBLIC"
        }else{
            how = "PRIVATE"
        }
        const result = {
            "content" : data.write,
            "status" : how
        }
        try{
            await LogAPI.post("/api/v1/emotion", result).then(
                response => {
                    console.log(response);
                }
            )
            const data = await LogAPI.get("/api/v1/emotion?type=private");
            setEmotion(data.data.data);
        }catch(error){
            console.log(error)
        }
        setValue("write", "")
    }

    return(
        <Container ref={dragConstraints}>
            <Fence>
                <Img ref={fence} src={fenceImg}></Img>
                <EmotionBox>
                    <InnerBox variants={boxVariants} initial="start" animate="end">
                        <AnimatePresence>
                            {emotion.map(i => 
                            hidden === i.id ? null :
                            <Item
                                key={i.id}
                                variants={innerVariants}
                                initial = "start"
                                exit = "leaving"
                                drag
                                transition={{ duration: 0.4}}
                                dragConstraints={dragConstraints}
                                onDrag={
                                    (event, info) => onDrag(event, info, i.id)
                                }>
                                <ItemDate>{i.createdDateTime.substr(0, 10).replace(/-/g, '.')}</ItemDate>
                                <ItemBody>{i.content}</ItemBody>
                            </Item>)}
                        </AnimatePresence>
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