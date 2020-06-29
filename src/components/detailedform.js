import React,{useState} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import '../Styling.css';


const  DetailedForm = (props) => {

    const [editable,setEditable] = useState(false)
    const [present,setPresent] = useState({})

    const handleBack = () => {
        setEditable(!editable)
    } 

    const editRec = () => {
        setEditable(!editable)
        setPresent(props.present)
    }

    const handleCancel = () => {
        setEditable(!editable)
        setPresent(props.records[parseInt(props.recordId)])
    }

    const handleSubmit = (event) => {
        alert("Change(s) are saved successfully.")
        props.updateRecord(props.present,props.recordId)
        setEditable(!editable)
    }

    const handleChange = (event) => {
        event.preventDefault();
    if(props.records[parseInt(props.recordId)][event.target.name] !== event.target.value){
        setPresent(props.present[event.target.name] = event.target.value)
    }
}

    return(
        <div className="DetailedClass">
            <form className="FormFields">
            <h1>Detailed Information</h1>
            {present.firstname && <div><Link to="/">Home</Link></div> }
                {editable ?
// Editable fieldset
                    <fieldset>
                        <label>
                            First Name<br/>
                            <input type="text" name="firstname" value={present.firstname} onChange={(event)=>handleChange(event)} placeholder="Enter your firstname"/>                    
                        </label><br/>
                        <label>
                            Last Name<br/>
                            <input type="text" name="lastname" value={present.lastname} onChange={(event)=>handleChange(event)} placeholder="Enter your lastname"/>
                        </label><br/><br/> 
                        <label>
                            Username<br/>
                            <input type="text" name="username" value={present.username} onChange={(event)=>handleChange(event)} placeholder="Enter your username"/>
                        </label><br/><br/> 
                        <label>
                            Email Address<br/>
                            <input type="text" name="email" value={present.email} onChange={(event)=>handleChange(event)} placeholder="Enter your email address"/>
                            
                        </label><br/><br/> 
                        <label>
                            Password<br/>
                            <input type="password" name="password" value={present.password} onChange={(event)=>handleChange(event)} placeholder="Enter your password"/>
                            
                        </label><br/><br/> 
                        <label>
                            Address<br/>
                            <input type="text" name="address1" value={present.address1} onChange={(event)=>handleChange(event)} placeholder="Enter your Address"/>
                        </label><br/><br/> 
                        <label>
                            City<br/>
                            <input type="text" name="city" value={present.city} onChange={(event)=>handleChange(event)} placeholder="Enter your City"/>
                        </label><br/><br/> 
                        <label>
                            State/Province<br/>
                            <input type="text" name="state" value={present.state} onChange={(event)=>handleChange(event)} placeholder="Enter your State"/>
                        </label><br/><br/> 
                        <label>
                            Country<br/>
                            <input type="text" name="country" value={present.country} onChange={(event)=>handleChange(event)} disabled/>
                        </label><br/><br/> 
                        <label>
                            Zipcode<br/>    
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
                <button onClick={(event)=>handleCancel(event)}>Cancel</button>
                <button onClick={(event) => handleSubmit(event)}>Save the changes</button>
            </span>
                :
                <button onClick={editRec}>To Edit</button>
            }
            <Link to="/"><button className="ButtonClass" onClick={handleBack}>Goto Home</button></Link>
            
            

        </div>
    )
}

const mapStatetoProps = (state) => {
    return {recordId:state.recordId,records:state.records,record:state.activeRecord,
            present:state.edittingrec}
}

const mapDispatchToProps = (dispatch) => {
    return {
    updateRecord:(rec,index)=>dispatch({type:"UPDATE_RECORD","record":rec,"idx":index})}
}

export default connect(mapStatetoProps,mapDispatchToProps)(DetailedForm);