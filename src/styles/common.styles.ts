import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
`;

export const Input = styled.input`
  margin-bottom: 1rem;
  padding: 12px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  transition: all 0.3s ease;
  cursor: text;

  &:hover {
    background-color: #f1f1f1; /* Slight background change on hover */
    border-color: #888;
  }

  &:focus {
    outline: none;
    border-color: #007bff;
    background-color: #fff;
    cursor: text;
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.4);
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #e9ecef;
    border-color: #dcdcdc;
    color: #6c757d;
  }
`;

export const Button = styled.button`
  padding: 12px;
  font-size: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, opacity 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #b0c4de; /* Secondary muted color for disabled state */
    cursor: not-allowed; /* Indicates the button is disabled */
    opacity: 0.6; /* Slightly faded look */
  }
`;

export const Footer = styled.div`
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #555;

  a {
    color: #007bff;
    text-decoration: none;

    &:hover {
      color: #0056b3;
      text-decoration: underline;
    }
  }
`;

export const OTPContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;

  input {
    width: 40px;
    height: 50px;
    font-size: 1.5rem;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;

    &:focus {
      border-color: #007bff;
      box-shadow: 0 0 8px rgba(0, 123, 255, 0.4);
    }
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 16px;
  font-size: 14px;
  text-align: center;
`;

export const GeneralError = styled.div`
  color: red;
  text-align: center;
  margin-bottom: 8px;
`;

export const BackButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1rem;
  color: #007bff;
  cursor: pointer;
  padding: 8px 16px;
  text-align: left;
  display: inline-block;
  margin-bottom: 1rem;
  margin-left: 0; /* Ensure no left margin */
  align-self: flex-start; /* Align to the start of the container */

  &:hover {
    color: #0056b3;
    text-decoration: underline;
  }

  &:focus {
    outline: none;
  }
`;
