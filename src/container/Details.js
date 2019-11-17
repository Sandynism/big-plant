import React from 'react';
import { Link } from 'react-router-dom';

class Details extends React.Component {
  state = {
    flowerData: {
      comments: []
    },
    newComment: ''
  };

  componentDidMount() {
    const pageId = this.props.match.params.id;
    const detailData = this.props.data.filter(data => {
      return parseInt(pageId) === parseInt(data.id);
    });

    this.setState({
      flowerData: detailData[0]
    });
  }

  onChange = e => {
    this.setState({
      newComment: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addComment(this.state.newComment, this.props.match.params.id);
    this.setState({
      newComment: ''
    });
  };

  render() {
    const { id, url, flowerName, person, description, comments } = this.state.flowerData;

    return (
      <div className="details">
        <div className="details__back">
          <Link to="/">
            <i className="fa fa-chevron-left"></i>
          </Link>
        </div>
        <div className="details__col-1">
          <div className="details__image-container">
            <img className="details__image" src={url} alt={flowerName} />
          </div>
          <div className="details__image-name">{flowerName}</div>
        </div>

        <div className="details__col-2">
          <div className="details__person-name">{person}'s Favorite Flower</div>
          <div className="details__content">{description}</div>
          {/* <Comments /> */}

          <div className="details__form">
            <div className="details__form-label">Leave a comment:</div>
            <form onSubmit={this.onSubmit}>
              <textarea
                className="details__form-text"
                placeholder={`Ask about the ${flowerName}`}
                value={this.state.newComment}
                onChange={this.onChange}
                rows="3"
                // cols="34"
              />
              <div className="details__form-btn-wrapper">
                <button className="details__form-btn">Send</button>
              </div>
            </form>
          </div>

          <div className="details__comments">
            <div className="details__comments-label">Comments</div>
            {comments.map(comment => {
              return <div className="details__comments-item">{comment}</div>;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
