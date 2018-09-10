'use strict';

/*####################
# JABIL CO.
# TRACKCHAINER
# AUTHOR:MELVYN TIE
###################*/

// Combine every state into one root state
import { combineReducers } from 'redux';

import subReducer from './subReducer';

const rootReducer = combineReducers({ subReducer })
export default rootReducer;
