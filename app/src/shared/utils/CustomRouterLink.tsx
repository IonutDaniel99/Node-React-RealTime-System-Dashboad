import { LinkProps, useResolvedPath, useMatch, Link } from "react-router-dom";

export function CustomRouterLink({ children, to, ...props }: LinkProps) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    console.log(match);
    return (
      <div>
        <Link
          style={{ backgroundColor: match ? "red" : "yellow" }}
          to={to}
          {...props}
        >
          {children}
        </Link>
      </div>
    );
  }