import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteIncome } from '../actions'
import Button from '@material-ui/core/Button';
import '../css/App.css'

class DeleteIncome extends React.Component {

    render() {
        console.log(this.props.incomeItem)
        return (
            <div className='add-edit-container'>
                <h1 className='delete-title'>Are you sure you want to delete '{`${this.props.incomeItem.title}`}'?</h1>
                <Button onClick={() => this.props.deleteIncome(this.props.match.params.id, this.props.history)} variant="contained" color="secondary">Delete</Button>
                <Link style={{textDecoration: 'none', marginLeft: '10px'}} to ='/'>
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
        incomeItem: state.income[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {deleteIncome})(DeleteIncome)