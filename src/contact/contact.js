import React, { useState } from 'react';
import './contact.css';

const Contacts = () => {
  const [contact, setContact] = useState([
    { name: 'ibrahim', number: '0555979315',id:'123' },
    { name: 'G', number: '052231658',id:'643' }
  ]);
  const [na,setna]=useState();
  const[nu,setnu]=useState();
  const newname=(e)=>{
    setna(e.target.value)
  }
  const newnumber=(e)=>{
    setnu(e.target.value)
  }
  const newcontact=()=>{
    setContact([...contact,{name:na,number:nu}])
  }
  const deletcontact=(index)=>{
    const restcontact = contact.filter((_,i)=>i!==index)
    setContact(restcontact)

  }
  
  
  
  
  
  return (
    <div className="container">
      <h2 >Contact List</h2>
      <div className='add-contact'>
        <input placeholder='Name'onChange={newname}/>
        <input placeholder='Phone'onChange={newnumber}/>
        <button onClick={newcontact}> add new contact</button>
      </div>

      
    <div className='container-contact'>
        {
        contact.map((contact,index)=>{
          return(
          <div className='contac-but' key={contact.id}>
            <div className='contact-info' >
              <p style={{backgroundColor:'black',color:'white'}}> name : {contact.name}</p>
               <p> number : {contact.number}</p>
                <p style={{backgroundColor:'red'}}> id# {contact.id}</p>
            </div >
            <div>
              <button onClick={()=>deletcontact(index)}> delet</button>
            </div>
          </div>
           
          )
        })
        }


      </div>
      
    </div>
  );
};

export default Contacts;
