import { LinkProps, useResolvedPath, useMatch, Link } from "react-router-dom";
import styled from "styled-components";

export function CustomRouterLink({ children, to, ...props }: LinkProps) {
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
          {children}
        </Link>

      </div>
    );
  }

  const StyledSpan = styled.div`
    border-left: 2px solid #65BFFF;
    position: relative;
    height: 32px;
    overflow: hidden;
    right: 10px;
    margin: auto 0;
    margin-right: 0px;
  `