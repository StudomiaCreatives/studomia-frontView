import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
.card{
  width: 310px;
  height: 127px;
  padding: 15px;
  margin-top: 40px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  box-shadow: 15px 10px 25px 0px  #3fa1a9;
  background: #fff;
  background-image: url('https://github.com/OlgaKoplik/CodePen/blob/master/leaf2.png?raw=true'), url('https://github.com/OlgaKoplik/CodePen/blob/master/leaf.png?raw=true');
  background-repeat: no-repeat, no-repeat;
  background-position: 120% -5%, 200% -40%;
  background-size: 40%, 80%;
  animation: open .5s;
}
@keyframes open {
  0%  {background-position: 166% -25%, 220% -69%;}
  100%{background-position: 120% -5%, 200% -40%;}
}
form{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.field{
  margin: 5px;
  display: flex;
  flex-direction: column;
  }
input[type="file"] {
  display: none;
}

.custom-file-upload {
  border-radius: 50%;
  display: inline-block;
  position: relative;
  padding: 6px;
  cursor: pointer;
  background: linear-gradient(270deg, #3fa1a9, #79f1a4);
  margin-bottom: 25px;
  margin-left:25%;
}

.img-wrap{
  position: relative;
  width: 150px;
  height: 150px;
  overflow: hidden;
  border-radius: 50%;
}
.img-upload:before{
  content: "\f093";
  font-size: 90px;
  position: absolute;
  padding-top: 80px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #63d3a6;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  opacity: 0;
  transition: .5s ease;
  background-color: #fff;
}
.img-upload:hover:before{
 opacity: 1;
}
img {
  width: auto;
  height: 100%;
}

span{
  text-transform: uppercase;
  font-weight: 700;
  color: #676767;
}

input{
  border-radius: 15px;
  border: 1px solid #b7b7b7;
  padding: 5px 5px 5px 10px;
  font-size: 18px;
  transition: 0.2s;
}
input:focus{
  outline: none;
  border: 1px solid #64d488;
}
input::placeholder{
  color: #bebebe;
}
.name{ 
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  color: #676767;
  max-width: 220px;
  overflow-wrap: break-word;
}
.status{
  text-align: center;
  max-width: 220px;
  overflow-wrap: break-word;
}
button{
  position: relative;
  color: #054231;
  letter-spacing: 1px;
  margin: 20px;
  font-size: 18px;
  padding: 10px;
  text-align: center;
  transition: 0.5s;
  border-radius: 10px;
  cursor: pointer;
  border-radius: 25px;
  border: none;
  background: #64d488;
}
.save{
  font-weight: 600;
  left: -20px;
  text-transform: uppercase;
  letter-spacing: 1px;
  width: 20px;
  box-shadow: 20px 0px 40px 0px  #63d3a6;
}
.edit{
  color: #fff;
  width: 180px;
}
button:hover{
  left: 0;
  color: #fff;
  width: 180px;
  box-shadow: 0px 0px 20px 0px  #63d3a6;
}
button:focus{
  outline: none;
}
.lds-ripple {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
}
.lds-ripple div {
  position: absolute;
  border: 4px solid #fff;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}

`
const ImgUpload =({ onChange, src,})=>{
  return(
                <label for="photo-upload" className="custom-file-upload fas">
                            
                            <div className="img-wrap img-upload" >
                                <img for="photo-upload" src={src}/>
                            </div>
               
                          <input id="photo-upload" type="file" onChange={onChange}/> 
                </label>
  );
}
      
    const Edit =({onSubmit,children,})=>
    {
                return(
                    <div className="car">
                            {/* <form onSubmit={onSubmit}>
                                <h1>Profile Card</h1> */}
                                
                                {children}
                                
                                {/* <button type="submit" className="save">Save </button>
                            </form> */}
                    </div>
                );
    }

     class CardProfile extends React.Component {
                    
                            constructor(props) {
                                        super(props);
                                        
                                        this.state = {
                                                file: '',
                                                imagePreviewUrl: 'https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true',
                                                name:'',
                                                status:'',
                                                active: 'edit'
                                        };
                            }

                // photoUpload (e) {
                //     e.preventDefault();
                //     const reader = new FileReader();
                //     const file = e.target.files[0];
                //     reader.onloadend = () => {
                //     this.setState({
                //         file: file,
                //         imagePreviewUrl: reader.result
                //     });
                //     }
                //     reader.readAsDataURL(file);
                // }


                // editName (e) {
                //     const name = e.target.value;
                //     this.setState({
                //     name,
                //     });
                // }
                // editStatus (e) {
                //     const status = e.target.value;
                //     this.setState({
                //     status,
                //     });
                // }
                // handleSubmit(e) {
                //     e.preventDefault();
                //     let activeP = this.state.active === 'edit' ? 'profile' : 'edit';
                //     this.setState({
                //     active: activeP,
                //     })
                // }
  
                render() {
                  //  const {imagePreviewUrl, name, status,  active} = this.state;
                    const {imagePreviewUrl, photoUpload} = this.props;
                
                    return (
                    <div>
                        {
                            // (active === 'edit')  ?
                                 <Wrapper>
                                        {/* <Edit onSubmit={(e)=>this.handleSubmit(e)}> */}
                                                
                                                {/* <ImgUpload onChange={(e)=>this.photoUpload(e)} src={imagePreviewUrl}/> */}
                                                <ImgUpload onChange={photoUpload} src={imagePreviewUrl}/> 
                                        
                                                {/* <Name onChange={(e)=>this.editName(e)} value={name}/>
                                            
                                                <Status onChange={(e)=>this.editStatus(e)} value={status}/> */}
                                        
                                        {/* </Edit> */}
                                    </Wrapper>

                                // :
                        
                                // <Profile onSubmit={(e)=>this.handleSubmit(e)} src={imagePreviewUrl} name={name} status={status}/>
                        
                        }
                        
                    </div>
                    )
                }
}

export default CardProfile;
