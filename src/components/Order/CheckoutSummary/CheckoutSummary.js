import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import './CheckoutSummary.css';

const checkoutSummary = (props) => {
    return (
        <div className="CheckoutSummary">
            <h1>We hope it tastes well!</h1>
            <div style={{width:'300px',margin:'auto'}}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button btnType="Danger">Cancel</Button>
            <Button btnType="Success">Continue</Button>
        </div>
    );
}

export default checkoutSummary;