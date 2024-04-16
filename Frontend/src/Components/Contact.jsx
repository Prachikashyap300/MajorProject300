import React from "react";
import im from "../assets/bg.jpg";

const Contact = () => {
  return (
    <div className="container">
      
          <h2 className="text-white text-center m-5 font ">Feel free to contact</h2>
          <div className="card w-75 d-block mx-auto">
            <div className="card-body">
              <div className="row g-5">
                <div className="col-lg-4 p-3 text-white">
                  <p className="font-2" >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Labore rem similique harum magnam commodi placeat quod
                    tempore, odit consequatur eos! Dolore quidem assumenda ea
                    necessitatibus, itaque perferendis nihil dolorem ullam.
                  </p>
                </div>
                <div className="col-lg-8">
                  <form>
                    <div className="from-group">
                      <input
                        placeholder="Name"
                        type="text"
                        className="form-control font-2 mb-4 inp bg-dark text-white "
                      />
                    </div>
                    <div className="from-group">
                      <input
                        placeholder="Email"
                        type="email"
                        className="form-control font-2 inp mb-4 bg-dark text-white "
                      />
                    </div>
                    <div className="from-group">
                      <input
                        placeholder="Message"
                        type="text-box"
                        className="form-control font-2 inp mb-4 bg-dark text-white message-box "
                      />
                    </div> 

                    <button type="submit" className="font-2 w-100 button">
                      Login{" "}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        
    </div>
  );
};

export default Contact;
