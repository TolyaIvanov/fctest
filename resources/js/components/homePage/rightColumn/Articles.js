import React, {memo} from 'react';

const Articles = memo((props) => {
    return (
        <div className={'articles'}>
            <p className={'section-title'}>Топ статьи</p>
            {props.children}
        </div>
    );
});

export default Articles;
