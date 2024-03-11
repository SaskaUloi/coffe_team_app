import { Link, useMatch, useResolvedPath } from "react-router-dom"
 
export default function NavBar(){
    return (
        <nav className="nav">
            <p className="title_site">
                Team Finder
            </p>
            <ul>
                <CustomLink to="/signup">Sign up</CustomLink>
                <CustomLink to="/login">Log in</CustomLink>           
            </ul>
        </nav>
    
    )    
}

function CustomLink({to, children, ...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return(
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}