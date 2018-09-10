'use strict';

/*####################
# JABIL CO.
# TRACKCHAINER
# AUTHOR:MELVYN TIE
###################*/

import React, { Props } from 'react';
import PropTypes from 'prop-types';
import * as Api from '../middleware/api';

class HomePage extends React.Component {

  static get propTypes() {
    return {};
  }

  constructor(props) {
    super(props);

    this.state = {};

  }


  render() {
    const { laptop } = this.props;
    const { status } = this.state;
    return (
        <div>	// Overview
        #content-wrapper
            .container-fluid
                // Breadcrumbs
                ol.breadcrumb
                    li.breadcrumb-item
                        a(href='/') Dashboard
                    li.breadcrumb-item.active Overview</div>
    );
  }
}

export default TrackchainerComponent;
