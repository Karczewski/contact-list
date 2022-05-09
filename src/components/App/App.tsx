import React, { useState } from 'react';
import * as S from './App.styles';
import PersonInfo from '../PersonInfo/PersonInfo';
import { useFetchPeople } from '../../hooks/useFetchPeople';
import Skeleton from '../Skeleton/Skeleton';

type SelectedPersons = {
  [id: string]: boolean;
};
const isPersonSelected = (selectedIds: SelectedPersons, personId: string) =>
  selectedIds[personId];

function App() {
  const [selectedIds, setSelectedIds] = useState<SelectedPersons>({});
  const { state, refetch } = useFetchPeople();

  const toggleSelected = () => {
    if (state.data && Object.keys(selectedIds).length === state.data.length) {
      setSelectedIds({});
    } else if (state.data) {
      setSelectedIds(
        state.data?.reduce((acc, cur) => ({ ...acc, [cur.id]: true }), {})
      );
    }
  };

  const handleTileClick = (personId: string) => () => {
    if (isPersonSelected(selectedIds, personId)) {
      const selectedIdsCopy = { ...selectedIds };
      delete selectedIdsCopy[personId];
      setSelectedIds(selectedIdsCopy);
    } else {
      setSelectedIds({ ...selectedIds, [personId]: true });
    }
  };

  return (
    <S.Wrapper>
      <S.SelectedItems>
        Selected contacts:
        {Object.keys(selectedIds).length}
      </S.SelectedItems>
      <S.Button onClick={toggleSelected} type="button">
        {state.data && Object.keys(selectedIds).length === state.data.length
          ? 'Uncheck all'
          : 'Check all'}
      </S.Button>
      <S.List>
        {state?.data?.map((personInfo) => (
          <PersonInfo
            key={personInfo.id}
            data={personInfo}
            onTileClick={handleTileClick(personInfo.id)}
            isActive={isPersonSelected(selectedIds, personInfo.id)}
          />
        ))}
        {state.status === 'pending' && <Skeleton />}
      </S.List>
      <S.ActionContainer>
        {state.status === 'rejected' && (
          <>
            <S.ErrorMessage>{state.error}</S.ErrorMessage>
            <S.Button onClick={refetch} type="button">
              Try again
            </S.Button>
          </>
        )}
        {state.status === 'resolved' && (
          <S.Button onClick={refetch} type="button">
            More
          </S.Button>
        )}
      </S.ActionContainer>
    </S.Wrapper>
  );
}

export default App;
