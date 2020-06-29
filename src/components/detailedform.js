import React,{useState} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import '../Styling.css';

const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
  };

const  DetailedForm = (props) => {

    const [editable,setEditable] = useState(false)
    const [errors,setErrors] = useState({"email":'',"password":'',"zipcode":'',"firstname":''})
    const [present,setPresent] = useState({})
    // setRecord(props.record)
    // const enableStyle = {editable ? {color:blue}:{color:red}}

    const handleBack = () => {
        // debugger
        // {editable ?
        //     alert("Change(s) are saved successfully.")
        //     :
        //     props.resetActiveRec();
        // }
        setEditable(!editable)

    } 

    const editRec = () => {
        setEditable(!editable)
        setPresent(props.present)
    }

    const handleCancel = () => {
        // debugger
        setEditable(!editable)
        // props.cancelRecord(props.recordId)
        setPresent(props.records[parseInt(props.recordId)])

        // props.cancelRecord(props.recordId);
    }

    const handleSubmit = (event) => {
        alert("Change(s) are saved successfully.")
        // debugger
        if (validateForm(errors)){
            // if (props.record[event.target.name] !== event.target.value){
            //     props.updateRecord(event.target.name,event.target.value,props.recordId)
            // }
            props.updateRecord(props.present,props.recordId)
        }
        setEditable(!editable)
    }

    const handleChange = (event) => {
        // debugger
        event.preventDefault();
    //     if(props.records[parseInt(props.recordId)][event.target.name] !== event.target.value){
    //         // props.alterRecord(event.target.name,event.target.value,props.recordId)
    //         props.updateRecord(event.target.name,event.target.value,props.recordId)

    //     }
    // }
    if(props.records[parseInt(props.recordId)][event.target.name] !== event.target.value){
        // props.alterRecord(event.target.name,event.target.value,props.recordId)
        // props.updateRecord(event.target.name,event.target.value,props.recordId)
        setPresent(props.present[event.target.name] = event.target.value)

        // debugger
    }
}

    return(
        <div className="DetailedClass">Shiva shiva
            {props.recordId}
            {/* <a onClick={() => setEditable(!editable)}> read more</a> */}
            {props.records.map(ele=>ele.firstname)}
            {/* {(props.records[parseInt(props.recordId)].firstname) && <Link to="/">Goto Home</Link>} */}

            <form className="FormFields">
            <h1>Detailed Information</h1>
                {editable ?
// Editable fieldset
                    <fieldset>
                        <label>
                            First Name<br/>
                            {/* <input type="text" name="firstname" value={props.record.firstname} onChange={(event)=>handleChange(event)} placeholder="Enter your firstname"/>                     */}
                            
                            {/* <input type="text" name="firstname" value={props.records[parseInt(props.recordId)].firstname} onChange={(event)=>handleChange(event)} placeholder="Enter your firstname"/>                     */}
                            
                            <input type="text" name="firstname" value={present.firstname} onChange={(event)=>handleChange(event)} placeholder="Enter your firstname"/>                    
                            {/* <input type="text" name="firstname" value={props.present.firstname} onChange={(event)=>handleChange(event)} placeholder="Enter your firstname"/>                     */}
                            {errors.firstname.length >= 0 && 
                            <div className='error'>{errors.firstname}</div>}
                        </label><br/>


                        <label>
                            Last Name<br/>
                            {/* <input type="text" name="lastname" value={props.record.lastname} onChange={(event)=>handleChange(event)} placeholder="Enter your lastname"/> */}
                            {/* <input type="text" name="lastname" value={props.records[parseInt(props.recordId)].lastname} onChange={(event)=>handleChange(event)} placeholder="Enter your lastname"/> */}
                            <input type="text" name="lastname" value={present.lastname} onChange={(event)=>handleChange(event)} placeholder="Enter your lastname"/>
                        </label><br/><br/> 
                        <label>
                            Username<br/>
                            {/* <input type="text" name="username" value={props.record.username} onChange={(event)=>handleChange(event)} placeholder="Enter your username"/> */}
                            {/* <input type="text" name="username" value={props.records[parseInt(props.recordId)].username} onChange={(event)=>handleChange(event)} placeholder="Enter your username"/> */}
                            <input type="text" name="username" value={present.username} onChange={(event)=>handleChange(event)} placeholder="Enter your username"/>
                        </label><br/><br/> 
                        <label>
                            Email Address<br/>
                            {/* <input type="text" name="email" value={props.record.email} onChange={(event)=>handleChange(event)} placeholder="Enter your email address"/> */}
                            {/* <input type="text" name="email" value={props.records[parseInt(props.recordId)].email} onChange={(event)=>handleChange(event)} placeholder="Enter your email address"/> */}
                            <input type="text" name="email" value={present.email} onChange={(event)=>handleChange(event)} placeholder="Enter your email address"/>
                            
                        </label><br/><br/> 
                        <label>
                            Password<br/>
                            {/* <input type="password" name="password" value={props.record.password} onChange={(event)=>handleChange(event)} placeholder="Enter your password"/> */}
                            {/* <input type="password" name="password" value={props.records[parseInt(props.recordId)].password} onChange={(event)=>handleChange(event)} placeholder="Enter your password"/> */}
                            <input type="password" name="password" value={present.password} onChange={(event)=>handleChange(event)} placeholder="Enter your password"/>
                            
                        </label><br/><br/> 
                        <label>
                            Address<br/>
                            {/* <input type="text" name="address1" value={props.record.address1} onChange={(event)=>handleChange(event)} placeholder="Enter your Address"/> */}
                            {/* <input type="text" name="address1" value={props.records[parseInt(props.recordId)].address1} onChange={(event)=>handleChange(event)} placeholder="Enter your Address"/> */}
                            <input type="text" name="address1" value={present.address1} onChange={(event)=>handleChange(event)} placeholder="Enter your Address"/>
                        </label><br/><br/> 
                        <label>
                            City<br/>
                            {/* <input type="text" name="city" value={props.record.city} onChange={(event)=>handleChange(event)} placeholder="Enter your City"/> */}
                            {/* <input type="text" name="city" value={props.records[parseInt(props.recordId)].city} onChange={(event)=>handleChange(event)} placeholder="Enter your City"/> */}
                            <input type="text" name="city" value={present.city} onChange={(event)=>handleChange(event)} placeholder="Enter your City"/>
                        </label><br/><br/> 
                        <label>
                            State/Province<br/>
                            {/* <input type="text" name="state" value={props.record.state} onChange={(event)=>handleChange(event)} placeholder="Enter your State"/> */}
                            {/* <input type="text" name="state" value={props.records[parseInt(props.recordId)].state} onChange={(event)=>handleChange(event)} placeholder="Enter your State"/> */}
                            <input type="text" name="state" value={present.state} onChange={(event)=>handleChange(event)} placeholder="Enter your State"/>
                        </label><br/><br/> 
                        <label>
                            Country<br/>
                            {/* <input type="text" name="country" value={props.record.country} onChange={(event)=>handleChange(event)} placeholder="Enter your Country"/> */}
                            {/* <input type="text" name="country" value={props.records[parseInt(props.recordId)].country} onChange={(event)=>handleChange(event)} placeholder="Enter your Country"/> */}
                            <input type="text" name="country" value={present.country} onChange={(event)=>handleChange(event)} placeholder="Enter your Country"/>
                        </label><br/><br/> 
                        <label>
                            Zipcode<br/>    
                            {/* <input type="text" name="zipcode" value={props.record.zipcode} onChange={(event)=>handleChange(event)} placeholder="Enter your zipcode"/> */}
                            {/* <input type="text" name="zipcode" value={props.records[parseInt(props.recordId)].zipcode} onChange={(event)=>handleChange(event)} placeholder="Enter your zipcode"/> */}
                            <input type="text" name="zipcode" value={present.zipcode} onChange={(event)=>handleChange(event)} placeholder="Enter your zipcode"/>
                        </label><br/><br/>
                    </fieldset>
                    :
// Disabled fieldset
                    <fieldset disabled>
                        <label>
                            First Name<br/>
                            <input type="text" name="firstname" value={props.records[parseInt(props.recordId)].firstname} />                    
                        </label><br/><br/>
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
            <span>
                {/* <button onClick={()=>setEditable(!editable)}>To View</button> */}
                <button onClick={(event)=>handleCancel(event)}>Cancel</button>
                <button onClick={(event) => handleSubmit(event)}>Save the changes</button>
            </span>
                :
                // <button onClick={()=>setEditable(!editable)}>To Edit</button>
                <button onClick={editRec}>To Edit</button>
            }
            {/* <Link to="/"><button>Goto Home</button></Link> */}
            <Link to="/"><button onClick={handleBack}>Goto Home</button></Link>
            
            

        </div>
    )
}

const mapStatetoProps = (state) => {
    // let record = state.records[parseInt(state.recordId)]
    // debugger
    // record["errors"] = {"email":'',"password":'',"zipcode":'',"firstname":''}
    
    return {recordId:state.recordId,records:state.records,record:state.activeRecord,
            present:state.edittingrec}
}

const mapDispatchToProps = (dispatch) => {
    return {
    updateRecord:(rec,index)=>dispatch({type:"UPDATE_RECORD","record":rec,"idx":index}),
    // updateRecord:(name,value,index)=>dispatch({type:"UPDATE_RECORD","fieldname":name,"value":value,"idx":index}),
    // cancelRecord:(index)=>dispatch({type:"CANCEL_RECORD","idx":index}),
    cancelRecord:(index)=>dispatch({type:"CANCEL_RECORD","idx":index}),
    resetActiveRec : ()=>dispatch({type:"RESET_ACTIVE_REC"})}
}

export default connect(mapStatetoProps,mapDispatchToProps)(DetailedForm);