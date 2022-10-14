import React from 'react';

import PropTypes from 'prop-types';

import { Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({
  onLeaveFeedback1,
  onLeaveFeedback2,
  onLeaveFeedback3,
}) => {
  return (
    <>
      <Button type="button" onClick={onLeaveFeedback1}>
        Good
      </Button>
      <Button type="button" onClick={onLeaveFeedback2}>
        Neutral
      </Button>
      <Button type="button" onClick={onLeaveFeedback3}>
        Bad
      </Button>
    </>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback1: PropTypes.func.isRequired,
  onLeaveFeedback2: PropTypes.func.isRequired,
  onLeaveFeedback3: PropTypes.func.isRequired,
};
