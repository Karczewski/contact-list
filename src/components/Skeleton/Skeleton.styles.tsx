import styled from 'styled-components';
import { COLOR } from '../../styles/global-variables';

export const SkeletonWrapper = styled.div`
    background-color: ${COLOR.light};
    padding: 1rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    box-sizing: border-box;
`;
export const Name = styled.div`
    height: 23px;
    width: 70%;
    margin-bottom: 10px;
    border-radius: 25px;
    background-color: ${COLOR.grayLight};
`;
export const JobTitle = styled.div`
    height: 18px;
    width: 50%;
    margin-bottom: 16px;
    border-radius: 25px;
    background-color: ${COLOR.grayLight};
`;

export const EmailAdress = styled.div`
  height: 16px;
  width: 80%;
  margin-bottom: 6px;
  border-radius: 25px;
  background-color: ${COLOR.grayLight};
`;
