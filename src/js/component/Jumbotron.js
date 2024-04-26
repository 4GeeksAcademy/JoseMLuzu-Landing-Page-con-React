import React from "react";

const Jumbotron = () => {
    return (

        <div className="container mt-5 bg-light rounded pt-5">
        <h2 className="pb-2 fs-1">A Warm Welcome!</h2>
        <div className="row row-cols-1 row-cols-md-1 align-items-md-center g-5 pb-5">
          <div className="col d-flex flex-column align-items-start gap-2">
            <p className="text-body-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.</p>
            <a href="#" className="btn btn-primary btn-lg">Call to action!</a>
          </div>
        </div>
      </div>

    );
}

export default Jumbotron;