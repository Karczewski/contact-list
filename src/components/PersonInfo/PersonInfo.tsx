import React from 'react';
import * as S from './PersonInfo.styles';

export type Person = {
  firstNameLastName: string;
  jobTitle: string;
  emailAddress: string;
  id: string;
}

type Props = {
  data: Person;
  onTileClick: () => void;
  isActive: boolean
};

function PersonInfo({ data, onTileClick, isActive }: Props) {
  return (
    <S.PersonWrapper onClick={onTileClick} isActive={isActive} data-testid="person-tile">
      <S.Name>{data.firstNameLastName}</S.Name>
      <S.JobTitle>{data.jobTitle}</S.JobTitle>
      <S.EmailAdress>{data.emailAddress}</S.EmailAdress>
    </S.PersonWrapper>
  );
}

export default PersonInfo;
