import React from 'react';
import SmallBoxes from './SmallBoxes';

export default function BigBoxWithBoxes(props) {
  return (
    <React.Fragment>
      {/* Categories in DB */}
      < div className="col-lg-6 mb-4" >
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">{props.title}</h6>
          </div>
          <div className="card-body">
            <div className="row">
            <SmallBoxes name="Category 1"/>
            <SmallBoxes name="Category 2"/>
            <SmallBoxes name="Category 3"/>
            <SmallBoxes name="Category 4"/>
            <SmallBoxes name="Category 5"/>
            <SmallBoxes name="Category 6"/>
            </div>
          </div>
        </div>
      </div >
    </React.Fragment>
  )

}

