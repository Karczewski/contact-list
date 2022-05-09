import React, { useEffect } from 'react';
import { Person } from '../components/PersonInfo/PersonInfo';
import apiData from '../api';

type IState = {
  status: 'idle' | 'pending' | 'resolved' | 'rejected';
  data: Person[] | null;
  error: any;
};

export const useFetchPeople = () => {
  const [state, setState] = React.useState<IState>({
    status: 'idle',
    data: null,
    error: null,
  });

  const fetchData = () => {
    setState({ ...state, status: 'pending' });
    apiData()
      .then((people) => {
        setState({
          ...state,
          status: 'resolved',
          data: [...(state.data ? state.data : []), ...people],
        });
      })
      .catch((error) => {
        setState({ ...state, status: 'rejected', error: error.message });
      });
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { state, refetch: fetchData };
};
