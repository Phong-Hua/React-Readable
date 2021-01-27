import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {gray} from '../utils/style'

function CategoryOverview(props) {
    
    const { name, numberOfPost, logo, history } = props;

    const goToCategoryDetails = (e) => {
        e.preventDefault();
        history.push(`/category/${name}`);
    }

    return (
        <div style={{ textAlign: 'center', margin: '10px' }} 
            >
            <img src={logo}
                width={200}
                height={200}
                alt={`Logo of ${name}`}
                onClick={goToCategoryDetails}
            />
            <h2>{name}</h2>
            <p style={{ color: gray }}>
                {numberOfPost <= 1 ? `${numberOfPost} post` : `${numberOfPost} posts`}
            </p>
        </div>

    )
}

function mapStateToProps({ posts }, { category }) {
    const name = category.name;
    const numberOfPost = posts.filter(p => p.category === name).length;
    return {
        name,
        logo: category.logo,
        numberOfPost
    }
}

export default withRouter(connect(mapStateToProps)(CategoryOverview));