import React from 'react';

import PropTypes from 'prop-types';

import { StatsItem, AccentItem } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul>
      <StatsItem>
        Good: <AccentItem>{good}</AccentItem>
      </StatsItem>
      <StatsItem>
        Neutral:<AccentItem> {neutral}</AccentItem>
      </StatsItem>
      <StatsItem>
        Bad: <AccentItem>{bad}</AccentItem>
      </StatsItem>
      <StatsItem>
        Total: <AccentItem>{total}</AccentItem>
      </StatsItem>
      <StatsItem>
        Positive feedback: <AccentItem>{positivePercentage}%</AccentItem>
      </StatsItem>
    </ul>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
