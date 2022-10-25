let book = [
    {
        title: 'Title:' + ' ' +"land of zicola",
        author: 'Author:' + ' ' +"Amro Abdelhamid",
        edition: 2,
        image:"https://mofibo.com/images/640x640/0000503069.jpg"
    },
    {
        title: 'Title:' + ' ' +"Amarita",
        author: 'Author:' + ' ' +"Amro Abdelhamid",
        edition: 1,
        image:"https://www.storytel.com/images/640x640/0000503067.jpg"
    },
    {
        title: 'Title:' + ' ' +"Garteen",
        author: 'Author:' + ' ' +"Amro Abdelhamid",
        edition: 3,
        image:"https://alfagrbookstore.com/image/catalog/products/347/New%20Doc%202021-05-29%2009.37.35_13.jpg"
    },
]
book.forEach((book,_index)=> {
    let booksDisplay = document.createElement('div');
    booksDisplay.setAttribute('class', 'booksDisplay')

});