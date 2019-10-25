import React, { Fragment } from 'react';

import ErrorMessage from './ErrorMessage';
import LoadingMessage from './LoadingMessage';
import InfoMessage from './InfoMessage';

const Message = ({ apiError, isLoading, showMessage }) => {
  return (
    <Fragment>
      {apiError ? (
        <ErrorMessage />
      ) : isLoading ? (
        <LoadingMessage />
      ) : showMessage ? (
        <InfoMessage />
      ) : null}
    </Fragment>
  );
};

export default Message;
