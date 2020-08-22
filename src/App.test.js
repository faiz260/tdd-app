import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders hello world', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Hello world/i);
  expect(linkElement).toBeInTheDocument();
});

test('find world in the document', ()=>{
  const renderResponse = render(<App/>);
  const worldText = renderResponse.getByText(/world/i);
  expect(worldText).toBeInTheDocument();
})