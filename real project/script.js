const API_KEY = "https://newsapi.org/v2/everything?q=tesla&from=2024-09-17&sortBy=publishedAt&apiKey=51abfa5e7ef0423f97db1a478eb4c54c"
const news = {
  "source": {
    "id": "wired",
    "name": "Wired"
  },
  "author": "Joel Khalili",
  "title": "Unmasking Bitcoin Creator Satoshi Nakamoto—Again",
  "description": "A new HBO documentary takes a swing at uncovering the real identity of Satoshi Nakamoto, inventor of Bitcoin. But without incontrovertible proof, the myth lives on.",
  "url": "https://www.wired.com/story/unmasking-bitcoin-creator-satoshi-nakamoto-again/",
  "urlToImage": "https://media.wired.com/photos/6703eb3979f13fda7f04485b/191:100/w_1280,c_limit/Satoshi-Nakamoto-biz-1341874258.jpg",
  "publishedAt": "2024-10-09T01:00:00Z",
  "content": "Peter Todd is standing on the upper floor of a dilapidated industrial building somewhere in Czechia, chuckling under his breath. He has just been accused on camera of being Satoshi Nakamoto, the Bitc… [+3043 chars]"

}
/* <div class="card">
    <span class="source">source</span>
    <img class="image" src="https://via.placeholder.com/400x250" alt="">
    <h2 class="title">News1</h2>
    <span class="author published">Author | date time</span>
    <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi assumenda animi adipisci. Eligendi saepe voluptates velit consequuntur libero ratione accusantium quasi ipsum molestias natus dolor perspiciatis vero quisquam, recusandae voluptate?</p>
</div> */
const cardcont = document.getElementById("card-container")

function showNews(data) {
  data.forEach((news) => {

    
    const card = document.createElement("div");
    card.classList.add("card");

    const source = document.createElement("span");
    source.classList.add("source");
    source.innerText = news.source.name;

    const image = document.createElement("img");
    image.classList.add("image");
    image.src = news.urlToImage;
    image.alt = news.title;

    const title = document.createElement("h2");
    title.classList.add("title");
    title.innerText = news.title;

    const author = document.createElement("span");
    author.className = "author published";
    author.innerText = `${news.author} . ${news.publishedAt}`

    const desc = document.createElement("p");
    desc.classList.add("description");
    desc.innerText = news.description

    card.append(source, image, title, author, desc);
    cardcont.append(card);

  })
}
function loadNews(data) {
  console.log("loading news.....", data)
  showNews(data.articles);
   

}
fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=51abfa5e7ef0423f97db1a478eb4c54c")
  .then((res) => res.json())
  .then(loadNews);



