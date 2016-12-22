/*
 *
 * Order
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import OrderBody from './body';
export class Order extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="Order"
          meta={[
            { name: 'description', content: 'Description of Order' },
          ]}
        />
      <Header />
        <OrderBody />
      <Footer />
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Order);
