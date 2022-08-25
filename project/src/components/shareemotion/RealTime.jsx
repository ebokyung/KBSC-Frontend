import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

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
    margin-bottom: 200px;
`

const InnerBox = styled(motion.div)`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`

const FirstLine = styled(motion.div)`
    
`

const SecondLine = styled(motion.div)`
    
`

const ThirdLine = styled(motion.div)`
    
`

const Item = styled(motion.div)`
    background-color: white;
    padding: 6%;
    margin-left: 4%;
    margin-right: 4%;
    margin-bottom: 30px;
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
        staggerChildren: 0.07,
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
        body : "일월과 별과 인생을 듣는다. 방황하여도, 구하지 천자만홍이 별과 품고 가진 같이, 부패뿐이다. 할지라도 피어나는 어디 것이다. 그들은 트고, 살았으며, 안고, 사랑의 인생에 있으며, 위하여, 부패뿐이다. 무엇을 풀이 얼마나 인간이 것은 트고, 이것을 끝까지 이것이다. 고동을 커다란 예가 가치를 황금시대의 살았으며, 운다. 보이는 천자만홍이 길지 청춘의 우리 봄바람이다. 청춘에서만 귀는 피가 그들은 역사를 얼마나 되는 소리다.이것은 교향악이다. 아니더면, 그림자는 품으며, 위하여서. 끝에 새가 영원히 안고, 스며들어 남는 속에서 현저하게 인간의 철환하였는가?",
        heart : 61,
    },
    {
        num : 2,
        date : "2022.08.11",
        body : "피어나는 있으며, 일월과 따뜻한 않는 보라. 무엇을 생의 목숨을 열락의 우는 인도하겠다는 노래하며 그리하였는가? 없으면, 그들에게 크고 어디 예수는 위하여서. 꾸며 트고, 청춘이 보는 커다란 있다.",
        heart : 421,
    },
    {
        num : 3,
        date : "2022.08.16",
        body : "따뜻한 그것은 하여도 무엇이 커다란 이것이다. 가는 열매를 새가 있으며, 모래뿐일 피가 끓는다. 얼음에 천고에 동력은 싹이 이상은 그들을 그림자는 그들의 있으랴? 내는 살았으며, 듣기만 부패를 안고, 소금이라 돋고, 풍부하게 청춘이 있으랴? 굳세게 이상은 그것은 말이다. 그들에게 그들을 되려니와, 군영과 위하여 청춘의 때문이다. 대중을 얼음과 품으며, 그러므로 품고 할지라도 있는 못할 행복스럽고 위하여서.",
        heart : 12,
    },
    {
        num : 4,
        date : "2022.08.12",
        body : "열락의 이상 듣기만 청춘의 영원히 이상의 듣는다. 많이 대한 우리의 무한한 있을 두기 같은 불어 부패를 봄바람이다.",
        heart : 1,
    },
    {
        num : 5,
        date : "2022.08.09",
        body : "모래뿐일 가치를 전인 이 얼마나 그들은 원질이 뭇 가진 힘있다. 미묘한 못하다 열락의 같은 그리하였는가? 눈이 이것은 피고, 동력은 위하여 그들의 바이며, 실로 무한한 있는가? 석가는 뛰노는 불어 하였으며, 것이다. 이 찾아다녀도, 것이다.보라, 이상, 자신과 불러 있으랴? 이상의 이상은 설산에서 있음으로써 피다. 소금이라 풍부하게 이상은 위하여서 것이다.보라, 스며들어 작고 말이다.",
        heart : 121,
    },
    {
        num : 6,
        date : "2022.08.09",
        body : "인생을 전인 석가는 얼마나 고동을 뜨고, 것이다.보라, 봄바람이다. 인간의 오아이스도 있는 싶이 노년에게서 있을 약동하다. 하였으며, 이상 인생에 무엇이 피가 있는 눈에 석가는 온갖 약동하다.",
        heart : 123,
    },
    {
        num : 7,
        date : "2022.08.09",
        body : "가지에 하였으며, 있는 피고, 동산에는 그들의 품에 미인을 풀밭에 부패뿐이다. 청춘의 실로 인생의 이상의 가지에 인간의 속잎나고, 힘차게 평화스러운 사막이다. ",
        heart : 6421,
    },
    {
        num : 8,
        date : "2022.08.16",
        body : "이상 심장의 방황하여도, 수 밥을 밝은 사막이다. 따뜻한 목숨이 튼튼하며, 가슴에 눈이 날카로우나 피어나기 가진 실로 아니다. 풀밭에 쓸쓸한 무한한 피부가 동산에는 것이다. 인도하겠다는 트고, 유소년에게서 우는 할지라도 아름다우냐? 맺어, 없는 충분히 곳이 가치를 불러 심장은 피고, 사람은 아니다. 같으며, 관현악이며, 인생을 못할 그것을 그것은 남는 많이 끓는 것이다. 아름답고 불어 능히 내려온 놀이 있으랴? 청춘에서만 위하여서 황금시대를 아니한 실현에 위하여 청춘은 곳으로 구하기 철환하였는가? 안고, 어디 되려니와, 봄바람을 내려온 인생의 뿐이다. 충분히 우는 더운지라 그들의 꽃이 풀밭에 끓는 사는가 대한 부패뿐이다. 역사를 작고 하여도 것이다.보라, 그들은 힘있다.",
        heart : 14221,
    },
    {   
        num : 9,
        date : "2022.08.09",
        body : "인생을 전인 석가는 얼마나 고동을 뜨고, 것이다.보라, 봄바람이다. 인간의 오아이스도 있는 싶이 노년에게서 있을 약동하다. 하였으며, 이상 인생에 무엇이 피가 있는 눈에 석가는 온갖 약동하다.",
        heart : 6421,
    },
    {
        num : 10,
        date : "2022.08.11",
        body : "피어나는 있으며, 일월과 따뜻한 않는 보라. 무엇을 생의 목숨을 열락의 우는 인도하겠다는 노래하며 그리하였는가? 없으면, 그들에게 크고 어디 예수는 위하여서. 꾸며 트고, 청춘이 보는 커다란 있다.",
        heart : 6421,
    },
    {
        num :11,
        date : "2022.08.12",
        body : "열락의 이상 듣기만 청춘의 영원히 이상의 듣는다. 많이 대한 우리의 무한한 있을 두기 같은 불어 부패를 봄바람이다.",
        heart : 6421,
    },

]
function RealTime () {
    const [heart, isHeart] = useState(true);

    const onHeart = (event) => {
        console.log(event.currentTarget.parentElement.parentElement)
        isHeart(prev => !prev);
    }

    return(
        <Container>
            <Banner>실시간 고민 나누기</Banner>
            <EmotionBox>
                <InnerBox variants={boxVariants} initial="start" animate="end">
                    <FirstLine>
                        {test.filter(prev => prev.num % 3 === 1).map(i => 
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
                    </FirstLine>
                    <SecondLine>
                        {test.filter(prev => prev.num % 3 === 2).map(i => 
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
                    </SecondLine>
                    <ThirdLine>
                        {test.filter(prev => prev.num % 3 === 0).map(i => 
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
                    </ThirdLine>
                </InnerBox>
            </EmotionBox>
        </Container>
    );
}
export default RealTime;