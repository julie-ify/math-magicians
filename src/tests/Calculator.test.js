import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

describe('Test if Calculator', () => {
  test('renders Calculator correctly', () => {
    const component = renderer.create(<Calculator />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
