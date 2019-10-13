import React from 'react';

const NewSingle = ({item}) =>  (
    <div className="col m3">
        <div className="card sticky-action small lufc-body__card">
            <div className="card-image">
                <img src={item.urlToImage} alt="{item.title}"/>
                <span className="card-title">{item.source.name}</span>
            </div>
            <div classname="card-content ">
                <p className="lufc__title">{item.title}</p>
            </div>
            <div className="card-action lufc-card__button">
                <a className="waves-effect waves-light btn-small" href={item.url} target="_blank">View the article</a>
            </div>
        </div>
    </div>
);

export default NewSingle;