import React from 'react';
import {Route} from 'react-router';

import Styleguide from './Styleguide';

import Type from './sections/Type';
import Grids from './sections/Grids';
import Forms from './sections/Forms';
import Panels from './sections/Panels';
import Colours from './sections/Colours';
import Buttons from './sections/Buttons';

export default (
  <Route path="/" component={Styleguide}>
    <Route path="type" component={Type}/>
    <Route path="grids" component={Grids}/>
    <Route path="forms" component={Forms}/>
    <Route path="panels" component={Panels}/>
    <Route path="colours" component={Colours}/>
    <Route path="buttons" component={Buttons}/>
  </Route>
);
