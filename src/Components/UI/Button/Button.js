import React from 'react';

// Styles
require('./Button.scss');

const button = props => {
    return (
        <button className={'BUTTON ' + $props.class} onClick={props.clicked}>
            {props.children}
        </button>
    );
};

export default button;
