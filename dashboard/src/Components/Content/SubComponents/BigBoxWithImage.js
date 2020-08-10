import React from 'react';

export default function BigBoxWithImage(props) {
  return (
    <React.Fragment>
      {/* Last Product in DB */}
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className={`m-0 font-weight-bold text-${props.color}`}>{props.title}</h6>
          </div>
          <div className="card-body">
            <div className="text-center">
              <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: '25rem' }} src={props.image} alt={props.name} />
            </div>
            <p>{props.data}</p>
            <a target="_blank" rel="nofollow" href="/">View detail</a>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

