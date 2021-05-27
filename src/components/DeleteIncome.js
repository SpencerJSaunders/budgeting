import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteIncome } from '../actions'
import Button from '@material-ui/core/Button';

class DeleteIncome extends React.Component {

    render() {
        return (
            <div>
                <Button onClick={() => this.props.deleteIncome(this.props.match.params.id, this.props.history)} variant="contained" color="primary">Delete</Button>
                <Link to ='/'>Cancel</Link>
            </div>
        )
    }
}

export default connect(null, {deleteIncome})(DeleteIncome)