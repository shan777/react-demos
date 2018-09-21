import React from 'react';

import { Link, Route } from 'react-router-dom';

import ArticleOne from './articleone';
import ArticleTwo from './articletwo';
import ArticleThree from './articlethree';

export default props => {
    // console.log(props.match.path);

    const {path} = props.match.path;
    return(
        <div>
            <h1>Here are some Articles</h1>
            <ul>
                <li>
                    {/* <Link to="/articles/one">Article one</Link> */}
                    <Link to={`${path}/1`}>Article one</Link>

                </li>
                
                <li>
                    <Link to={`${path}/2`}>Article two</Link>
                </li>
                <li>
                    <Link to={`${path}/3`}>Article three</Link>
                </li>
            </ul>
            
            <Route path="/articles/one" component={ArticleOne}/> 
            <Route path="/articles/two" component={ArticleTwo}/>
            <Route path="/articles/three" component={ArticleThree}/> 
        </div>
    );
}