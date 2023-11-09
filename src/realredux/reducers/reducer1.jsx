const initialState = {
    dataFromAPI1: null,
    loading1: false,
    error1: null,
  };
  
  const reducer1 = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_DATA_FROM_API1_REQUEST':
        return {
          ...state,
          loading1: true,
          error1: null,
        };
      case 'FETCH_DATA_FROM_API1_SUCCESS':
        return {
          ...state,
          dataFromAPI1: action.payload,
          loading1: false,
          error1: null,
        };
      case 'FETCH_DATA_FROM_API1_FAILURE':
        return {
          ...state,
          loading1: false,
          error1: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer1;