import styled from "styled-components";

const Input: any = styled.input`
    /* width: 100%; */
    border: none;
    box-shadow: ${({ noBoxShadow }: any) => ((noBoxShadow) ? 'none' : '0 1px 0 rgba(9,30,66,.25)')};
    padding: 10px;
    outline: none;
    font-size: 14px;
    font-weight: 600;
    border-radius: 2px;
    margin-bottom: 10px;
`;

export default Input;