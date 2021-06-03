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
                <h1 className='delete-title'>Are you sure you want to delete '{`${this.props.expense.title}`}'?</h1>
                <Button onClick={() => this.props.deleteExpense(this.props.match.params.id, this.props.history)} variant="contained" color="secondary">Delete</Button>
                <Link style={{ textDecoration: 'none', marginLeft: '10px'}} to ='/'>
                    <Button variant="contained" color="primary">
                        Cancel
                    </Button>
                </Link>           
             </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        expense: state.expenses[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {deleteExpense})(DeleteExpense)