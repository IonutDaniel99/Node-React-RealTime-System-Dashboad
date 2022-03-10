import styled from "styled-components"
import { CustomRouterLink } from "../../shared/utils/CustomRouterLink"

const SideMenu = () => {
  return (
    <SideMenuStyledWrapper>
      <CustomRouterLink to="/system">
        <img width={ 40 } height={ 40 } src="https://picsum.photos/seed/1/40" alt="#"/>
      </CustomRouterLink>
      <CustomRouterLink to="/cars">
        <img width={ 40 } height={ 40 } src="https://picsum.photos/seed/2/40" alt="#"/>
      </CustomRouterLink>
      <CustomRouterLink to="/cars2">
        <img width={ 40 } height={ 40 } src="https://picsum.photos/seed/3/40" alt="#"/>
      </CustomRouterLink>
      <CustomRouterLink to="/cars3">
        <img width={ 40 } height={ 40 } src="https://picsum.photos/seed/4/40" alt="#"/>
      </CustomRouterLink>
      <CustomRouterLink to="/cars4">
        <img width={ 40 } height={ 40 } src="https://picsum.photos/seed/5/40" alt="#"/>
      </CustomRouterLink>
      <CustomRouterLink to="/cars5">
        <img width={ 40 } height={ 40 } src="https://picsum.photos/seed/6/40" alt="#"/>
      </CustomRouterLink>
    </SideMenuStyledWrapper>
  )
}

export default SideMenu


const SideMenuStyledWrapper = styled.div`
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