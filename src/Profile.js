import { Header } from "./Header";

export default function Profile(){
  return(
    <div className="container-fluid">
    <Header />
    <h3 className="text-center"> This is my profile !</h3>
    <div className="container">
      <form>
        <div className="card">
          <img className="profile-pic" src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fdpwalay.com%2Fwp-content%2Fuploads%2F2023%2F12%2Fdp-for-girls.jpg&tbnid=zNmsRuERkbIRPM&vet=12ahUKEwj7hN2kk8uEAxUHmWMGHUKPCogQMygbegUIARCGAQ..i&imgrefurl=https%3A%2F%2Fdpwalay.com%2Fgirls-dp%2F&docid=FOhBjlH73RPYjM&w=600&h=600&q=img%20of%20girl%20for%20dp&ved=2ahUKEwj7hN2kk8uEAxUHmWMGHUKPCogQMygbegUIARCGAQ"></img>

        </div>
      <div>
        <label htmlFor="id" className="form-label">Id</label>
        <input type="number" id="name" className="form-control" ></input>
 
      </div>
      <div>
        <label htmlFor="Name" className="form-label">Name</label>
        <input type="text" id="name" className="form-control" ></input>
 
      </div>
      <div>
        <label htmlFor="Email" className="form-label">Email</label>
        <input type="email" id="email" className="form-control" ></input>
 
      </div>
      <div>
        <label htmlFor="PhoneNo" className="form-label">PhoneNo</label>
        <input type="number" id="number" className="form-control" ></input>
 
      </div>


      </form>
      
      
      
      
      

    </div>
    </div>
    
  )
}