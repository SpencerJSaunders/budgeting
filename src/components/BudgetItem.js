import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import MoneyImage from '../images/money.jpg'
import HealthcareImage from '../images/healthcare.jpg'
import InvestingImage from '../images/investing.jpg'
import RentImage from '../images/rent.jpg'
import InsuranceImage from '../images/insurance.jpg'
import GroceriesImage from '../images/Groceries.jpg'
import ChildcareImage from '../images/Childcare.jpg' 
import EntertainmentImage from '../images/entertainment.jpg'
import VehicleImage from '../images/vehicle.jpg'
import OtherImage from '../images/other.jpg'
import PetsImage from '../images/pets.jpg'

class BudgetItem extends React.Component {


    renderBudgetItemImage = () => {

        if(this.props.type !== undefined) {
            switch(this.props.type) {
                case 'Groceries':
                    return GroceriesImage
                case 'Vehicle':
                    return VehicleImage
                case 'Insurance':
                    return InsuranceImage
                case 'Rent/Mortgage':
                    return RentImage
                case 'Investing':
                    return InvestingImage
                case 'Childcare':
                    return ChildcareImage
                case 'Entertainment':
                    return EntertainmentImage
                case 'Healthcare':
                    return HealthcareImage
                case 'Pets':
                    return PetsImage
                default:
                    return OtherImage
            }
        }

        return MoneyImage
    }

    numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    render() {
        return (
            <Card>
            <CardActionArea>
            <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                src={this.renderBudgetItemImage()}
                title="Contemplative Reptile"
            />
            <CardContent className='budget-item'>
                <Typography gutterBottom variant="h5" component="h1">
                    {this.props.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {
                        this.props.type
                        ?
                        <p style={{marginBottom: '10px'}}><span style={{fontWeight: 'bold'}}>Expense Type:</span> {this.props.type}</p>
                        :
                        <span></span>
                    }
                    <p><span style={{fontWeight: 'bold'}}>Amount:</span> ${this.numberWithCommas(this.props.amount)}</p>
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