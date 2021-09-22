import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../pages/Navbar';

describe('test if Navbar', () => {
  test('renders correctly', () => {
    const component = renderer
      .create(
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
