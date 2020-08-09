import React from 'react';
import SmallBoxes from './SmallBoxes';

export default function BigBoxWithBoxes(props) {
  console.log(props.categories)
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
            {props.categories.map((category, i)=>{
               return <SmallBoxes key={i} name={category.name} count={category.count}/>
            })}
            </div>
          </div>
        </div>
      </div >
    </React.Fragment>
  )

}

