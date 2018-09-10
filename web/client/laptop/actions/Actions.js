'use strict';

/*####################
# JABIL CO.
# TRACKCHAINER
# AUTHOR:MELVYN TIE
###################*/

import * as Api from '../middleware/api';
import * as Type from './ActionTypes';

export function showLaptops() {
  return async dispatch => {
    let laptops;
    try {
      laptops = await Api.showlLaptops();
    } catch (e) {
      console.log(e);
    }
    if (Array.isArray(laptops)) {
      dispatch(loadAllLaptopsSuccess(laptops));
    }
  };
}

function loadAllLaptopsSuccess(laptop) {
  return {
    type: Type.LOAD_SUCCESS,
    data: laptop
  };
}

export function searchLaptop(id) {
  return async dispatch => {
    let laptops;
    try {
      laptops = await Api.searchLaptop(id);
    } catch (e) {
      console.log(e);
    }
    if (Array.isArray(laptops)) {
      dispatch(loadLaptopSuccess(laptops));
    }
  };
}

function loadLaptopSuccess(laptop) {
  return {
    type: Type.LOAD_SUCCESS,
    data: laptop
  };
}

export function createLaptop(id, sn, employer) {
  return async dispatch => {
    try {
      await Api.createLaptop(id, sn, employer);
      dispatch(createLaptopSuccess(sn));
    } catch (e) {
      console.log(e);
    }
  };
}

function createLaptopSuccess(laptop) {
  return {
    type: Type.CREATE_SUCCESS,
    data: laptop
  };
}

export function editLaptop(id, sn, employer) {
  return async dispatch => {
    try {
      await Api.editLaptop(id, sn, employer);
      dispatch(editLaptopSuccess(sn));
    } catch (e) {
      console.log(e);
    }
  };
}

function editLaptopSuccess(laptop) {
  return {
    type: Type.EDIT_SUCCESS,
    data: laptop
  };
}

export function removeLaptop(id) {
  return async dispatch => {
    try {
      await Api.removeLaptop(id);
      dispatch(removeLaptopSuccess(id));
    } catch (e) {
      console.log(e);
    }
  };
}

function removeLaptopSuccess(laptop) {
  return {
    type: Type.REMOVE_SUCCESS,
    data: laptop
  };
}
