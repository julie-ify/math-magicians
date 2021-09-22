import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '../pages/Navbar';

describe('test if Navbar', () => {
  test('renders correctly', () => {
    const component = renderer
      .create(
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});

describe('Navbar', () => {
  test('Responding on Home click ', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );
    fireEvent.click(screen.getByText('Home'));
    screen.debug();
    expect(screen.getByTestId('1'));
  });
  test('Responding on Calculator click ', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );
    fireEvent.click(screen.getByText('Calculator'));
    screen.debug();
    expect(screen.getByTestId('2'));
  });
  test('Responding on Quote click ', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );
    fireEvent.click(screen.getByText('Quote'));
    screen.debug();
    expect(screen.getByTestId('3'));
  });
});
