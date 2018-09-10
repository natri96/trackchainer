'use strict';

/*####################
# JABIL CO.
# TRACKCHAINER
# AUTHOR:MELVYN TIE
###################*/

import * as initialState from './initialState';
import * as ActionType from '../actions/actionTypes';

// Export the state of the laptop
export default function trackchainerReducer(state = initialState.laptop, action) {
  switch (action.type) {
    case TrackchainerActionType.GET:
      return Object.assign({}, state, { Action: action.type} );
    case TrackchainerActionType.EDIT:
      return Object.assign({}, state, { Action: action.type} );
    case TrackchainerActionType.REMOVE:
      return Object.assign({}, state, { Action: action.type} );
    case TrackchainerActionType.CREATE:
      return Object.assign({}, state, { Action: action.type} );
    default:
      return state;
  }
}
