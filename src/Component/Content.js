import React, { useEffect, useState } from 'react';

const Content = () => {
  const [userlist, setuserlist] = useState({
    username: "",
    role: "",
    date: "",
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setuserlist((prevUserlist) => ({
      ...prevUserlist,
      [name]: value,
    }));
  }

  useEffect(() => {
    localStorage.setItem("userlist", JSON.stringify(userlist));
  }, [userlist]);

  const userlistvalue = JSON.parse(localStorage.getItem("userlist") || "null");
  const [record, setRecord] = useState([]);

  const handlesubmit = (e) => {
    e.preventDefault();
    adduser();
  }

  const adduser = () => {
    // Create a new record object with a unique ID
    const newrecord = { username: userlist.username, role: userlist.role, date: userlist.date, id: new Date().getTime().toString() };
    setRecord([...record, newrecord]);
    setuserlist({
      username: "",
      role: "",
      date: "",
    });
  }

  return (
    <div className='content p-3' style={{ backgroundColor: "lightblue" }}>
      <div>
        <div className='cards' record={record}>
          <div className='row'>
            <div className="col-6">
              <div className="card mb-3">
                <img src="#" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title"><input type='text' onChange={handleInput} name='username' value={userlist.username} /></h5>
                  <p className="card-text">
                    <input type='text' onChange={handleInput} name='role' value={userlist.role} />
                    <input type='date' onChange={handleInput} name='date' value={userlist.date} /></p>
                  <h6>employee code</h6>
                  <h6>message</h6>
                  <button className='btn btn-outline-secondary' onClick={handlesubmit}>Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
       </div>
    </div>
  );
}

export default Content;

