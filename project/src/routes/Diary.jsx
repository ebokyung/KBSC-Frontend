import styled from "styled-components";
import PageHeader from "../components/PageHeader";

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

const pageheader = {
    title : "질문 일기",
    body1: "오늘의 나, 한 달 전의 나, 일 년 전의 나는 어땠을까요?",
    body2 : "책장을 채우고 넘겨가며 나를 되돌아보고 앞으로의 나를 상상해보세요.",
    width : "125px"
}

function Diary() {
    return (
        <Container>
            <Wrapper>
                <PageHeader props={pageheader} />
            </Wrapper>
        </Container>
    )
}
export default Diary;