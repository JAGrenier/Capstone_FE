import styled from 'styled-components';

export const ButtonContainer = styled.button`
background: var(--mainRed);
color: var(--white);
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border-radius: 3px;
&:hover{
    background: var(--lightRed);
    color: var(--white);
}
`;