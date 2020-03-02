import React from 'react';
import {shallow} from 'enzyme';
import Movie from './Movie'
import {gettingDataTestAttr} from '../TestUtils/TestUtils';

const setup = (props = {}) => {
    return shallow(<Movie {...props}/>)
}

test('renders without crashing', () => {
    const wrapper = setup();
    expect(wrapper.length).toBe(1)
})

