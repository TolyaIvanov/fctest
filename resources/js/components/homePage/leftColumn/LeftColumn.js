import React, {memo} from 'react';

const LeftColumn = memo((props) => {
    return (
        <div className={'left-column'}>
            <p className={'ps-text'}>Если честно, со слов: "Слева Заголовок статьи, под ним имя автора (ссылка), под ним
                кусок текста (ссылка на статью), и тд (блог)"<br/> вообще не понятно что находится в левой колонке, но
                из слова блог, я предположу, что надо грузить все последние посты, так что вот:</p>
            <div className="last-articles">
                {props.children}
            </div>
            <div className="button-wrapper">
                <input
                    onClick={event => {
                        let param = props.load_param + 1;
                        props.load(param)
                    }}
                    className={'load-button'}
                    type="button"
                    value={'Загрузить...'}
                />
            </div>
        </div>
    );
});

export default LeftColumn;
