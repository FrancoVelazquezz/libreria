"use strict";
exports.__esModule = true;
var fs = require("fs");
var Book = /** @class */ (function () {
    function Book(pBookName, pBookAutor, pBookGenre) {
        this.bookName = pBookName;
        this.bookAutor = pBookAutor;
        this.bookGenre = pBookGenre;
    }
    Book.prototype.getName = function () {
        return this.bookName;
    };
    Book.prototype.getAutor = function () {
        return this.bookAutor;
    };
    Book.prototype.getGenre = function () {
        return this.bookGenre;
    };
    Book.prototype.setName = function (pBookName) {
        return this.bookName = pBookName;
    };
    Book.prototype.setAutor = function (pBookAutor) {
        return this.bookAutor = pBookAutor;
    };
    Book.prototype.setGenre = function (pBookGenre) {
        return this.bookGenre = pBookGenre;
    };
    return Book;
}());
var Library = /** @class */ (function () {
    function Library(pArrBooks) {
        this.arrBooks = pArrBooks;
    }
    Library.prototype.getBook = function (pBook) {
        try {
            return pBook;
        }
        catch (error) {
            console.log('Error: ' + error);
        }
    };
    Library.prototype.addBook = function (newBook) {
        try {
            this.arrBooks.push(newBook);
            console.log('Book added');
            return newBook;
        }
        catch (error) {
            console.log('Error: ' + error);
        }
    };
    Library.prototype.updateBook = function (pBook, modifyName, modifyAutor, modifyGenre) {
        try {
            for (var i = 0; i < this.arrBooks.length; i++) {
                if (pBook === this.arrBooks[i]) {
                    this.arrBooks[i].setName(modifyName);
                    this.arrBooks[i].setAutor(modifyAutor);
                    this.arrBooks[i].setGenre(modifyGenre);
                }
            }
            return console.log('Book updated');
        }
        catch (error) {
            console.log('Error: ' + error);
        }
    };
    Library.prototype.deleteBook = function (pBook) {
        try {
            for (var i = 0; i < this.arrBooks.length; i++) {
                if (pBook === this.arrBooks[i]) {
                    this.arrBooks.splice(i, 1);
                }
            }
            return console.log('Book deleted');
        }
        catch (error) {
            console.log('Error: ' + error);
        }
    };
    //No funciona
    Library.prototype.readBook = function (pBook) {
        for (var i = 0; i < this.arrBooks.length; i++) {
            if (pBook === this.arrBooks[i]) {
                fs.readFile('src/readBook.txt', 'utf-8', function (error, data) {
                    if (!error) {
                        return data;
                    }
                    else {
                        console.log(error);
                    }
                });
            }
        }
    };
    return Library;
}());
var fisrtsBook = new Book('Games of Thrones', 'George R. R. Martin', 'Fantasy ');
var secondBook = new Book('The Shining', 'Stephen King', 'Horror');
var controller = new Library([fisrtsBook]);
console.log(controller.addBook(secondBook));
console.log(controller.getBook(fisrtsBook));
controller.updateBook(fisrtsBook, 'GOT', 'G.R.R.M', 'History');
controller.updateBook(secondBook, 'TS', 'S.K', 'Fantasy');
controller.deleteBook(fisrtsBook);
console.log(controller.readBook(fisrtsBook));
console.log(fisrtsBook);
console.log(secondBook);
console.log(controller);
