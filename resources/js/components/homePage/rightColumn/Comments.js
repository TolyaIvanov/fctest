import React, {memo} from 'react';

const Comments = memo((props) => {
    return (
        <div className={'comments'}>
            <p className={'section-title'}>Последние комментарии</p>
            {props.children}
        </div>
    );
});

export default Comments;
