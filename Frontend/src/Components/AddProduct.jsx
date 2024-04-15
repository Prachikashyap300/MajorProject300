import React from 'react'


const AddProduct = () => {
  return (
    <div className='container'>
      <div className="row mt-5 p-5">
        <div className="col bg-warning p-2">
          <div className="card w-75 d-block mx-auto">
            <div className="card-header">
              <h2>Welcome to IdeaHub <br /> Login to continue
              </h2>
            </div>
            <div className="card-body">
              <form>
                <div className="from-group">
                  <label>Email</label>
                  <input type="text" className='form-control ' />
                </div>
                <div className="from-group">
                  <label>Password</label>
                  <input type="password" className='form-control mb-4 ' />
                </div>
                <button type='submit' className='btn btn-warning'>Login </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddProduct