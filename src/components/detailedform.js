import React,{useState} from 'react';
import '../Styling.css'
import {connect} from 'react-redux';



const DetailedForm = (props) => {
    let record = props.records[parseInt(props.recordId)];
    const [edit, setEdit] = useState(true);

   const editChange = (event,record) => {
       debugger
        if(record[event.target.name] !== event.target.value){
            props.alterRecord(event.target.name,event.target.value,props.recordId)
        }
        console.log(event.target.name,event.target.value,props.recordId)
   }

    return (
        
        <div>
            {console.log(props,"DF")}
            {console.log(props.records[parseInt(props.recordId)],"final result")}
            {console.log(record,"final result")}
            {console.log(edit,"render begin")}
            ganesha
            Detailed Form
            <form className="FormFields">
                <label>
                    First Name<br/>
                    {/* <input type="text" name="firstname" value={this.state.firstname} onChange={(event)=>this.handleChange(event)} placeholder="Enter your firstname"/> */}
                    <input type="text" name="firstname" value={props.records[parseInt(props.recordId)].firstname} onChange={(event)=>editChange(event,record)} placeholder="Enter your firstname" />
                    
                </label><br/><br/> 
                {/* <label>
                    Last Name<br/>
                    <input type="text" name="lastname" value={record.lastname} onChange={editChange} placeholder="Enter your lastname" required />
                </label><br/><br/> 
                <label>
                    Username<br/>
                    <input type="text" name="username" value={record.username} onChange={editChange} placeholder="Enter a username" required />
                </label><br/><br/> 
                <label>
                    Email Address<br/>
                    <input type="text" name="email" value={record.email} onChange={editChange} placeholder="Enter your email address" />
                    
                </label><br/><br/> 
                <label>
                    Password<br/>
                    <input type="password" name="password" value={record.password} onChange={editChange} placeholder="Enter password"/>
                    
                </label><br/><br/> 
                <label>
                    Address<br/>
                    <input type="text" name="address1" value={record.address1} onChange={editChange} placeholder="Enter your address" required />
                </label><br/><br/> 
                <label>
                    City<br/>
                    <input type="text" name="city" value={record.city} placeholder="Enter your city" onChange={editChange} required />
                </label><br/><br/> 
                <label>
                    State/Province<br/>
                    <input type="text" name="state" value={record.state} onChange={editChange} placeholder="Enter your State/Province" required />
                </label><br/><br/> 
                <label>
                    Country<br/>
                    <input type="text" name="country" value={record.country} onChange={editChange} placeholder="Enter your Country" required />
                </label><br/><br/> 
                <label>
                    Zipcode<br/>    
                    <input type="text" name="zipcode" value={record.zipcode} onChange={editChange} placeholder="Enter your zipcode"/>
                    
                </label><br/> <br/>  */}
                {/* <input className="ButtonClass" type="Submit" value="Submit" /> */}
                <button onClick={()=>setEdit(!edit)}>Edit</button>
                <button >Previous</button>
            </form>
            
            {edit ? 'edit-true' : 'edit-false'}
        </div>
    )
}

const mapStatetoProps = (state) =>{
    console.log(state.records)
    return {recordId:state.recordId,records:state.records}    
}
const mapDispatchToProps = (dispatch) => {
    console.log('dispatch',dispatch)
    return {alterRecord:(name,value,index)=>dispatch({type:"ALTER_RECORD","fieldname":name,"value":value,"idx":index})}
}

// export default connect(mapStatetoProps)(DetailedForm);
export default connect(mapStatetoProps,mapDispatchToProps)(DetailedForm);