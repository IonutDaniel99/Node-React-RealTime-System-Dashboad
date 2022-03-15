import { CustomRouterLink } from "../../shared/components/UtilsComponents/CustomRouterLink/CustomRouterLink"
import { SideMenuStyledWrapper } from "./style"

import StorageIcon from '@mui/icons-material/Storage';
import ServerLocationIcon from "../../shared/icons/ServerLocationIcon/ServerLocationIcon";

const SideMenu = () => {
  return (
    <SideMenuStyledWrapper>
      <CustomRouterLink to="/system" icon={<StorageIcon />} />
      <CustomRouterLink to="/cars" icon={<ServerLocationIcon />} />

    </SideMenuStyledWrapper>
  )
}

export default SideMenu

