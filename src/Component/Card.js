import React from 'react'



const Card = ({record}) => {
  return (
    <div>
       {record.map((item) => (
          <div className='cards' key={item.id}>
            <div className='row'>
              <div className="col-6">
                <div className="card mb-3">
                  <img src="#" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{item.username}</h5>
                    <p className="card-text">
                      {item.role}
                      {item.date}
                      <h6>employee code</h6>
                      <h6>message</h6>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
  )}
export default Card;