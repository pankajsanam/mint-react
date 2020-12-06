import React from 'react';
import PropTypes from 'prop-types';
import { useButtonText } from '../../../hooks';

/**
 * Submit button with submitting state handling
 *
 * @param state
 * @param submitting
 * @param text
 * @returns {JSX.Element}
 * @constructor
 */
const SubmitButton = ({ state, submitting, text }) => {
  const { isValid, dirty } = state;
  const buttonText = useButtonText(submitting, text);

  return (
    <button
      type="submit"
      disabled={!(dirty && isValid) || submitting}
      className={`btn-submit ${!(dirty && isValid) ? 'btn-disabled' : ''}`}
    >
      {buttonText}
    </button>
  );
};

SubmitButton.propTypes = {
  state: PropTypes.object.isRequired,
  submitting: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default SubmitButton;
