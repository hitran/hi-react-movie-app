import React from 'react';
import {mount} from 'enzyme';
import MovieDetails from './MovieDetails';
import {BrowserRouter} from 'react-router-dom';
import {gettingDataTestAttr} from '../TestUtils/TestUtils';

const setup = (props = {}, initialEntries) => {
    return mount(<BrowserRouter initialEntries={[...initialEntries]}><MovieDetails {...props} /></BrowserRouter>)
}

test('renders without crashing', () => {
    const wrapper = setup({getMovieDetails: jest.fn}, "/movie/419704");
    expect(wrapper.find(MovieDetails).length).toBe(1)
});

test('renders component movie details successfully', () => {
    const wrapper = setup({getMovieDetails: jest.fn}, "/movie/419704");
    const component = gettingDataTestAttr(wrapper, "component-movie-details");
    expect(component.length).toBe(1)
})

