const container = document.createElement("div");
const navbar = document.createElement('div')
document.body.append(navbar);
document.body.append(container);
container.setAttribute('class','container')
navbar.setAttribute('class','navbar')

var img = document.createElement("IMG");
img.src = 'https://www.iconpacks.net/icons/2/free-book-icon-4986-thumb.png';
navbar.append(img);

var ul = document.createElement("ul");
navbar.appendChild(ul);

for (var i = 0; i <= 2; i++)
{
    const list = ["Home","Favorite List","Settings"]
    var li = document.createElement("li");  
    li.className = "file";
    var a = document.createElement("a");
    a.setAttribute('href','#');
    a.innerHTML = list[i];
    li.appendChild(a);
    ul.appendChild(li);

}
let books = [
    {
        id: 1,
        title: "land of zicola",
        author: "Amro Abdelhamid",
        edition: 2,
        image:"https://mofibo.com/images/640x640/0000503069.jpg",
        favorite : false
    },
    {
        id: 2,
        title: "Amarita",
        author: "Amro Abdelhamid",
        edition: 1,
        image:"https://www.storytel.com/images/640x640/0000503067.jpg",
        favorite: false
    },
    {
        id: 3,
        title: "Garteen",
        author: "Amro Abdelhamid",
        edition: 3,
        image:"https://alfagrbookstore.com/image/catalog/products/347/New%20Doc%202021-05-29%2009.37.35_13.jpg",
        favorite: false
    },
]

let fav = [];
books.forEach((book,_index)=> {
    let booksDisplay = document.createElement('div');
    booksDisplay.setAttribute('class', 'booksDisplay');
    container.appendChild(booksDisplay);


    var img = document.createElement("IMG");
    img.src = book.image;
    booksDisplay.appendChild(img);

    let booksDisplayTitle = document.createTextNode("Title:\t"+book.title + "\t");
    booksDisplay.appendChild(booksDisplayTitle);
 
    let booksDisplayAuthor = document.createTextNode("Author:"+book.author + "\t");
    booksDisplay.appendChild(booksDisplayAuthor)
  
    let booksDisplayEdition= document.createTextNode("Edition:"+book.edition);

    booksDisplay.appendChild(booksDisplayEdition)


    const button = document.createElement('button')
    button.setAttribute('id',`button${_index}`);
    booksDisplay.appendChild(button)
    button.innerText = "Add to favorite"
    
    



    button.onclick = function favoriteButton() {
        
        console.log("before",books)
        books[_index].favorite = true;
        
        
        localStorage.setItem("myBooks",JSON.stringify([...books]));
        console.log("after",books)
        
    }
    // button.onclick = function handleButton() {
    //     fav.push(book);
    //     console.log(fav)
    // }
    
});

// localStorage.setItem("myBooks",JSON.stringify(books));