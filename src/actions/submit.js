import axiosWithAuth from '../axiosWithAuth';

export const SUBMIT_START = 'SUBMIT_START';
export const SUBMIT_SUCCESS = 'SUBMIT_SUCCESS';
export const SUBMIT_FAIL = 'SUBMIT_FAIL';

export const getData = () => dispatch => {
  dispatch({ type: SUBMIT_START });

  // token that is on payload is used and placed in the header of 'axiosWithAuth'
  // -- this is what gives us access to data
  return axiosWithAuth()
    .get('https://labstech2rentstaging.herokuapp.com/api/users/userIDs')
    .then(res => {
      console.log(res);
      // if successful then set the data to the payload
      dispatch({ type: SUBMIT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: SUBMIT_FAIL, payload: err });
    });
};
