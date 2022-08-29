import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';

const Container = styled.section`
    width: 100%;
    margin-top: 40px;
    font-family: 'Nanum Myeongjo', serif;
    display: flex;
    flex-direction: column;
`
const Banner = styled.div`
    height: 40px;
    background-color: ${props=>props.theme.BannerBackColor};
    color: white;
    width: 230px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    margin-bottom: -4px;
    z-index: 1;
    margin-top: 1.5%;
`

const EmotionBox = styled.div`
    width: 100%;
    height: fit-content;
    border: 5px solid ${props=>props.theme.emotionBoxBorderColor};
    border-radius: 5px;
    background-color: ${props => props.theme.emotionBoxBackColor};
    padding: 2% 3%;
`
const InnerBox = styled(motion.div)`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`

const Item = styled(motion.div)`
    background-color: white;
    padding: 6%;
    margin-left: 4%;
    margin-right: 4%;
    border-radius: 10px;
    height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
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

const ItemFooter = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 600;
    color : ${props => props.theme.itemFooterColor};
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
    span{
        font-size: 13px;
    }
`
const ItemHeart = styled(FontAwesomeIcon)`
    cursor: pointer;
    font-size: 22px;
    transition: all 0.6s;
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

const test = [
    {   
        num : 1,
        date : "2022.08.09",
        body : "인생을 전인 석가는 얼마나 고동을 뜨고, 것이다.보라, 봄바람이다. 인간의 오아이스도 있는 싶이 노년에게서 있을 약동하다. 하였으며, 이상 인생에 무엇이 피가 있는 눈에 석가는 온갖 약동하다.",
        heart : 6421,
    },
    {
        num : 2,
        date : "2022.08.11",
        body : "피어나는 있으며, 일월과 따뜻한 않는 보라. 무엇을 생의 목숨을 열락의 우는 인도하겠다는 노래하며 그리하였는가? 없으면, 그들에게 크고 어디 예수는 위하여서. 꾸며 트고, 청춘이 보는 커다란 있다.",
        heart : 2101,
    },
    {
        num : 3,
        date : "2022.08.16",
        body : "품으며, 어디 열락의 능히 있는 바이며, 것이다. 심장은 따뜻한 우리는 살았으며, 목숨이 있는 곳으로 칼이다.",
        heart : 1928,
    },
]
function WeeklyTop () {
    const [heart, isHeart] = useState(true);

    const onHeart = (event) => {
        console.log(event.currentTarget.parentElement.parentElement)
        isHeart(prev => !prev);
    }

    return(
        <Container>
            <Banner>이번 주 공감 TOP 3</Banner>
            <EmotionBox>
                <InnerBox variants={boxVariants} initial="start" animate="end">
                    {test.map(i => 
                        <Item
                            key={i.num}
                            variants={innerVariants}>
                            <div>
                                <ItemDate>{i.date}</ItemDate>
                                <ItemBody>{i.body}</ItemBody>
                            </div>
                            <ItemFooter>
                                <span>응원해요 {i.heart.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}개</span>
                                {heart ? <ItemHeart isActive={heart} icon={faHeart} onClick={onHeart}  /> : <ItemHeart isActive={heart} style={{color : "#F0F0F0"}} onClick={onHeart} icon={faHeart} />}
                            </ItemFooter>
                        </Item>)}
                </InnerBox>
            </EmotionBox>
        </Container>
    );
}
export default WeeklyTop;