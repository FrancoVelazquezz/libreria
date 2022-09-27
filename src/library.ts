import { isJSDocThisTag } from "typescript";
import * as fs from 'fs';

class Book {
    private bookName: string;
    private bookAutor: string;
    private bookGenre: string;

    constructor(pBookName: string, pBookAutor: string, pBookGenre: string){
        this.bookName = pBookName;
        this.bookAutor = pBookAutor;
        this.bookGenre = pBookGenre;
    }

    public getName():string {
        return this.bookName
    }

    public getAutor():string {
        return this.bookAutor
    }

    public getGenre():string {
        return this.bookGenre
    }

    public setName(pBookName):string {
        return this.bookName = pBookName
    }

    public setAutor(pBookAutor):string {
        return this.bookAutor = pBookAutor
    }

    public setGenre(pBookGenre):string {
        return this.bookGenre = pBookGenre
    }
}

class Library {
    private arrBooks: Book[]

    constructor(pArrBooks: Book[] ){
        this.arrBooks = pArrBooks;
    }

    public getBook(pBook: Book){
        try{
            return pBook
        } catch(error) {
            console.log('Error: ' + error)
        }
    }

    public addBook(newBook:Book){
        try {
            this.arrBooks.push(newBook);
            console.log('Book added')
            return newBook
        }
        catch(error) {
            console.log('Error: ' + error)
        }
    }

    public updateBook(pBook:Book, modifyName:string, modifyAutor: string, modifyGenre: string){
        try{
            for(let i:number = 0; i < this.arrBooks.length; i++){
                if(pBook === this.arrBooks[i]){
                    this.arrBooks[i].setName(modifyName)
                    this.arrBooks[i].setAutor(modifyAutor)
                    this.arrBooks[i].setGenre(modifyGenre)
                }
            }
            return console.log('Book updated')
        } catch(error) {
            console.log('Error: ' + error)
        }
    }

    public deleteBook(pBook:Book){
        try{
            for(let i:number = 0; i < this.arrBooks.length; i++){
                if(pBook === this.arrBooks[i]){
                    this.arrBooks.splice(i,1)
                }
            }
            return console.log('Book deleted')
            
        } catch(error) {
            console.log('Error: ' + error)
        }
    }
//No funciona
    public readBook(pBook:Book){
        for(let i:number = 0; i < this.arrBooks.length; i++){
            if(pBook === this.arrBooks[i]){
                fs.readFile('src/readBook.txt', 'utf-8', (error,data) => {
                    if(!error){
                        return data
                    } else {
                        console.log(error)
                    }
                })
            }
        }

    }
}

let fisrtsBook = new Book('Games of Thrones', 'George R. R. Martin', 'Fantasy ')
let secondBook = new Book('The Shining', 'Stephen King', 'Horror')

let controller = new Library([fisrtsBook])

console.log(controller.addBook(secondBook))

console.log(controller.getBook(fisrtsBook))

controller.updateBook(fisrtsBook, 'GOT', 'G.R.R.M', 'History')

controller.updateBook(secondBook, 'TS', 'S.K', 'Fantasy')

controller.deleteBook(fisrtsBook)

console.log(controller.readBook(fisrtsBook))

console.log(fisrtsBook)

console.log(secondBook)

console.log(controller)



