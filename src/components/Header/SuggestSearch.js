import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class SuggestSearch extends Component {
    findIndex = (list, id) => {
        var result = -1;
        list.forEach((item, index) => {
            if (item.id === id) {
                result = index;
            }
        })
        return result;
    }

    SaveClick = (story) => {
        var storyKey = 'list';
        var dataString = localStorage.getItem(storyKey);

        var list = (dataString) ? JSON.parse(dataString) : [];

        if (this.findIndex(list, story.id) === -1) {
            list.push(story);
            localStorage.setItem(storyKey, JSON.stringify(list));
        }
    }
    render() {
        var storiesSuggest;
        if (this.props.storiesSuggest.length > 0) {
            storiesSuggest = this.props.storiesSuggest.map((item, index) => {
                return (
                    <li key={index}>
                        <a href={`/story/${item.id}`} onClick={(name) => this.SaveClick(item)}>
                            <img src={item.path_image} alt={item.name} />
                            <h3>{item.name}</h3>
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
