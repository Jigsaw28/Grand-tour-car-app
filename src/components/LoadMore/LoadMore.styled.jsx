import styled from "styled-components";

export const BtnLoadMore = styled.a`
display: block;
cursor: pointer;
margin-left: auto;
margin-right: auto;
margin-top: 100px;
color: #3470FF;
font-size: 16px;
font-family: ManropeMedium;
font-weight: 500;
line-height: 1.5; /* 150% */
text-decoration-line: underline;
transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
&:focus, &:hover {
    color: #0B44CD;
}
`