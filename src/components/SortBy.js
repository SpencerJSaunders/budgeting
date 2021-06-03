import React from 'react'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import expenseTypes from '../expenseTypes'
import '../css/App.css'

class SortBy extends React.Component {

    state = {
        anchorEl: null
    }

    handleClick = (event) => {
        this.setState({
           anchorEl: event.currentTarget
        })
    }
    
    handleClose = () => {
        this.setState({
            anchorEl: null
        });
      };

    onChange = (value) => {
        this.handleClose()
        this.props.sortChange(value)
    }

    renderMenuItems = () => {
        return expenseTypes.map(type => {
            return <MenuItem onClick={() => this.onChange(type)}>{type}</MenuItem>
        })
    }


    render() {
        console.log(this.state.anchorEl)
        return (
            <div>
               <div>
      <Button className='sort-menu' aria-controls="simple-menu" aria-haspopup="true" onClick={(event) => this.handleClick(event)}>
          {this.props.expenseSort}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={this.state.anchorEl}
        keepMounted
        open={Boolean(this.state.anchorEl)}
        onClose={this.handleClose}
      >
            <MenuItem onClick={() => this.onChange('all')} >All</MenuItem>

          {this.renderMenuItems()}
      
      </Menu>
    </div>
            </div>
        )
    }

}

export default SortBy