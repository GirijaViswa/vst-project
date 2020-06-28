import React,{useState} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import '../Styling.css';


const   DetailedForm = (props) => {

    const [editable,setEditable] = useState(false)

    // const enableStyle = {editable ? {color:blue}:{color:red}}

    const handleChange = (event) => {
        // debugger
        if(props.records[parseInt(props.recordId)][event.target.name] !== event.target.value){
            props.alterRecord(event.target.name,event.target.value,props.recordId)
        }
    }

    return(
        <div>Shiva shiva
            {props.recordId}
            {/* <a onClick={() => setEditable(!editable)}> read more</a> */}
            {props.records.map(ele=>ele.firstname)}
            

            <form className="FormFields">
                {editable ?
// Editable fieldset
                    <fieldset>
                        <label>
                            First Name<br/>
                            <input type="text" name="firstname" value={props.records[parseInt(props.recordId)].firstname} onChange={(event)=>handleChange(event)} placeholder="Enter your firstname"/>                    
                        </label><br/>
                        <label>
                            Last Name<br/>
                            <input type="text" name="lastname" value={props.records[parseInt(props.recordId)].lastname} onChange={(event)=>handleChange(event)} placeholder="Enter your lastname"/>
                        </label><br/><br/> 
                        <label>
                            Username<br/>
                            <input type="text" name="username" value={props.records[parseInt(props.recordId)].username} onChange={(event)=>handleChange(event)} placeholder="Enter your username"/>
                        </label><br/><br/> 
                        <label>
                            Email Address<br/>
                            <input type="text" name="email" value={props.records[parseInt(props.recordId)].email} onChange={(event)=>handleChange(event)} placeholder="Enter your email address"/>
                            
                        </label><br/><br/> 
                        <label>
                            Password<br/>
                            <input type="password" name="password" value={props.records[parseInt(props.recordId)].password} onChange={(event)=>handleChange(event)} placeholder="Enter your password"/>
                            
                        </label><br/><br/> 
                        <label>
                            Address<br/>
                            <input type="text" name="address1" value={props.records[parseInt(props.recordId)].address1} onChange={(event)=>handleChange(event)} placeholder="Enter your Address"/>
                        </label><br/><br/> 
                        <label>
                            City<br/>
                            <input type="text" name="city" value={props.records[parseInt(props.recordId)].city} onChange={(event)=>handleChange(event)} placeholder="Enter your City"/>
                        </label><br/><br/> 
                        <label>
                            State/Province<br/>
                            <input type="text" name="state" value={props.records[parseInt(props.recordId)].state} onChange={(event)=>handleChange(event)} placeholder="Enter your State"/>
                        </label><br/><br/> 
                        <label>
                            Country<br/>
                            <input type="text" name="country" value={props.records[parseInt(props.recordId)].country} onChange={(event)=>handleChange(event)} placeholder="Enter your Country"/>
                        </label><br/><br/> 
                        <label>
                            Zipcode<br/>    
                            <input type="text" name="zipcode" value={props.records[parseInt(props.recordId)].zipcode} onChange={(event)=>handleChange(event)} placeholder="Enter your zipcode"/>
                        </label><br/><br/>
                    </fieldset>
                    :
// Disabled fieldset
                    <fieldset disabled>
                        <label>
                            First Name<br/>
                            <input type="text" name="firstname" value={props.records[parseInt(props.recordId)].firstname} />                    
                        </label><br/>
                        <label>
                            Last Name<br/>
                            <input type="text" name="lastname" value={props.records[parseInt(props.recordId)].lastname} />
                        </label><br/><br/> 
                        <label>
                            Username<br/>
                            <input type="text" name="username" value={props.records[parseInt(props.recordId)].username} />
                        </label><br/><br/> 
                        <label>
                            Email Address<br/>
                            <input type="text" name="email" value={props.records[parseInt(props.recordId)].email} />
                            
                        </label><br/><br/> 
                        <label>
                            Password<br/>
                            <input type="password" name="password" value={props.records[parseInt(props.recordId)].password} />
                            
                        </label><br/><br/> 
                        <label>
                            Address<br/>
                            <input type="text" name="address1" value={props.records[parseInt(props.recordId)].address1} />
                        </label><br/><br/> 
                        <label>
                            City<br/>
                            <input type="text" name="city" value={props.records[parseInt(props.recordId)].city} />
                        </label><br/><br/> 
                        <label>
                            State/Province<br/>
                            <input type="text" name="state" value={props.records[parseInt(props.recordId)].state} />
                        </label><br/><br/> 
                        <label>
                            Country<br/>
                            <input type="text" name="country" value={props.records[parseInt(props.recordId)].country} />
                        </label><br/><br/> 
                        <label>
                            Zipcode<br/>    
                            <input type="text" name="zipcode" value={props.records[parseInt(props.recordId)].zipcode} />
                        </label><br/><br/> 
                    </fieldset>
                }

            </form>

            {editable ?
                <button onClick={()=>setEditable(!editable)}>To View</button>
                :
                <button onClick={()=>setEditable(!editable)}>To Edit</button>
            }
            <Link to="/"><button>Goto Home</button></Link>
            
            

        </div>
    )
}

const mapStatetoProps = (state) => {
    return {recordId:state.recordId,records:state.records}
}

const mapDispatchToProps = (dispatch) => {
    return {alterRecord:(name,value,index)=>dispatch({type:"ALTER_RECORD","fieldname":name,"value":value,"idx":index})}
}

export default connect(mapStatetoProps,mapDispatchToProps)(DetailedForm);