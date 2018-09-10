'use strict';

/*####################
# JABIL CO.
# TRACKCHAINER
# AUTHOR:MELVYN TIE
###################*/

import * as initialState from './initialState';
import * as Type from '../actions/ActionTypes';

// Export the state of the laptop
export default function subReducer(state = initialState.laptop, action) {
  switch (action.type) {
    case Type.CREATE_SUCCESS:
      return Object.assign({}, state, { ActionType: action.type} );
    case Type.EDIT_SUCCESS:
      return Object.assign({}, state, { ActionType: action.type} );
    case Type.LOAD_SUCCESS:
      return Object.assign({}, state, { ActionType: action.type} );
    case Type.REMOVE_SUCCESS:
      return Object.assign({}, state, { ActionType: action.type} );
    default:
      return state;
  }
}
