import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

import { borderRadius, border, buttonHeight, blue, white, gray, } from '../utils/style'

import SubmitButton from './SubmitButton';

class NewComment extends Component {
    render() {
        return(
            <div>   
                <textarea/>
                <SubmitButton />
            </div>
        )
    }
}

export default NewComment;