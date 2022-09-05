import styled from "styled-components";
import SignUpBox from "../components/signup/SignUpBox";

const Container = styled.body`
    width: 100vw;
    display: flex;
    justify-content: center;
`

const Wrapper = styled.section`
    width : ${props => props.theme.width};
    max-width: ${props => props.theme.maxWidth};
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`
const LogInImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
`

function SignUp () {
    return (
        <Container>
            <Wrapper>
                <LogInImg>
                    사진이 들어갈 위치
                </LogInImg>
                <SignUpBox />
            </Wrapper>
        </Container>
    );
}
export default SignUp;