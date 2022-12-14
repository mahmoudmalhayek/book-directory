const container = document.createElement("div");
const navbar = document.createElement("div");
document.body.append(navbar);
document.body.append(container);
container.setAttribute("class", "container");
navbar.setAttribute("class", "navbar");

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
a1.setAttribute("href","http://127.0.0.1:5500/book-directory/favoriteBook.html");
a.setAttribute("target", "blank");
a1.setAttribute("target", "blank");
a2.setAttribute("href", "#");
a.innerHTML = "Home";
a1.innerHTML = "FavoriteList";

li.appendChild(a);
li.appendChild(a1);
li.appendChild(a2);
ul.appendChild(li);


let retrievedData = localStorage.getItem("myBooks");
let favBooks = JSON.parse(retrievedData);

favBooks.forEach((book, _index) => {
  if (favBooks[_index].favorite == true) {
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

    let booksDisplayEdition = document.createTextNode(
      "Edition:" + book.edition
    );

    booksDisplay.appendChild(booksDisplayEdition);

    const button = document.createElement("button");
    button.setAttribute("id", `button${_index}`);
    booksDisplay.appendChild(button);
    button.innerText = "Remove from favorite";

    button.addEventListener("click", favoriteButton);

    function favoriteButton() {
      favBooks[_index].favorite = false;
      localStorage.setItem("myBooks", JSON.stringify([...favBooks]));
      location.reload()
    }
  }
});
