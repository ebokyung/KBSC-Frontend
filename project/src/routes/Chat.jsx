import styled from "styled-components";
import PageHeader from '../components/PageHeader';

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
    title : "친구 상담",
    body1: "고민과 위로, 그리고 응원을 나눌 수 있는 소통방을 개설하거나 참여해보세요!",
    body2 : "사용자 간 1:1로 소통할 수 있어요",
    width : "128px"
}

function Chat () {
    return (
        <Container>
            <Wrapper>
                <PageHeader props={pageheader} />
            </Wrapper>
        </Container>
    );
}
export default Chat;