import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteExpense } from '../actions'
import Button from '@material-ui/core/Button';
import '../css/App.css'

class DeleteExpense extends React.Component {

    render() {
        return (
            <div className='add-edit-container'>
                <Button onClick={() => this.props.deleteExpense(this.props.match.params.id, this.props.history)} variant="contained" color="primary">Delete</Button>
                <Link to ='/'>Cancel</Link>
            </div>
        )
    }
}

export default connect(null, {deleteExpense})(DeleteExpense)