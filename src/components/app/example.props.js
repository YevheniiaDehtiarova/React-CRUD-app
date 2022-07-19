import './app.css';

function WhoAmI({name,surname,link}){
  return (
    <div>
      {/* <h1>My name is {name.firstName} , surname - {surname} </h1> */}
      <h1>My name is {name()} , surname - {surname} </h1>
      <a href={link}>My profile</a>
    </div>
  )
}

function App() {
    return (
      <div className="app">
        <WhoAmI name={{ firstName:'John' }} surname="sdgdrf" link="dgdrf"/>
        <WhoAmI name={() => { return 'Jonh'}} surname="sdgdrf" link="dgdrf"/>
      </div>
    );
  }
  
  export default App;