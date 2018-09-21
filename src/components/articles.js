import React from 'react';
import ArticleOne from './articleone';
import ArticleTwo from './articletwo';
import ArticleThree from './articlethree';

export default (props) => {
    return(
 
        <div>
            <h1>Articles</h1>
            <ul>
                <li>
                    <Link to="/articles/one">Article one</Link>
                </li>
                <li>
                    <Link to="/articles/two">Article two</Link>
                </li>
                <li>
                    <Link to="/articles/three">Article three</Link>
                </li>
            </ul>
            
            <Route path="/articles/one" component={ArticleOne}/> 
            <Route path="/articles/two" component={ArticleTwo}/>
            <Route path="/articles/three" component={ArticleThree}/> 
        </div>

    );
}