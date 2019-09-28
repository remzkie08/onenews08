(async function(){
     var url = 'https://newsapi.org/v2/everything?q=bitcoin&from=2019-08-28&sortBy=publishedAt&apiKey=23f6ee90637c4701816c738d403c8902'
     var data = await (await fetch(url)).json();

     console.log(data.articles[0]);

     data.articles.forEach(art=>{
        var head = document.createElement('div')
        head.style.backgroundImage = 'url(${art.urlToImage}'
        head.classList.add('head');

        document.body.appendChild(head)

     })


})()