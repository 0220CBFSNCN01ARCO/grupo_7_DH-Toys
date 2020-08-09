import React from 'react';

export default function SmallBoxes(props) {
  return (
    <React.Fragment>
      <div className="col-lg-6 mb-4">
        <div className="card bg-info text-white shadow">
          <div className="card-body">
            {props.name}: {props.count}
            
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}