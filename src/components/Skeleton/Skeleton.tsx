import React from 'react';
import * as S from './Skeleton.styles';

function Skeleton() {
  return (
    <>
      {[...Array(10).keys()].map((key) => (
        <S.SkeletonWrapper key={key} data-testid="loading-component">
          <S.Name />
          <S.JobTitle />
          <S.EmailAdress />
        </S.SkeletonWrapper>
      ))}
    </>
  );
}
export default Skeleton;
