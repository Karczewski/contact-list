import React, { ReactElement } from 'react';
import * as S from './DefaultLayout.styles';

function DefaultLayout({ children }: { children: ReactElement }) {
  return (
    <>
      <S.Navbar>
        <S.Container>Logo</S.Container>
      </S.Navbar>
      <S.Container>{children}</S.Container>
    </>
  );
}

export default DefaultLayout;
