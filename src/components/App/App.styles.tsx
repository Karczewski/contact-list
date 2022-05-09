import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 2rem;
`;

export const SelectedItems = styled.div`
  color: #333333;
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

export const ActionContainer = styled.div`
  text-align: center;
`;

export const ErrorMessage = styled.span`
  margin-right: 1rem;
`;

export const Button = styled.button`
  background-color: #fafbfc;
  border: 1px solid rgba(27, 31, 35, 0.15);
  box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0,
    rgba(255, 255, 255, 0.25) 0 1px 0 inset;
  color: #24292e;
  display: inline-block;
  padding: 6px 16px;
  position: relative;
  transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  cursor: pointer;

  &:hover {
    background-color: #f3f4f6;
    text-decoration: none;
    transition-duration: 0.1s;
  }

  &:active {
    background-color: #edeff2;
    box-shadow: rgba(225, 228, 232, 0.2) 0 1px 0 inset;
    transition: none 0s;
  }

  &:focus {
    outline: 1px transparent;
  }
`;
