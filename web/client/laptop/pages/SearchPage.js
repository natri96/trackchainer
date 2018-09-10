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

class TrackchainerComponent extends React.Component {

  static get propTypes() {
    return {
      laptop: PropTypes.object.isRequired,
      onProcessedStatus: PropTypes.func.isRequired
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      status: ''
    };

    this.viewAllLaptop = this.viewAllLaptop.bind(this);
    this.viewLaptop= this.viewLaptop.bind(this);
    this.createLaptop = this.createLaptop.bind(this);
    this.setLaptopStatus = this.setLaptopStatus.bind(this);
  }

  setLaptopStatus(e) {
    const { value } = e.target;
    this.setState({ status: value.toUpperCase() });
  }

  viewAllLaptop() {
    this.processView('ALL');
  }

  viewLaptop(sn) {
    this.processView(sn);
  }

  processView(sn) {
    if(sn == 'ALL') {
      return Api.getAllLaptops();
    }
    else {
      return Api.getLaptop(sn);
    }
  }

  render() {
    const { laptop } = this.props;
    const { status } = this.state;
    return (
      <div className='ibm-col-6-2 ibm-col-medium-2-1 ibm-col-small-1-1'>
        <div className='ibm-card ibm-border-gray-50'>
          <div className='ibm-card__content'>
            <h4 className='ibm-bold ibm-h4'>
              <FormattedMessage id='Trackchainer' />
            </h4>
            <div className='ibm-column-form' style={{ wordWrap: 'break-word' }}>
              <p>
                <label><FormattedMessage id='Date' />:</label>
                <span>{laptop.date}</span>
              </p>
              <p>
              date, employer, hostname, manager, pn, comment, costcenter, sn, status
                <label><FormattedMessage id='Employer' />:</label>
                <span>{laptop.employer}</span>
              </p>
              <p>
                <label><FormattedMessage id='Hostname' />:</label>
                <span>{laptop.hostname}</span>
              </p>
              <p>
                <label><FormattedMessage id='Manager' />:</label>
                <span>{laptop.manager}</span>
              </p>
              <p>
                <label><FormattedMessage id='PN' />:</label>
                <span>{laptop.pn}</span>
              </p>
              <p>
                <label><FormattedMessage id='comment' />:</label>
                <span>{laptop.comment}</span>
              </p>
              <p>
                <label><FormattedMessage id='CostCenter' />:</label>
                <span>{laptop.costcenter}</span>
              </p>
              <p>
                <label><FormattedMessage id='Status' />:</label>
                <span>
                  <input type='text'
                    value={status} onChange={this.setFileReference} />
                </span>
              </p>
              <div>
                <button type='button'
                  className='ibm-btn-sec ibm-btn-small ibm-btn-blue-50'
                  style={{ marginLeft: '15px', marginRight: '15px' }}
                  onClick={this.createLaptop}>
                  <FormattedMessage id='Confirm' />
                </button>
                <button type='button'
                  className='ibm-btn-sec ibm-btn-small ibm-btn-red-50'
                  style={{ marginLeft: '15px', marginRight: '15px' }}
                  onClick={this.viewAllLaptop}>
                  <FormattedMessage id='Reject' />
                </button>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default TrackchainerComponent;
