import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import Logo from '../images/logo.png'
class Header extends React.Component {
   



    render() {
        return (
                <AppBar id='header' position="static">
                                <Container>

                <Toolbar>
                
                <img style={{maxWidth: '80px'}} src={Logo} />

                <Link to='/' style={{ textDecoration: 'none' }}>
                    <Button style={{color: 'white'}}>
                        Home
                    </Button>
                </Link>
                </Toolbar>
                </Container>
            </AppBar>
        )
    }
}

export default Header