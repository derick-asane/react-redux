// Action creator for fetching data from API 1
   const fetchDataFromAPI1 = () => {
    return async (dispatch) => {
      try {
        dispatch({ type: 'FETCH_DATA_FROM_API1_REQUEST' });
  
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        const data = await response.json();
  
        dispatch({
          type: 'FETCH_DATA_FROM_API1_SUCCESS',
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: 'FETCH_DATA_FROM_API1_FAILURE',
          payload: error.message,
        });
      }
    };
  };

  export default fetchDataFromAPI1