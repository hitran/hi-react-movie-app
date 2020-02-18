import React from 'react';
import {shallow} from 'enzyme';
import Movies from './Movies';

const setup = (props = {}) => {
    return shallow(<Movies {...props}/>)
}

test('renders without crashing', () => {
    const wrapper = setup();
    expect(wrapper.length).toBe(1)
})