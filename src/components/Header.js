import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import Container from '@material-ui/core/Container'

class Header extends React.Component {
   



    render() {
        return (
                <AppBar position="static">
                                <Container>

                <Toolbar>
                <Typography variant="h6">
                    Budgeting
                </Typography>
                <Link to='/'>
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