import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems';
import './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aud/Aud';

const sideDrawer = (props) => {
    let attachedClasses = ['SideDrawer', 'Close'];
    if (props.open) {
        attachedClasses = ['SideDrawer', 'Open'];
    }
    return (
        <Aux>
            <Backdrop show={props.open}  clicked={props.closed} />
            <div className={attachedClasses.join(" ")}>
                <div className="Logo">
                    <Logo height="100%" />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
}

export default sideDrawer;