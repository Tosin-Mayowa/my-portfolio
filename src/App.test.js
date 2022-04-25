import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import App from './App';

test('input should be initially empty', () => {
  render(<App />);
  const nameField = screen.getByRole("textbox",{name:/Name/});
  expect(nameField.value).toBe('');
});
