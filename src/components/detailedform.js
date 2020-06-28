import React,{useState} from 'react';
import {connect} from 'react-redux';
import '../Styling.css';


const   DetailedForm = (props) => {

    const [editable,setEditable] = useState(false)

    // const enableStyle = {editable ? {color:blue}:{color:red}}

    const handleChange = () => {

    }

    return(
        <div>Shiva shiva
            {props.recordId}
            {/* <a onClick={() => setEditable(!editable)}> read more</a> */}
            {props.records.map(ele=>ele.firstname)}
            

            <form className="FormFields">
                {editable ?
                    <fieldset>
                        <label>
                            First Name<br/>
                            <input type="text" name="firstname" value={props.records[parseInt(props.recordId)].firstname} onChange={(event)=>handleChange(event)} placeholder="Enter your firstname"/>                    
                        </label><br/>
                    </fieldset>
                    :
                    <fieldset disabled>
                        <label>
                            First Name<br/>
                            <input type="text" name="firstname" value={props.records[parseInt(props.recordId)].firstname} />                    
                        </label><br/>
                    </fieldset>
                }

            </form>

            {editable ?
                <button onClick={()=>setEditable(!editable)}>To View</button>
                :
                <button onClick={()=>setEditable(!editable)}>To Edit</button>
            }

            
            

        </div>
    )
}

const mapStatetoProps = (state) => {
    return {recordId:state.recordId,records:state.records}
}

const mapDispatchToProps = () => {
    
}

export default connect(mapStatetoProps,mapDispatchToProps)(DetailedForm);