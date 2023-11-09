const initialState = {
    dataFromAPI2: null,
    loading2: false,
    error2: null,
  };
  
  const reducer2 = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_DATA_FROM_API2_REQUEST':
        return {
          ...state,
          loading2: true,
          error2: null,
        };
      case 'FETCH_DATA_FROM_API2_SUCCESS':
        return {
          ...state,
          dataFromAPI2: action.payload,
          loading2: false,
          error2: null,
        };
      case 'FETCH_DATA_FROM_API2_FAILURE':
        return {
          ...state,
          loading2: false,
          error2: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer2;