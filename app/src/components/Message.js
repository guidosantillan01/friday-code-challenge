import React from 'react';

import ErrorMessage from './ErrorMessage';
import LoadingMessage from './LoadingMessage';
import InfoMessage from './InfoMessage';

const Message = ({ apiError, isLoading, showMessage }) => {
  return (
    <div>
      {apiError ? (
        <ErrorMessage />
      ) : isLoading ? (
        <LoadingMessage />
      ) : showMessage ? (
        <InfoMessage />
      ) : null}
    </div>
  );
};

export default Message;
