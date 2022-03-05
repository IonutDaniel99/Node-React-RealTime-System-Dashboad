
import SideMenu from "./layout/sideMenu/SideMenu";
import ContentMenu from "./layout/contentMenu/ContentMenu";
import SystemInformation from "./features/system_information/SystemInformation";



function App() {
  return (
    <>
      <SideMenu />
      <ContentMenu>
        <SystemInformation />
      </ContentMenu>
    </>
  );
}

export default App;
