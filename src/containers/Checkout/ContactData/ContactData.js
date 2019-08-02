import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
    state = {
        name : '',
        email : '',
        address : {
            street : '',
            postalCode : ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        console.log(this.props.ingredients);
         this.setState({loading:true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name : 'Ajit das',
                address : {
                    street : 'test street 1',
                    zipcode: '5034985',
                    country: 'Germany'
                },
                email: 'test@test.com'
            },
            delivery_method: 'fastest'
        }
        axios.post('/orders.json', order)
        .then(response=>{
            this.setState({loading:false });
            this.props.history.push('/');
        })
        .catch(error=>{
            this.setState({loading:false});
        });
    }

    render() {
        let form = (
            <form>
                <input className="Input" type="text" name="name" placeholder="Your Name" />
                <input className="Input" type="email" name="email" placeholder="Your Email" />
                <input className="Input" type="text" name="stree" placeholder="Street" />
                <input className="Input" type="text" name="postalCode" placeholder="Postal Code" />
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner/>;
        }
        return (
            <div className="ContactData">
                <h4>Enter your Contact Data</h4>
               {form}
            </div>
        );
    }
}

export default ContactData;