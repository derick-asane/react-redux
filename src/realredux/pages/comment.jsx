import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  fetchDataFromAPI1  from '../actions/action1'
import fetchDataFromAPI2 from '../actions/action2'

const DataComponent = () => {
  const dataFromAPI1 = useSelector((state) => state.reducer1.dataFromAPI1);
  const loading1 = useSelector((state) => state.reducer1.loading1);
  const error1 = useSelector((state) => state.reducer1.error1);
  
  const dataFromAPI2 = useSelector((state) => state.reducer2.dataFromAPI2);
  const loading2 = useSelector((state) => state.reducer2.loading2);
  const error2 = useSelector((state) => state.reducer2.error2);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataFromAPI1());
    dispatch(fetchDataFromAPI2());
  }, [dispatch]);

  if (loading1 || loading2) {
    return <p>Loading...</p>;
  }

  if (error1 || error2) {
    return
    <p>Error: {error1 || error2}</p>;
  }

  if (dataFromAPI1 && dataFromAPI2) {
    return (
      <div>
        <h2>Data from API 1:</h2>
        <ul>
          {dataFromAPI1.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
        <h2>Data from API 2:</h2>
        <ul>
          {dataFromAPI2.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  }

  return null;
};

export default DataComponent;