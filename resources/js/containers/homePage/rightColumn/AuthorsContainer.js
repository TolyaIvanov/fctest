import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import Authors from "../../../components/homePage/rightColumn/Authors";

import {
    requestTopAuthors
} from "../../../actions/homePage/dataRequest";

class AuthorsContainer extends Component {
    componentDidMount() {
        this.props.getAuthors();
    }

    render() {
        return (
            <Authors

            >
                {this.renderAuthorsList(this.props.top)}
            </Authors>
        );
    }

    renderAuthorsList = (authors) => {
        return authors.map(author => (
                <Link
                    key={author.id}
                    className={'author'}
                    to={`/author/${author.id}`}
                >
                    {author.name} ({author.articles_count} статей)
                </Link>
            )
        );
    };
}

const mapStateToProps = (state) => ({
    top: state.homePageData.topAuthors,
});

const mapDispatchToProps = (dispatch) => ({
    getAuthors: () => dispatch(requestTopAuthors())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthorsContainer);
