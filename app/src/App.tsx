
import SideMenu from "./layout/sideMenu/SideMenu";
import ContentMenu from "./layout/contentMenu/ContentMenu";
import SystemInformation from "./features/system_information/SystemInformation";
import styled from "styled-components";
import { useEffect } from "react";


function App() {

  return (
    <AppWrapperStyled>
      <ContainerStyled tabIndex={ -1 }>
        <SideMenu />
        <ContentMenu>
            <SystemInformation />
        </ContentMenu>
      </ContainerStyled>
    </AppWrapperStyled>
  );
}

export default App;


const AppWrapperStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 100;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const ContainerStyled = styled.div`
  background-color: #00000047 !important;
  backdrop-filter: blur(16px);
  min-width: auto;
  min-height: auto;
  top: 0;
  bottom: 0;
  height: calc(100vh - 30px * 2);
  border-radius: 30px;
  width: 1430px;
  max-width: 1430px;
  display:flex;
  gap: 15px;
  padding: 5px
`