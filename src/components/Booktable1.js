import React,{Component} from 'react'
import{Link} from 'react-router-dom'
import bookservice from '../services/bookservice'

class Booktable extends React.Component{
    constructor(props){
    super(props)
    this.state={bookarr:[]}
    }
fetchdata(){
    bookservice.getbook().then((result)=>{
        console.log(result.data)
        this.setState({...this.state,bookarr:result.data})
    })
}
    componentDidMount(){
       this.fetchdata()

    }

    deleteById=(bid)=>{
        bookservice.deleteById(bid).then(()=>{
this.fetchdata();
        }).catch((err)=>{
            console.log("error occured"+JSON.stringify(err))
        })
    }

    render(){
        return(
            <div>
               <table align="centre" border="2">
                <thead>
                 <tr>

                    <th>BookId</th>
                    <th>BookName</th>
                    <th>BookAuthor</th>
                    <th>Language</th>
                    <th>Price</th>
                    <th>Action</th>
                 </tr>

                </thead>
                <tbody>
                    {this.state.bookarr.map((b)=>(
                        <tr key={b.bid}>
                           <td>{b.bid}</td>
                           <td>{b.bname}</td>
                           <td>{b.author}</td>
                           <td>{b.language}</td>
                           <td>{b.price}</td>
                            <td><button type="button" id="btn" name="btn" value="btn" onClick={()=>{this.deleteById(b.bid)}}>Delete</button></td>
                        </tr>
                    )
                    )}
                </tbody>
               </table>
              <Link to="/bookform"><button>AddBook</button></Link>
            </div>
        )
    }
}
export default Booktable;