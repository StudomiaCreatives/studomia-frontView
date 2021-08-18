import React , {Component} from 'react'
import StudentService from '../../../services/StudentService'
import {Field , Button,Caption,Modal} from 'components'
import styled from 'styled-components'

 const Wrapper= styled.section`
                margin-top:100px;
               
                color:#fff
            `
 const FormLayout= styled.div`
                width:50%;
                display: Grid;
                Grid-template: repeat(6,1fr) / 1fr 1fr;
                Grid-gap:5px;
            `
 const FormGroup = styled.div`
         //  width:100px;
 `
 const GenderWrapper=styled.div`
      display:flex;
 `
export default class  StudentRegForm extends Component
 {
      
     constructor(props)
     {
          super(props);

          
          this.onChangeFirstName   = this.onChangeFirstName.bind(this);
          this.onChangeLastName    = this.onChangeLastName.bind(this);
          this.onChangeEmail       = this.onChangeEmail.bind(this);
          this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
          this.onChangeAge         = this.onChangeAge.bind(this);
          this.onChangeGender      = this.onChangeGender.bind(this);
          this.onChangeUsername    = this.onChangeUsername.bind(this);
          this.onChangePassword    = this.onChangePassword.bind(this);
          this.save                = this.save.bind(this);
          this.clear               = this.clear.bind(this);
         
          this.state = {
                            studentId: null,
                            firstName: "",
                            lastName:"",
                            email: "", 
                            phoneNumber: "",
                            age:"",
                            gender:"",
                            username:"",
                            password:"",
                            submitted: false
           };
     }

    
    onChangeFirstName(e) {
        this.setState({
        firstName: e.target.value
    });
    }

    onChangeLastName(e) {
        this.setState({
        lastName: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
        email: e.target.value
        });
    }

     onChangePhoneNumber(e) {
        this.setState({
        phoneNumber: e.target.value
        });
    }
    
    onChangeAge(e){
        this.setState({
        age: e.target.value
        });
    }

    onChangeGender(e){
         this.setState({
         gender : e.target.value
         });
    }

    onChangeUsername(e) {
        this.setState({
        username: e.target.value
        });
    }
    
    onChangePassword(e) {
        this.setState({
        password: e.target.value
        });
    }

    save() {
                    var data = {
                                firstName   : this.state.firstName,
                                lastName    : this.state.lastName,
                                email       : this.state.email,
                                phoneNumber : this.state.phoneNumber,
                                age         : this.state.age,
                                gender      : this.state.gender,
                                username    : this.state.username,
                                password    : this.state.password
                    };

                    StudentService.create(data)
                                        .then(response => {
                                                            this.setState({
                                                            //studentId: response.data.id,
                                                            firstName  : response.data.firstName,
                                                            lastName   : response.data.lastName,
                                                            email      : response.data.email,
                                                            phoneNumber: response.data.phoneNumber,
                                                            age        : response.data.age,
                                                            gender     : response.data.gender,
                                                            username   : response.data.username,
                                                            password   : response.data.password,                                                           
                                                            submitted: true
                                            });
                                            console.log(response.data);
                                        })
                                        .catch(e => {
                                            console.log(e);
                                        });
    }

    clear() {
        this.setState({
                    studentId  : null,
                    firstName  : "",
                    lastName   : "",
                    email      : "",
                    phoneNumber: "",
                    age        : "",
                    gender     : "",
                    username   : "",
                    password   : "",
                    submitted  : false
        });
    }


    render() {
           
             return(
                       <Wrapper>
                           <Caption> Student Reg.</Caption>
                            {this.state.submitted ? (
                                                <div>
                                                    {/* <h4>You submitted successfully!</h4> */}
                                                <Modal onClose={this.clear} closeable isOpen>
                                                    You submitted successfully!
                                                </Modal>

                                                    {/* <Button  value="Add" type="button" className="btn btn-success" onClick={this.clear}> Add</Button> */}
                                                </div>
                                )
                                 : 
                                
                                (
                                              

                                                <FormLayout>
                                                    <FormGroup >
                                                            <Field placeholder="FirstName:" name="firstName" type="text" id="firstName"
                                                              required value={this.state.firstName} onChange={this.onChangeFirstName}
                                                            />
                                               
                                                    </FormGroup>

                                                    <FormGroup className="form-group">
                                                            <Field placeholder="LastName:" name="lastName" type="text" id="lastName"
                                                              required value={this.state.lastName} onChange={this.onChangeLastName}
                                                            />
                                                           
                                                    </FormGroup>

                                                    <FormGroup className="form-group">
                                                            <Field placeholder="Email:" name="email" type="email" id="email"
                                                              required value={this.state.email} onChange={this.onChangeEmail}
                                                            />
                                                           
                                                    </FormGroup>

                                                    <FormGroup className="form-group">
                                                            <Field placeholder="PhoneNumber:" name="phoneNumber" type="text" id="phoneNumber"
                                                              required value={this.state.phoneNumber} onChange={this.onChangePhoneNumber}
                                                            />
                                                            
                                                    </FormGroup>

                                                     <FormGroup className="form-group">
                                                            <Field placeholder="Age:" name="age" type="text" id="age"
                                                              required value={this.state.age} onChange={this.onChangeAge}/>
                                                           
                                                    </FormGroup>
                                                    
                                                    <FormGroup className="form-group">
                                                            <Field placeholder="Username:" name="username" type="text" id="username"
                                                              required value={this.state.username} onChange={this.onChangeUsername}
                                                            />
                                                           
                                                    </FormGroup>

                                                     <FormGroup className="form-group">
                                                            <Field placeholder="Password:" name="password" type="password" id="password"
                                                              required value={this.state.password} onChange={this.onChangePassword}
                                                            />
                                                            
                                                    </FormGroup>

                                                    <FormGroup className="form-group">
                                                            <GenderWrapper>
                                                                <Field label="Male:" name="male" type="radio" id="male"
                                                                required value={this.state.gender} onChange={this.onChangeGender}
                                                                />
                                                            
                                                                <Field label="Female:" name="male" type="radio" id="female"
                                                                required value={this.state.gender} onChange={this.onChangeGender}
                                                                />
                                                            </GenderWrapper>
                                                    </FormGroup>


                                                   


                                                    <Button  value="Save" type="button" onClick={this.save} className="btn btn-success"> Submit </Button>
                                                </FormLayout>
                                )
                            }
     
                       </Wrapper>
                );
    
    }

 }
    // StudentRegForm.propTypes = {
    //          firstName   : PropTypes.string.isRequired,
    //          lastName    : PropTypes.string.isRequired,
    //          email       : PropTypes.string.isRequired,
    //          phoneNumber : PropTypes.string.isRequired,
    //          age         : PropTypes.number,
    //          gender      : PropTypes.oneOf(['male', 'female']),
    //          username    : PropTypes.string.isRequired,
    //          password    : PropTypes.string.isRequired

    // }
       


