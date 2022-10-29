var retrievedData = localStorage.getItem("myBooks");

var favBooks = JSON.parse(retrievedData);
console.log(favBooks)


let booksDisplayTitle = document.createTextNode("Title:\t"+favBooks[0].favorite + "\t");
document.body.append(booksDisplayTitle);

// document.getElementById("demo").innerHTML = favBooks
