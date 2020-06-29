import React from 'react';
import '../Styling.css'
import DetailedForm from './olddetailedform';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import DetailedForm from '../olddetailedform1.js';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Select from 'react-select';



const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: 'white',
      color: state.isSelected ? 'black' : 'grey',
      width: '27%'
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      backgroundColor: 'white',
      borderRadius: '5px',
      width: '27%',
      placeholder: 'Select country'
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
  
      return { ...provided, opacity, transition };
    }
  }

const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );

const validateForm = errors => {
    let valid = true;
    // debugger
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    // debugger
    return valid;
  };

class Form extends React.Component{
//Holding the state
    // state = {count:0,
    state = {
            errors:{"email":'',"password":'',"zipcode":'',"firstname":''},
            edit:false,
            countriesList:[],
            firstname:'',lastname:'',username:'',email:'',password:'',address1:'',
            city:'',state:'',country:'',zipcode:''}
        
    componentDidMount(){
        axios.get(`https://restcountries.eu/rest/v2/all?fields=name`)
        .then(res => {
            let arr = res.data
            let list = [];
            console.log(arr)

            arr.forEach(element => {
                 list.push({"value":element.name,"name":"country","label":element.name})
            })
            this.setState({countriesList : list})
        })
    }

// To record the changes made on each field in the form
    handleChange = (e) => {
        e.preventDefault();
        // debugger
        let name = e.target.name
        let val = e.target.value
        let errors = this.state.errors

        switch (name){
            case 'firstname':
                errors.firstname = val.length<2 ? 'Firstname must atleast 2 characters long' : '';
                break;

            case 'email': 
                errors.email = 
                    validEmailRegex.test(val)
                    ? ''
                    : 'Email is not valid!';
                break;

            case 'password': 
                errors.password = 
                  val.length < 6
                    ? 'Password must be at least 8 characters long!'
                    : '';
                break;
            case 'zipcode':
                errors.zipcode = 
                    val.length < 5
                    ? 'Enter a valid zipcode'
                    : '';
                break;

            default:
                break;
        }

        this.setState((prevState) => {return {...prevState, [name]:val}})
    }

    handleCountry = (option) => {
        // debugger
        this.setState((prevState) => {return {...prevState, "country":option["value"]}})
    }

// To reset all fields in the form
    handleReset = () => {
        this.setState({
            errors:{"email":'',"password":'',"zipcode":'',"firstname":''},
            edit:false,
            firstname:'',lastname:'',username:'',email:'',password:'',address1:'',
            city:'',state:'',country:'',zipcode:''})
    }

// To handle submit 
    handleSubmit = (event) => {
        event.preventDefault();
        // debugger
        console.log(validateForm(this.state.errors))
        if(validateForm(this.state.errors)) {
            console.info('Valid Form')
            // debugger
            let newEntry = {"firstname" : this.state.firstname, "lastname":this.state.lastname, "username":this.state.username, "email":this.state.email,
                        "password":this.state.password, "address1" : this.state.address1, "city":this.state.city,"state":this.state.state, "country" : this.state.country, "zipcode":this.state.zipcode}
            
                        this.setState((prevState) => {return {errors:{"email":'',"password":'',"zipcode":'',"firstname":''},firstname:'',lastname:'',username:'',email:'',password:'',address1:'',city:'',state:'',country:'',zipcode:''}})
            this.props.addRecord(newEntry);
            
          }else{
            
            alert("For successful registration,please fill in as instructed!")
            console.error('Invalid Form')
          }
        // let newEntry = {"firstname" : this.state.firstname, "lastname":this.state.lastname, "username":this.state.username, "email":this.state.email,
        //                 "password":this.state.password, "address1" : this.state.address1, "city":this.state.city,"state":this.state.state, "country" : this.state.country, "zipcode":this.state.zipcode}
        // this.setState((prevState) => {return {count:prevState.count+1,errors:{"email":'',"password":'',"zipcode":'',"firstname":''},firstname:'',lastname:'',username:'',email:'',password:'',address1:'',city:'',state:'',country:'',zipcode:''}})
        // this.props.addRecord(newEntry);
    }

    handleClick = (event, idx) =>{
        // debugger
        console.log(':A row was clicked!', event.target.parentElement.id, idx)
        this.props.detailedRecord(event.target.parentElement.id)
    }

