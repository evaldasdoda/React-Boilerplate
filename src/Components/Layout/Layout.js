import React from 'react';

// Components
import Hoc from '../../Hoc/Hoc';
import Menu from '../UI/Menu/Menu';

// Styles
require('./Layout.scss');

const layout = props => (
    <Hoc>
        <Menu />
        <h1>React template</h1>
        <h2>Layout component</h2>
    </Hoc>
);

export default layout;
