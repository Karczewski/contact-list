import styled from 'styled-components';

export const PersonWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
  box-shadow: 0px 1px 2px 0px rgb(0, 0, 0, 0.15);
  transition: background-color 0.1s cubic-bezier(0.3, 0, 0.5, 1);
  background: #fff;
  cursor: pointer;
  border: 3px solid transparent;
  word-break: break-word;

  &:hover {
    background-color: #F3F4F6;
  }
  &:active {
    background-color: #EDEFF2;
    box-shadow: rgba(225, 228, 232, 0.2) 0 1px 0 inset;
    transition: none 0s;
  }

  ${(props: {isActive: boolean}) => {
    if (props.isActive) {
      return `
        border: 3px solid pink;
      `;
    }
    return '';
  }}
`;

export const Name = styled.div`
  padding: 0 0 10px;
  color: #333333;
  font-size: 1.2rem;
  font-weight: 700;
`;
export const JobTitle = styled.div`
  padding: 0 0 10px;
  color: #e74c3c;
  font-size: 16px;
  font-weight: 400;
`;
export const EmailAdress = styled.div`
  color: #666666;
  font-size: 14px;
  line-height: 1.8em;
`;
