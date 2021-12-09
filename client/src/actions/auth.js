import * as api from '../api/index.js';
import { authenticate } from '../state/authSlice/authSlice';

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch(authenticate(data));

    router.push('/');
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch(authenticate(data));

    router.push('/');
  } catch (error) {
    console.log(error);
  }
};