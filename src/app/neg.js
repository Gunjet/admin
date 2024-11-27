

  export function BusinessCard({users}) {
    console.log(users)
    return (
      <div className="business-card">
        <h2>{users.firstName} {users.lastName}</h2>
        <p>{users.companyName}</p>
        <p>{users.email}</p>
        <p>{users.phoneNumber}</p>
        <p>{users.address}</p>
      </div>
    );
  }
  