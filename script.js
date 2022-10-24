const bookOne = { title: 'title', author: 'author' };

const booksArray = [bookOne];

const addButton = document.getElementById('add');

addButton.addEventListener('click', () => {
  var inputTitle2 = document.getElementById("title").value;
  var inputAuthor2 = document.getElementById("author").value;
  var newOject = Object.create(bookOne);
  newOject.title = inputTitle2;
  newOject.author = inputAuthor2;
  booksArray.push(newOject);

  function createBook() {
    const newBook = document.createElement('div');
    newBook.classList = 'newBook';
    document.getElementById('newBooks').appendChild(newBook);

    const newTitle = document.createElement('h1');
    newTitle.className = 'newTitle';
    const textCard = document.createTextNode(newOject.title);
    newTitle.appendChild(textCard);
    newBook.append(newTitle);

    const newAuthor = document.createElement('h2');
    newAuthor.className = 'newAuthor';
    const textCard2 = document.createTextNode(newOject.author);
    newAuthor.appendChild(textCard2);
    newBook.append(newAuthor);

    var removeButton = document.createElement('button');
    removeButton.classList = 'removeButton';
    const buttonText = document.createTextNode('Remove');
    removeButton.append(buttonText);
    newBook.append(removeButton);

    const hr = document.createElement('hr');
    hr.classList = 'hr';
    newBook.append(hr);

    removeButton.addEventListener('click', () => {
    });
  }
  createBook();
});

