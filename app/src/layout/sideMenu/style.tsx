import styled from "styled-components"

export const SideMenuStyledWrapper = styled.div`
max-width: 64px;
min-width: 64px;
padding-top:10px;
padding-bottom:20px;
border-radius: 30px;
background-color: rgb(0 0 0 / 50%);
display: flex ;
align-items: center ;
flex-direction: column ;
overflow-y: auto ;
overflow-x: hidden;

>*{
  margin: 10px
}

img {
  border-radius: 30px;
}
`