import React from 'react';

const Author = (props) => {
    return (
        <div className={'author-page'}>
            <p className={'name'}>имя: {props.name} ({props.age} years)</p>
            <div className="articles">
                {props.children[0]}
            </div>
            <div className="pages">
                {props.children[1]}
            </div>
        </div>
    );
};

export default Author;
