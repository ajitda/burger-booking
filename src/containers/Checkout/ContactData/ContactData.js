import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
    state = {
        orderForm: {
            name : {
                elementType : "input",
                elementConfig : {
                    type: "text",
                    placeholder : "Your Name"
                },
                value: ''
            },
            street : {
                elementType : "input",
                elementConfig : {
                    type: "text",
                    placeholder : "Street"
                },
                value: ''
            },
            zipcode: {
                elementType : "input",
                elementConfig : {
                    type: "text",
                    placeholder : "ZIP CODE"
                },
                value: ''
            },
            country: {
                elementType : "input",
                elementConfig : {
                    type: "text",
                    placeholder : "Country"
                },
                value: ''
            },
            email: {
                elementType : "input",
                elementConfig : {
                    type: "email",
                    placeholder : "Your Email"
                },
                value: ''
            },
            delivery_method: {
                elementType : "select",
                elementConfig : {
                    options: [
                        {value: "fastest", displayValue: "Fastest"},
                        {value: "cheapest", displayValue: "Cheapest"}
                    ]
                },
                value: ''
            },
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
                <Input inputtype="input" type="text" name="name" placeholder="Your Name" />
                <Input inputtype="input" type="email" name="email" placeholder="Your Email" />
                <Input inputtype="input" type="text" name="stree" placeholder="Street" />
                <Input inputtype="input" type="text" name="postalCode" placeholder="Postal Code" />
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