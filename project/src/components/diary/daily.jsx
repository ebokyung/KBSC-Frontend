import styled from "styled-components";

const Container = styled.section`
    width: 100%;
    margin-top: 30px;
    margin-bottom: 10%;
    font-family: 'Nanum Myeongjo', serif;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

const Textarea = styled.textarea`
    width: 100%;
    height: 350px;
    border: 1px solid #A2A2A6;
    border-radius: 3px;
    padding: 10px;
    margin-bottom: 30px;
    resize:none;
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
    width: 170px;
    border: none;
    border-radius: 3px;
    background-color: ${props=>props.theme.SubmitBtnBackColor};
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    cursor: pointer;
`

function DiaryDaily () {
    return(
    <Container>
        <Form>
            <Textarea placeholder="질문에 자유롭게 답해주세요." />
            <Btn>작성 완료</Btn>
        </Form>
    </Container>
    )
}
export default DiaryDaily;