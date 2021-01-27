import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { borderRadius, buttonHeight, blue, white, } from '../utils/style'

const StyledButton = styled.button`
    background-color: ${blue};
    border-radius: ${borderRadius};
    color: ${white};
    height: ${buttonHeight};
    // margin-top: 20px;
    width: 200px;
`

export default function SubmitButton(props) {
    return (
        <StyledButton onClick={props.submitAction}
            {...props}>
            {props.buttonText !== undefined ? props.buttonText : 'Submit'}
        </StyledButton>
    )
}

StyledButton.propTypes = {
    submitAction: PropTypes.func,
    buttonText: PropTypes.string,
}