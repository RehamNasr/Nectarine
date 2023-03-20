

import React, { useState } from 'react';
import Navigation from './Navigation/Navigation'
import { Provider } from 'react-redux';
import Store from './Redux/Store';
function app() {

  return (

    <Provider store={Store}>
      <Navigation />
    </Provider>

  )
}

export default app;