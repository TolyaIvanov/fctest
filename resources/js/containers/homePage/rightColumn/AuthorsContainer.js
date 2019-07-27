import React, {Component} from 'react';
import {connect} from 'react-redux';
import Authors from "../../../components/homePage/rightColumn/Authors";

import {
    requestTopAuthors
} from "../../../actions/homePahe/dataRequest";

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
                <div
                    key={author.id}
                    className={'preview'}
                >
                    <p className={'title'}>{author.name}</p>
                </div>
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
