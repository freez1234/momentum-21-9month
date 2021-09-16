const quotes = [
    {quote:"삶이 있는 한 희망은 있다.",
    author:"키케로"},
    {quote:"산다는것 그것은 치열한 전투이다.",
    author:"로망로랑"},
    {quote:"하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.",
    author:"사무엘존슨"},
    {quote:"중대장이 가만히 있으면 소대장들도 가만히 있는다.",
    author:"대위 김영광"},
    {quote:"진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해.",
    author:"찰리 채플린"},
    {quote:"직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다.",
    author:"엘버트 허버드"},
    {quote:"신은 용기있는자를 결코 버리지 않는다.",
    author:"켄러"},
    {quote:"지형정찰 5번 갔다왔으니까, 이길것 같애.",
    author:"대령 김병철"},
    {quote:"우리를 향해 열린 문을 보지 못하게 된다.",
    author:"헬렌켈러"},
    {quote:"피할수 없으면 즐겨라.",
    author:"로버트 엘리엇"},
    {quote:"내 전투화안에 지네가 있다.",
    author:"중위 한순택"}
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote= quotes[Math.floor(Math.random()*quotes.length)];
quote.innerText=todaysQuote.quote;
author.innerText=todaysQuote.author;

