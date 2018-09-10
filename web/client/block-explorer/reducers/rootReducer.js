'use strict';

/*####################
# JABIL CO.
# TRACKCHAINER
# AUTHOR:MELVYN TIE
###################*/

// Combine every state into one root state
import { combineReducers } from 'redux';

import trackchainer from './trackchainerReducer';

const rootReducer = combineReducers({ trackchainer })
export default rootReducer;
