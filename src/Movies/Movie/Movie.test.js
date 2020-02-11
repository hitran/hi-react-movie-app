import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Movie from './Movie'
import EnzymeAdapter from 'enzyme-adapter-react-16';
import {gettingDataTestAttr} from '../../TestUtils/TestUtils';

Enzyme.configure({adapter: new EnzymeAdapter()})

const setup = (props = {}) => {
    return shallow(<Movie {...props}/>)
}

test('renders without crashing', () => {
    const wrapper = setup();
    expect(wrapper.length).toBe(1)
})

