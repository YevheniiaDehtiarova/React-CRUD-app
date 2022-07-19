import './app.css';
import { Component, Fragment} from 'react'

class WhoAmI extends Component{
constructor(props){
    super(props);
    this.state = {
        years: 27,
        position: '',
    }
    // this.nextYear = this.nextYear.bind(this);
}

nextYear() {
 this.setState(state => (
  {years: state.years +1 }
 ))
}

commitInputChanges = (e, color) =>{
  this.setState({
    position: e.target.value
  })
 }


render(){
const {name,surname,link} = this.props;
const { position, years} = this.state;


  return (
    <Fragment>
      {/* <button onClick={this.nextYear}>{this.state.text}</button> */}
      <button onClick={() => this.nextYear()}>+++</button>
      <h1>My name is {name} , surname - {surname}, age - {years},
      position - {position} </h1>
      <a href={link}>My profile</a>
      <form>
      <span>Введите должность</span>
      {/* <input type="text" onInput={this.commitInputChanges}/> */}
      <input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')}/>
      </form>
    </Fragment>
  )
}}

function App() {
    return (
      <div className="app">
        <WhoAmI name='John' surname="sdgdrf" link="dgdrf"/>
      </div>
    );
  }
  
  export default App;
  export {WhoAmI};