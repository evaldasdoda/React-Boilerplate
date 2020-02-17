import React from 'react';

// Components
import Hoc from '../../Hoc/Hoc';
import Menu from '../UI/Menu/Menu';
import Footer from '../UI/Footer/Footer';

// Styles
require('./Layout.scss');

const layout = props => (
    <Hoc>
        <Menu />
        <h1>React template</h1>
        <h2>Layout component</h2>
        <Footer />
    </Hoc>
);

export default layout;
