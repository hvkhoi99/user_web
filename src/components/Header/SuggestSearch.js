import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class SuggestSearch extends Component {
    render() {
        var storiesSuggest;
        if (this.props.storiesSuggest.length > 0) {
            storiesSuggest = this.props.storiesSuggest.map((item, index) => {
                return (
                    <li>
                        <a href={`/story/${item.id}`}>
                            <img src={item.path_image} alt={item.name} />
                            <h3>{item.name}</h3>
                            <h4>{ }</h4>
                        </a>
                    </li>
                )
            })
        }
        else {
            storiesSuggest = () => null;
        }

        return (
            <div className="suggestsearch" style={{ display: 'block' }}>
                <ul>
                    {storiesSuggest}
                </ul>
            </div>
        );
    }
}
