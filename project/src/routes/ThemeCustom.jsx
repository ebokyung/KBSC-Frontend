import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintbrush } from "@fortawesome/free-solid-svg-icons";

const Toggle = styled.div`
    width: 35px;
    height: 35px;
    background-color: ${props => props.theme.brushColor};
    color: white;
    display: flex;
    align-items: center;
    border-radius: 100%;
    position: fixed;
    right: 3%;
    top: 600px;
`

function ThemeCustom () {

    return (
        <Toggle>
            <FontAwesomeIcon icon={faPaintbrush} size=''/>
        </Toggle>
    )
}

export default ThemeCustom;