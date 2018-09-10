'use strict';

/*####################
# JABIL CO.
# TRACKCHAINER
# AUTHOR:MELVYN TIE
###################*/

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { withRouter } from 'react-router-dom';

const app = ({ children }) => {
  return (
    <div>
      <FormattedMessage id='Laptop' />
      <div>
        {children}
      </div>
    </div>
  );
};

app.propTypes = {
  children: PropTypes.element.isRequired
};

export default withRouter(app);