    render(){
        const {errors} = this.state;
        return(
        <div className="FormClass">
             {/* {this.props.recordId ? <DetailedForm />  */}
             {/* {this.props.recordId ? <DetailedForm /> */}
             {/* : */}
            <div className="UserRegistration">
            <h1>User Registration Form</h1>
{/* Form creation */}
            <form className="FormFields" onSubmit={this.handleSubmit}>
                {/* <div className="FieldsList"> */}
                <label>
                    First Name<br/>
                    {/* <input type="text" name="firstname" value={this.state.firstname} onChange={(event)=>this.handleChange(event)} placeholder="Enter your firstname"/> */}
                    <input type="text" name="firstname" value={this.state.firstname}  onChange={(event)=>this.handleChange(event)} placeholder="Enter your firstname" required />
                    {errors.firstname.length >= 0 && 
                        <div className='error'>{errors.firstname}</div>}
                </label><br/>
                <label>
                    Last Name<br/>
                    <input type="text" name="lastname" value={this.state.lastname} onChange={(event)=>this.handleChange(event)} placeholder="Enter your lastname" required />
                </label><br/><br/> 
                <label>
                    Username<br/>
                    <input type="text" name="username" value={this.state.username} onChange={(event)=>this.handleChange(event)} placeholder="Enter a username" required />
                </label><br/><br/> 
                <label>
                    Email Address<br/>
                    <input type="text" name="email" value={this.state.email} onChange={(event)=>this.handleChange(event)} placeholder="Enter your email address" required />
                    {errors.email.length >= 0 && 
                        <div className='error'>{errors.email}</div>}
                </label><br/> 
                <label>
                    Password<br/>
                    <input type="password" name="password" value={this.state.password} onChange={(event)=>this.handleChange(event)} placeholder="Enter password" required/>
                    {errors.password.length >= 0 && 
                        <div className='error'>{errors.password}</div>}
                </label><br/>
                <label>
                    Address<br/>
                    <input type="text" name="address1" value={this.state.address1} onChange={(event)=>this.handleChange(event)} placeholder="Enter your address" required />
                </label><br/><br/> 
                <label>
                    City<br/>
                    <input type="text" name="city" value={this.state.city} onChange={(event)=>this.handleChange(event)} placeholder="Enter your city" required />
                </label><br/><br/> 
                <label>
                    State/Province<br/>
                    <input type="text" name="state" value={this.state.state} onChange={(event)=>this.handleChange(event)} placeholder="Enter your State/Province" required />
                </label><br/><br/> 
                <label>
                    Country<br/>
                    <Select options = {this.state.countriesList} styles={customStyles} onChange={(event)=>this.handleCountry(event)} />
                </label><br/>
                <label>
                    Zipcode<br/>    
                    <input type="text" name="zipcode" value={this.state.zipcode} onChange={(event)=>this.handleChange(event)} placeholder="Enter your zipcode" required/>
                    {errors.zipcode.length >= 0 && 
                        <div className='error'>{errors.zipcode}</div>}
                </label><br/> <br/> 
                <input className="ButtonClass" type="Submit" value="Submit" />
                <button onClick={this.handleReset} >Reset</button>
            {/* </div> */}
            </form><br/> <br/><br/> <br/>
            
{/* Display the records */}
            <div className="DisplayRecords">
                {this.props.records.length > 0 ? 
                <table>
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Username</th>
                            <th>Email address</th>
                            <th>Country</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                
                    {this.props.records.map((record, idx) => (
                        // <Link to ={{pathname:`/form/${idx}`,state:{"onchange":this.handleChange,"validate":validateForm}}} >
                        //  <Link to ={`/form/${idx}`} >
                            <tr id={idx} onClick={(event)=>this.handleClick(event, idx)}>
                                <td>{idx+1}</td>
                                <td>{record["firstname"]}</td>
                                <td>{record["lastname"]}</td>
                                <td>{record["username"]}</td>
                                <td>{record["email"]}</td>
                                <td>{record["country"]}</td>
                                <td onClick={(event)=>this.handleClick(event, idx)}><Link to ={`/form/${idx}`} >View</Link></td>
                            </tr>
                        //  </Link>
                    ))}
                    </tbody>
                </table>
            : null}
            </div>
    </div>
     {/* } */}
        </div>  
    )
        
    }

}

const mapStatetoProps = (state) =>{
    console.log(state.records)
    return {records:state.records,recordId:state.recordId}
}
const mapDispatchToProps = (dispatch) => {
    console.log('dispatch',dispatch)
    return {addRecord:(arr)=>dispatch({type:"ADD_RECORD",record:arr}),detailedRecord:(idx)=>dispatch({type:"ACTIVE_REC",recordId:idx})}
}
export default connect(mapStatetoProps,mapDispatchToProps)(Form);
