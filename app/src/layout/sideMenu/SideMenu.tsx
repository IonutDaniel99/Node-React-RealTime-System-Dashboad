import { CustomRouterLink } from "../../shared/components/UtilsComponents/CustomRouterLink/CustomRouterLink"
import { SideMenuStyledWrapper } from "./style"

import MemoryIcon from '@mui/icons-material/Memory';
import ThermostatIcon from '@mui/icons-material/Thermostat';

const SideMenu = () => {
  return (
    <SideMenuStyledWrapper>
      <CustomRouterLink to="/system" icon={ <MemoryIcon/> } />
      <CustomRouterLink to="/cars" icon={ <ThermostatIcon/> } />

    </SideMenuStyledWrapper>
  )
}

export default SideMenu

