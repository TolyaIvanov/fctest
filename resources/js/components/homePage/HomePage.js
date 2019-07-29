import React, {memo, lazy} from 'react';

import LeftColumnContainer from "../../containers/homePage/leftColumn/LeftColumnContainer";
import ArticlesContainer from "../../containers/homePage/rightColumn/ArticlesContainer";
import AuthorsContainer from "../../containers/homePage/rightColumn/AuthorsContainer";
import CommentsContainer from "../../containers/homePage/rightColumn/CommentsContainer";

const HomePage = memo(() => {
    return (
        <div className={'home-page'}>
            <div className="column">
                <LeftColumnContainer/>
            </div>
            <div className="column">
                <ArticlesContainer/>
                <AuthorsContainer/>
                <CommentsContainer/>
            </div>
        </div>
    );
});

export default HomePage;
