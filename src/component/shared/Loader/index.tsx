import React from 'react';
import styled from 'styled-components';

const LoaderContainer = styled.div`
    padding: 10px;
    color: #fff;
    ${({theme})=> theme.headerFontFamily}
`;

export function Loader() {
    return (<LoaderContainer>Fetching...</LoaderContainer>);
}
