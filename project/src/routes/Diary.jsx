import styled from "styled-components";
import PageHeader from "../components/PageHeader";
import DiaryMonthly from '../components/diary/monthly';
import DiaryDaily from '../components/diary/daily';

const Container = styled.body`
    width: 100vw;
    display: flex;
    justify-content: center;
`

const Wrapper = styled.section`
    width : ${props => props.theme.width};
    max-width: ${props => props.theme.maxWidth};
    min-height: ${props => props.theme.minHeight};
`

const pageheader__monthly = {
    title : "질문 일기",
    body1: "오늘의 나, 한 달 전의 나, 일 년 전의 나는 어땠을까요?",
    body2 : "책장을 채우고 넘겨가며 나를 되돌아보고 앞으로의 나를 상상해보세요.",
    width : "125px"
}

const pageheader__daily = {
    title : "오늘의 질문",
    body1: "오늘 하루 중 가장 행복했던 순간은 언제인가요?",
    width : "155px"
}
/*
const test = [
    {   
        num : 1,
        date : "2022.08.01",
        body : "인간이 주는 싶이 착목한는 있으며, 힘차게 가진 내는 심장은 있으랴?"
    },
    {
        num : 2,
        date : "2022.08.02",
        body : "부패를 청춘의 만물은 이것은 피는 오아이스도 같이, 그들의 교향악이다."
    },
    {
        num : 3,
        date : "2022.08.03",
        body : "풀이 피가 따뜻한 웅대한 예가 눈이 할지라도 이상의 보배를 있다."
    },
    {
        num : 4,
        date : "2022.08.04",
        body : "꽃이 하는 얼음 이것이다."
    },
    {
        num : 5,
        date : "2022.08.05",
        body : "거친 대중을 부패를 낙원을 들어 소담스러운 우리 수 교향악이다."
    },
    {
        num : 6,
        date : "2022.08.06",
        body : "실로 투명하되 청춘의 놀이 이상의 따뜻한 아니더면, 꽃이 옷을 것이다."
    },
    {
        num : 7,
        date : "2022.08.07",
        body : "남는 그들은 우리의 이상의 불어 뿐이다. 우리 황금시대의 사람은 위하여서."
    },
    {
        num : 8,
        date : "2022.08.08",
        body : "주는 있는 그와 실현에 봄바람이다."
    },
    {
        num : 9,
        date : "2022.08.09",
        body : "그림자는 이것은 미묘한 별과 스며들어 청춘의 뿐이다."
    },
    {
        num : 10,
        date : "2022.08.10",
        body : "눈이 위하여 것은 되는 보라."
    },
    {
        num : 11,
        date : "2022.08.11",
        body : "있는 같이, 설레는 없으면, 구하기 작고 약동하다."
    },
    {
        num : 12,
        date : "2022.08.12",
        body : "속에서 고행을 열락의 목숨이 피가 기쁘며, 그리하였는가?"
    },
    {
        num : 13,
        date : "2022.08.13",
        body : "사라지지 청춘 피가 우리의 찾아다녀도, 보라. 온갖 없으면, 능히 피가 힘있다."
    },
    {
        num : 14,
        date : "2022.08.14",
        body : "그와 못하다 끝에 가지에 설레는 바로 것이다.."
    },
    {
        num : 15,
        date : "2022.08.15",
        body : "..."
    },
]
*/

function Diary() {    

    return (
        <Container>
            <Wrapper>
                <PageHeader props={pageheader__monthly} />
                <DiaryMonthly />
                <PageHeader props={pageheader__daily} />
                <DiaryDaily />
            </Wrapper>
        </Container>
    )
}
export default Diary;