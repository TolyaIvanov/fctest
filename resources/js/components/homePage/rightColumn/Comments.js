import React, {memo} from 'react';

const Comments = memo((props) => {
    return (
        <div className={'comments'}>
            <p className={'section-title'}>Комментарии</p>
            {props.children}
        </div>
    );
});

export default Comments;
