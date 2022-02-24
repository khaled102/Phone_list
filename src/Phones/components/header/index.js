import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './style.scss';

export const Header = (props) => {
    const {title, handle_menu_shown} = props;
    return(
        <AppBar position="static" className="header" style={{backgroundColor:'#2B156E'}}>
            <Toolbar className="Header_Container">
                <Typography variant="h6" className="title">
                    {title}
                </Typography>
            </Toolbar>
        </AppBar>
    )
}