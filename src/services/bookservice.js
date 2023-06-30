import axios from 'axios';
const baseUrl="http://localhost:8007";

class BookService{
    getbook(){
        return axios.get(baseUrl+"/books")
    }

    getBookById(bid){
        return axios.get(baseUrl+"/books/book/"+bid)
    }

    insertBook(book){
        return axios.post(baseUrl+"/books/insert/"+book.bid,book)
    }

    updateBook(book){
        return axios.post(baseUrl+"/books/update/"+book.bid,book)
    }
    deleteById(bid){
        return axios.delete(baseUrl+"/books/delete/"+bid)
    }
}
export default new BookService();