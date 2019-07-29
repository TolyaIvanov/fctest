import React, {memo} from 'react';

const Authors = memo((props) => {
    return (
        <div className={'authors'}>
            <p className={'section-title'}>Топ авторы</p>
            {props.children}
        </div>
    );
});

export default Authors;
