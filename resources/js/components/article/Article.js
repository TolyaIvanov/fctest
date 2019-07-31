import React from 'react';
import {Link} from "react-router-dom";

class Article extends React.Component {
    render() {
        return (
            <div className={'article'}>
                <h2 className={'section-title'}>Статья - {this.props.title}</h2>
                <p className={'author'}>Автор - <Link
                    to={`/author/${this.props.author.id}`}>{this.props.author.name}</Link></p>
                <div className="content">
                    <p>текст статьи: </p>
                    <p className={'text'}>
                        {this.props.body}
                    </p>
                    <div className="comments">
                        <p>Комментарии:</p>
                        {this.props.children[0]}
                    </div>
                    <div className="pages">
                        {this.props.children[1]}
                    </div>
                    <div className="add-comment">
                        <input
                            type="text"
                            className={'comment-input'}
                            ref={input => this.inputText = input}
                        />
                        <input
                            type="button"
                            className={'send-comment'}
                            value={'Добавить комментарий'}
                            onClick={() => {
                                if (this.inputText.value.length > 0) {
                                    this.props.addComment(this.inputText.value, this.props.articleId);
                                    this.inputText.value = '';
                                } else
                                    alert('vvedite input')
                            }}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Article;
