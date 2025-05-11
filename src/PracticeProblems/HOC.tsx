
function HOC(ChildComponent:any) {
  return function Enhanced(props){return <ChildComponent {...props} />;}
}

function ChildComponent({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <h1>Welcome, User!</h1> : <h1>No Access</h1>}
    </div>
  );
}

export default HOC(ChildComponent);
