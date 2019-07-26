import React, {memo, lazy} from 'react';

const LeftColumnContainer = lazy(() => import("../../containers/homePage/leftColumn/LeftColumnContainer"));
const ArticlesContainer = lazy(() => import("../../containers/homePage/rightColumn/ArticlesContainer"));
const AuthorsContainer = lazy(() => import("../../containers/homePage/rightColumn/AuthorsContainer"));
const CommentsContainer = lazy(() => import("../../containers/homePage/rightColumn/CommentsContainer"));

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
