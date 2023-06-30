import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
import bookservice from '../services/bookservice'



const Bookform=()=>{
    let navigate=useNavigate(); 
    let[formDetails,setformDetails]=useState({bid:"",bname:"",author:"",language:"",price:""})
     

    let addbook=()=>{
        
        bookservice.insertBook(formDetails).then(()=>{
            console.log(formDetails)
            navigate("/");
        }).catch(()=>{console.log("Add fail..")})

    }
    return(
           <div>
           <form>
            <label htmlFor='bid'>Book Id</label>
                <input type="text" id="bid" name="bid" value={formDetails.bid} 
                onChange={(event)=>{setformDetails({...formDetails,bid:event.target.value})}}></input>                 
                 
                 <label htmlFor='bname'>Book Name</label>
                <input type="text" id="bname" name="bname" value={formDetails.bname} 
                onChange={(event)=>{setformDetails({...formDetails,bname:event.target.value})}}></input>                 
                 
                 <label htmlFor='author'> Author</label>
                <input type="text" id="author" name="author" value={formDetails.author} 
                onChange={(event)=>{setformDetails({...formDetails,author:event.target.value})}}></input>                 
                 
                 <label htmlFor='language'>language</label>
                <input type="text" id="language" name="language" value={formDetails.language} 
                onChange={(event)=>{setformDetails({...formDetails,language:event.target.value})}}></input>                 
                 
                 <label htmlFor='price'>price</label>
                <input type="text" id="price" name="price" value={formDetails.price} 
                onChange={(event)=>{setformDetails({...formDetails,price:event.target.value})}}></input>                 
                 
                 <button type="button" id="btn" name="btn" value="btn" onClick={addbook}>AddBook</button>
           </form>

           </div>
    )
}

export default Bookform;