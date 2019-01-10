import React, { Component } from 'react';

export default class MovieRater extends Component {
    handleOptionChange = (changeEvent) => {
        this.props.rateMovieAction(parseInt(changeEvent.target.value));
    }

    render() { return (
        <form>
            <span>
                <span>Rate this movie:</span>
                <input type="radio" id="rating-1" name="rating" value="1" onChange={this.handleOptionChange} /><label htmlFor="rating-1">1</label>
                <input type="radio" id="rating-2" name="rating" value="2" onChange={this.handleOptionChange} /><label htmlFor="rating-2">2</label>
                <input type="radio" id="rating-3" name="rating" value="3" onChange={this.handleOptionChange} /><label htmlFor="rating-3">3</label>
                <input type="radio" id="rating-4" name="rating" value="4" onChange={this.handleOptionChange} /><label htmlFor="rating-4">4</label>
                <input type="radio" id="rating-5" name="rating" value="5" onChange={this.handleOptionChange} /><label htmlFor="rating-5">5</label>
            </span>
        </form>
    )
    }
}