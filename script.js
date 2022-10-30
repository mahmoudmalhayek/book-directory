const container = document.createElement("div");
const navbar = document.createElement("div");
const popup = document.createElement("div");
const popupContent = document.createElement("div");

document.body.append(navbar);
document.body.append(popup)
document.body.append(container);
popup.append(popupContent)

container.setAttribute("class", "container");
navbar.setAttribute("class", "navbar");
popup.setAttribute("class", "popup");
popupContent.setAttribute("class", "popup-content");

var img = document.createElement("IMG");
img.src = "https://www.iconpacks.net/icons/2/free-book-icon-4986-thumb.png";
navbar.append(img);

var ul = document.createElement("ul");
navbar.appendChild(ul);
var li = document.createElement("li");
li.className = "file";
var a = document.createElement("a");
var a1 = document.createElement("a");
var a2 = document.createElement("a");

a.setAttribute("href", "http://127.0.0.1:5500/book-directory/index.html#");
a1.setAttribute(
  "href",
  "http://127.0.0.1:5500/book-directory/favoriteBook.html"
);
a1.setAttribute("target", "blank");
a2.setAttribute("href", "#");
a.innerHTML = "Home";
a1.innerHTML = "FavoriteList";
a2.innerHTML = "AddBook";
a2.setAttribute("class","addBookButton")
li.appendChild(a);
li.appendChild(a1);
li.appendChild(a2);
ul.appendChild(li);

const input1 = document.createElement('input')
popupContent.appendChild(input1)
input1.setAttribute('id','text1')

input1.setAttribute('class','input','type','text')
input1.setAttribute('placeholder','Title Of Book')
document.getElementById("text1").required = true;

const input2 = document.createElement('input')
popupContent.appendChild(input2)
input2.setAttribute('id','text2')

input2.setAttribute('class','input','type','text')
input2.setAttribute('placeholder','Author Of Book')
document.getElementById("text2").required = true;

const input3 = document.createElement('input')
popupContent.appendChild(input3)

input3.setAttribute('id','text3')
input3.setAttribute('class','input','type','text')
input3.setAttribute('placeholder','Edition Of Book')
document.getElementById("text3").required = true;

const addButton = document.createElement("button");
addButton.setAttribute('class','input')
addButton.setAttribute('id','addButton')
popupContent.appendChild(addButton);
addButton.innerText = 'Submit'


addButton.addEventListener("click",function () {
    let newBook = {
        image: "https://mofibo.com/images/640x640/0000503069.jpg",
        name: document.getElementById("text1").value,
        author: document.getElementById("text2").value,
        edition: document.getElementById("text3").value,
      };
      books.push(newBook);
})




const close = document.createElement("img")
close.setAttribute('class','closeImg')
close.src = "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-close-512.png"
popupContent.append(close)

document.querySelector('.addBookButton').addEventListener("click",function () {
    document.querySelector(".popup").style.display = "flex"
})
 document.querySelector('.closeImg').addEventListener("click",function () {
     document.querySelector(".popup").style.display = "none"
 })




let books = [
  {
    id: 1,
    title: "land of zicola",
    author: "Amro Abdelhamid",
    edition: 1,
    image: "https://mofibo.com/images/640x640/0000503069.jpg",
    favorite: false,
  },
  {
    id: 2,
    title: "Amarita",
    author: "Amro Abdelhamid",
    edition: 3,
    image: "https://www.storytel.com/images/640x640/0000503067.jpg",
    favorite: false,
  },
  {
    id: 3,
    title: "Garteen",
    author: "Amro Abdelhamid",
    edition: 2,
    image:
      "https://alfagrbookstore.com/image/catalog/products/347/New%20Doc%202021-05-29%2009.37.35_13.jpg",
    favorite: false,
  },
];

let fav = [];
books.forEach((book, _index) => {
  let booksDisplay = document.createElement("div");
  booksDisplay.setAttribute("class", "booksDisplay");
  container.appendChild(booksDisplay);

  var img = document.createElement("IMG");
  img.src = book.image;
  booksDisplay.appendChild(img);

  let booksDisplayTitle = document.createTextNode(
    "Title:\t" + book.title + "\t"
  );
  booksDisplay.appendChild(booksDisplayTitle);

  let booksDisplayAuthor = document.createTextNode(
    "Author:" + book.author + "\t"
  );
  booksDisplay.appendChild(booksDisplayAuthor);

  let booksDisplayEdition = document.createTextNode("Edition:" + book.edition);

  booksDisplay.appendChild(booksDisplayEdition);

  const button = document.createElement("button");
  button.setAttribute("id", `button${_index}`);
  booksDisplay.appendChild(button);
  button.innerText = "Add to favorite";

  localStorage.setItem("myBooks", JSON.stringify([...books]));


  button.addEventListener("click", favoriteButton);

  function favoriteButton() {
    books[_index].favorite = true;
    localStorage.setItem("myBooks", JSON.stringify([...books]));
  }

  function compare( a, b ) {
    if ( a.edition < b.edition){
      return -1;
    }
    if ( a.edition > b.edition ){
      return 1;
    }
    return 0;
  }
  
  books.sort( compare );

});

