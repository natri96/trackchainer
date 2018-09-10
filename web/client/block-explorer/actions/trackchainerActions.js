'use strict';

/*####################
# JABIL CO.
# TRACKCHAINER
# AUTHOR:MELVYN TIE
###################*/

import * as Api from '../middleware/api';

export function getAllLaptops() {
  return async dispatch => {
    let laptops;
    try {
      laptops = await Api.getAllLaptops();
    } catch (e) {
      console.log(e);
    }
    if (Array.isArray(laptops)) {
      dispatch(loadAllLaptopsSuccess(laptops));
    }
  };
}

function loadAllLaptopsSuccess(laptops) {
  return {
    type: 'Get All Laptop',
    laptops
  };
}

export function getLaptop(employer) {
  return async dispatch => {
    let laptops;
    try {
      laptops = await Api.getLaptop(employer);
    } catch (e) {
      console.log(e);
    }
    if (Array.isArray(laptops)) {
      dispatch(loadLaptopSuccess(laptops));
    }
  };
}

function loadLaptopSuccess(laptops) {
  return {
    type: 'Get Laptop',
    laptops
  };
}

export function createLaptop({date, employer, hostname, manager, pn, comment, costcenter, sn, status}) {
  return async dispatch => {
    try {
      await Api.processTheftClaim();
      dispatch(createLaptopSuccess(sn));
    } catch (e) {
      console.log(e);
    }
  };
}

function createLaptopSuccess(sn) {
  return {
    type: 'Create Laptop',
    sn
  };
}

export function changeLaptopStatus({ sn, employer }) {
  return async dispatch => {
    try {
      await Api.changeLaptopStatus({ sn, employer });
      dispatch(processChangeLaptopStatus(sn));
    } catch (e) {
      console.log(e);
    }
  };
}

function processChangeLaptopStatus(sn) {
  return {
    type: 'Change Laptop',
    sn
  };
}
