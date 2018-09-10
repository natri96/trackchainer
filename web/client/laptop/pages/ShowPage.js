'use strict';

/*####################
# JABIL CO.
# TRACKCHAINER
# AUTHOR:MELVYN TIE
###################*/

import React, { Props } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import * as Api from '../middleware/api';

class ShowPage extends React.Component {

  static get propTypes() {
    return {};
  }

  constructor(props) {
    super(props);

    this.state = {
      laptops : [],
    };
  }

  /*componentDidMount() {

    fetch("/v1/api/show")
      .then(result => result.json())
      .then(data => {
          let laptops = data.result.map((laptop) => {
            return(
              <div key={laptop.id}>
                <ul>
                  <li>{laptop.sn}</li>
                  <li>{laptop.employer}</li>
                </ul>
                </div>
            )
          }) 
          this.setState({ laptops: laptops});
        })
      }*/

  render() {
    return ( 
        <h1>Hello</h1>
      );
  }
}

export default ShowPage;
