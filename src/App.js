import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { handleInitialData } from './actions/share';
import Home from './components/Home';
import Nav from './components/Nav';

import CreateEditPost from './components/CreateEditPost';
import CategoryDetails from './components/CategoryDetails';
import PostDetails from './components/PostDetails';

class App extends Component {

  componentDidMount() {

    const { loadInitialData } = this.props;

    loadInitialData()

  }

  render() {
    const { authedUser } = this.props;
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            <Nav/>
            {
              authedUser === null
                ? null
                : <div>
                    <Route path='/' exact component={Home} />
                    <Route path='/posts/' exact component={CreateEditPost} />
                    <Route path='/posts/:id' render={(props) => <PostDetails id={props.match.params.id}/>} />
                    <Route path='/category/:name' render={(props) => <CategoryDetails name={props.match.params.name}/>} />
                  </div>
            }
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({ authedUser, categories, posts }) {
  return {
    authedUser,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadInitialData: () => dispatch(handleInitialData()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
