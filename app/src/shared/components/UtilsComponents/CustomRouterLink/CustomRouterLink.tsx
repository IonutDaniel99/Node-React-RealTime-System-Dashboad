import { LinkProps, useResolvedPath, useMatch, Link } from "react-router-dom";
import IconComponent from "../../../icons/IconComponent/IconComponent"
import { StyledSpan } from "./styled";

interface IconElementProps {
  icon: JSX.Element | JSX.Element[];
}

export function CustomRouterLink({ children, to, ...props }: LinkProps & IconElementProps) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
      <div>
        <Link
          style={{display:"flex", justifyContent:"center"}}
          to={to}
          {...props}
        >
          {match && <StyledSpan /> }
          <IconComponent active={match} icon={props.icon} />
        </Link>
      
      </div>
    );
  }
