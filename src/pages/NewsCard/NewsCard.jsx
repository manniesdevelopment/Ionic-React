import React from 'react';
import './NewsCard.css';

const NewsCard = (props) => {
    // console.log("====");
    // console.log(props.article);
    let article = props.article;
    return (
        <>
        <a href={article.url}>
            <ion-card>
                <img src={article.urlToImage} style={{ maxWidth: "100%", maxHeight: "100%", display: "block" }} />
                <ion-card-header>
                    <ion-card-subtitle>
                        <ion-chip class="ion-margin-start">
                            <ion-avatar>
                                <img src={article.urlToImage} />
                            </ion-avatar>
                            <ion-label>{article.source.name}</ion-label>
                        </ion-chip>
                    </ion-card-subtitle>
                    <ion-card-title>{article.title}</ion-card-title>
                    <ion-card-subtitle>{article.publishedAt}</ion-card-subtitle>
                </ion-card-header>
                <ion-card-content>
                    {article.description}
                </ion-card-content>
            </ion-card>
        </a>

        </>

    );
}


export default NewsCard;
