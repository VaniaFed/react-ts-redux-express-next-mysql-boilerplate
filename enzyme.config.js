import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

global.CLIENT_SIDE_RENDERING = true;
global.React = React;
