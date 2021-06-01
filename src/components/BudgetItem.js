import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

class BudgetItem extends React.Component {

    render() {
        return (
            <Card>
            <CardActionArea>
            <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image="https://images.pexels.com/photos/53621/calculator-calculation-insurance-finance-53621.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                title="Contemplative Reptile"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {this.props.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                {this.props.type}
                {this.props.amount}
                </Typography>
            </CardContent>
            </CardActionArea>
            <CardActions>
                {this.props.buttons}
            </CardActions>
        </Card>
        )
    }
}

export default BudgetItem