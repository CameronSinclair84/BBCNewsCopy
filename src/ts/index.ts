import data from "./newsData";

interface INewsData {
    status: String;
    totalResults: number;
    articles: IArticleData[];
}

interface IArticleData {
    source: {
        id: string;
        name: string;
    },
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

const newsData: INewsData = data;

const addToPage = (article:IArticleData) => {
    let html = `<article>
    <div class="image" style="background-image:url('${checkImage(article.urlToImage)}')"></div>
    <div class="content">
    <header>${article.title}</header>
    <small>
    <span class="time">${getFriendlyTime(article.publishedAt)}</span>
    <span class="source">${article.source.name}</span>
    </small>
    <div class="description">
    ${article.description}
    </div>
    <a href="${article.url}" target="_blank">Read more</a>
    </div>
    </article>`;
    document.getElementById("articles").innerHTML += html;
}

const getFriendlyTime = (date:string): string => {
    let dateObject = new Date(date);
    return dateObject.toLocaleTimeString();
}

const checkImage = (url:string): string => {
    return (url) ? url : "../assets/placeholder-image.jpg";
}

newsData.articles.forEach(addToPage);

(<any>window).displayMenuItems = (e:MouseEvent) => {
    e.preventDefault();
    document.getElementById("menulinks").classList.toggle("hidden");
}