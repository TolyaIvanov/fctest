import React, {Component} from 'react';
import {connect} from 'react-redux';
import LeftColumn from "../../../components/homePage/leftColumn/LeftColumn";
import {Link} from "react-router-dom";

import {
    loadLastPosts
} from "../../../actions/homePage/dataRequest";

class LeftColumnContainer extends Component {
    // componentDidMount() {
    //     this.props.load(this.props.load_param)
    // }

    render() {
        return (
            <LeftColumn
                load={this.props.load}
                load_param={this.props.load_param}
            >
                {this.renderPostsList(this.props.posts.reverse())}
            </LeftColumn>
        );
    }

    renderPostsList = (posts) => {
        return posts.map(post => (
            <div className={'post'} key={post.id}>
                <p className={'post-title'}>название статьи - <Link to={`/article/${post.id}`}>{post.title}</Link></p>
                <p className={'post-author'}>автор - <Link to={`/author/${post.author.id}`}>{post.author.name}</Link></p>
                <p className={'post-text'}>текст - <Link to={`/article/${post.id}`}>{post.body.split(' ').slice(0, 10).join(' ')}</Link></p>
            </div>
        ))
    }
}

const mapStateToProps = (state) => ({
    posts: state.homePageData.posts,
    load_param: state.homePageData.load_param
});

const mapDispatchToProps = (dispatch) => ({
    load: (load_param) => dispatch(loadLastPosts(load_param))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LeftColumnContainer);
