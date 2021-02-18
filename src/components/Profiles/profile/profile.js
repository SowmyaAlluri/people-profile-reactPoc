import React from 'react'
import './Profile.css'



const Profile = (props) => {

  return (
    <div className="m-2">
      <div >

        <div className="col">
            <div className="card mb-3" >
              <img 
                src={props.picture}
                alt=""
                className="mx-auto d-block "
              />
              <div className="card-body text-center">

                <h3 className="card-title">{props.name}</h3>
                <p className="card-text">{props.gender}</p>
                <p className="card-text">
                  {props.email}
                </p>



              </div>
            </div>
        </div>


      </div>
    </div>
  )
}

export default Profile;