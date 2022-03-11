import { SystemIconWrapper, SystemIconWrapperActive } from './styled';

interface IconProps {
  active?: any
  icon: JSX.Element | JSX.Element[],
}

const IconComponent = ({active, icon}: IconProps) => {
  return (
    <>
      {active ? 
        <SystemIconWrapperActive>
          {icon}
        </SystemIconWrapperActive>
        :
        <SystemIconWrapper>
          {icon}
        </SystemIconWrapper>
      }
    </>
  )
}

export default IconComponent