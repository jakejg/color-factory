import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Routes from '../Routes';

test('renders without crashing', () => {
  render(
<MemoryRouter initialEntries={['/colors']} >
    <Routes />
</MemoryRouter>)
});

test('matches snapshot', () => {
    const { asFragment } = render(
    <MemoryRouter initialEntries={['/colors']} >
        <Routes />
    </MemoryRouter>);
    expect( asFragment()).toMatchSnapshot();
  });

test('displays home page', () => {
    const { queryByText } = render(
        <MemoryRouter initialEntries={['/colors']} >
            <Routes />
        </MemoryRouter>);
    expect(queryByText('Select a Color')).toBeInTheDocument();
})

test('displays a color page', () => {
    const { queryByText } = render(
        <MemoryRouter initialEntries={['/colors/red']} >
            <Routes />
        </MemoryRouter>);
    expect(queryByText('This is Red!')).toBeInTheDocument();
})

test('renders home on a bad route', () => {
    const { queryByText } = render(
        <MemoryRouter initialEntries={["/bad"]}>
          <Routes />
        </MemoryRouter>);
    expect(queryByText('Select a Color')).toBeInTheDocument();
})

test('renders home on a color that doesnt exist', () => {
    const { queryByText } = render(
        <MemoryRouter initialEntries={["/colors/bluebeerry"]}>
          <Routes />
        </MemoryRouter>);
    expect(queryByText('Select a Color')).toBeInTheDocument();
})

test('can add a color', () => {
    const { queryByText, queryByLabelText } = render(
        <MemoryRouter initialEntries={["/colors/new"]}>
          <Routes />
        </MemoryRouter>);
    const name = queryByLabelText('Choose a name for your color');
    const hexCode = queryByLabelText('Choose color')
    fireEvent.change(name, {target: {value: 'Purple'}})
    fireEvent.change(hexCode, {target: {value: '#800080'}})
    fireEvent.click(queryByText('Select'));
    
    expect(queryByText('Purple')).toBeInTheDocument();
})