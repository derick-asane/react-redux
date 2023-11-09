// Action creator for fetching data from API 2
 const fetchDataFromAPI2 = () => {
    return async (dispatch) => {
      try {
        dispatch({ type: 'FETCH_DATA_FROM_API2_REQUEST' });
  
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        const data = await response.json();
  
        dispatch({
          type: 'FETCH_DATA_FROM_API2_SUCCESS',
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: 'FETCH_DATA_FROM_API2_FAILURE',
          payload: error.message,
        });
      }
    };
  };

  export default fetchDataFromAPI2