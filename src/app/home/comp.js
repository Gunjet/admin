

export function BusinessCard({users}) {
  console.log(users)
  return (
    <div className="business-card">

      <div className="business-card-leftside">
       <div classname="user">
        <h2 className="user-first-name">{users.firstName}</h2>
        <h2 className="user-last-name">{users.lastName}</h2>
        <p>Designer</p>
       </div>
       
       <p>{users.companyName}</p>
       <p>{users.email}</p>
       <p>{users.phoneNumber}</p>
       <p>{users.address}</p>
      </div>
      <div className="business-card-rightside">

      </div>
    </div>
  );
}
