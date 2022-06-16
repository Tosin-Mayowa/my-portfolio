import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';


test('input should be initially empty', () => {
  render(<App />);
  const nameField = screen.getLabelText("Name");
  const emailField = screen.getLabelText("Email");
  const phoneField = screen.getLabelText("PhoneNo");
  expect(nameField.value).toBe('');
  expect(emailField.value).toBe('');
  expect(phoneField.value).toBe('');
});

/* test("typed into the input", ()=>{
  render(<App/>)
  const nameField = screen.getLabelText("Name");
  const emailField = screen.getLabelText("Email");
  const phoneField = screen.getLabelText("PhoneNo");
  userEvent.type(nameField);
  userEvent.type(emailField);
  userEvent.type(phoneField);
  expect(nameField.value).toBeTruthy();
  expect(emailField.value).toBeTruthy();
  expect(phoneField.value).toBeTruthy();
})

test('chat',()=>{
  render(<App/>);
  const btnInp = screen.getByRole('button', {
    name: /Chatlive/
  });
  const chatInp = screen.queryByLabelText("How can we help?");
  expect(chatInp).not.toBeInTheDocument();
  userEvent.click(btnInp);
  const chatInpA = screen.getByLabelText("How can we help?");
  userEvent.type(chatInpA);
  expect(chatInpA).toBeTruthy();
}) */