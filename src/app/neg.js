

export function BusinessCard(B) {
  return (
    <div className="business-card">

      <div className="business-card-leftside">
       <div className="user">
        <h2 className="user-first-name">{B.firstName}</h2>
        <h2 className="user-last-name">{B.lastName}</h2>
        <p>Designer</p>
       </div>
       
       <p>{B.companyName}</p>
       <p>{B.email}</p>
       <p>{B.phoneNumber}</p>
       <p>{B.address}</p>
      </div>
      <div className="business-card-rightside">

      </div>
    </div>
  );
}
