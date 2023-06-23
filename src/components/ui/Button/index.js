import styled from "styled-components";

//buat component button
const Button = styled.button `
    padding : 0.8rem 1rem;
    border-radius :10px;
    border: none;
    color : #fff;
    background-color : #4361ee;
    cursor :pointer;
    text-decoration : none;
    margin-top : 2rem;

    // PROPS VARIANT
    background-color: ${(props) =>
    props.theme.colors[props.variant] || props.theme.colors["primary"]};
`;


export default Button;