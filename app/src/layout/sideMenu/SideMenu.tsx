import { CustomRouterLink } from "../../shared/utils/CustomRouterLink"
import { SideMenuStyledWrapper } from "./style"

import MemoryIcon from '@mui/icons-material/Memory';
import ThermostatIcon from '@mui/icons-material/Thermostat';

const SideMenu = () => {
  return (
    <SideMenuStyledWrapper>
      <CustomRouterLink to="/system" icon={ <MemoryIcon/> } />
      <CustomRouterLink to="/cars" icon={ <ThermostatIcon/> } />

      {/* // <CustomRouterLink to="/cars3">
      //   <IconComponent children={ <MemoryIcon /> } />
      // </CustomRouterLink>
      // <CustomRouterLink to="/cars4">
      //   <IconComponent children={ <MemoryIcon /> } />
      // </CustomRouterLink>
      // <CustomRouterLink to="/cars5">
      //   <IconComponent children={ <MemoryIcon /> } />
      // </CustomRouterLink> */}
    </SideMenuStyledWrapper>
  )
}

export default SideMenu

