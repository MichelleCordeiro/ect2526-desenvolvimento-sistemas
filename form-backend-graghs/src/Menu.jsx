import { AppBar, Stack, Toolbar } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import './index.css';

export default function Menu() {

    return (
        <>
        <AppBar position="fixed">
            <Toolbar>
                <Stack direction="row" spacing={2}>
                    <Link to="/" className="link">HOME</Link>
                    {/* <Link style={{color: 'red'}} to="/">HOME</Link> */}
                    <Link to="/create" className="link">CREATE</Link>
                    {/* <Link style={{color: 'red'}} to="/create">CREATE</Link> */}
                </Stack>
            </Toolbar>
        </AppBar>
        <Outlet />
        </>
    )
}