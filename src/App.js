import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {getAllMedia} from './util/MediaAPI';
import Front from './views/Front';
import Single from './views/Single';
import Nav from './components/Nav';
import Login from './views/Login';
import Profile from './views/Profile';
import Logout from './views/Logout';
import './App.css';
import Logo from './ECHO LOGO.png';
import {Link} from 'react-router-dom';
import Upload from './views/Upload';
import Button from '@material-ui/core/Button';
import User from './User.png';


class App extends Component {

  state = {
    picArray: [],
    user: null,
  };

  setUser = (user) => {
    this.setState({user});
  };

  setUserLogout = (user) => {
    this.setState({user});
  };

  checkLogin = () => {
    return this.state.user !== null;
  };

  updateImages = () => {
    getAllMedia().then((pics) => {
      console.log(pics);
      this.setState({picArray: pics});
    });
  };

  componentDidMount() {
    this.updateImages();
  }

  render() {
    return (
        <Router basename='/ECHO'>
          <div className='container'>
           <ul className='palkit'>

            <form className={'ylapalkki'} >

                <input className="hakupalkki" placeholder="Search"/>

                <button className="hakunappi">Search</button>

            </form>

           <div className='ylapalkki'>
            <li>
              <Link to="/" >
                <img src={Logo} alt="logo" className='logo' />
              </Link>
            </li>

           </div>

            <div className="ylapalkki">
              <li>
                {this.state.user !== null &&
                <Button component={Link} to={'/upload'} id="upload">Upload

                </Button>
                }
              </li>
              {this.state.user !== null &&
              <li><img id="sprofilepic" src={User} alt="profile"/></li>
              }
            </div>
           </ul>


              <Nav  checkLogin={this.checkLogin}/>
            <Route  path="/home" render={(props) => (
                <Login {...props} setUser={this.setUser}/>
            )}/>

            <Route path="/single/:id" component={Single}/>

            <Route path="/profile" render={(props) => (
                <Profile {...props} user={this.state.user}/>
            )}/>

            <Route exact path="/" render={(props) => (
                <Front {...props} picArray={this.state.picArray}/>
            )}/>

            <Route path="/logout" render={(props) => (
                <Logout {...props}  setUserLogout={this.setUserLogout}/>
            )}/>


            <Route path="/upload" render={(props) => (
                <Upload {...props} updateImages={this.updateImages}/>
            )}/>



          </div>





        </Router>
    );





  }
}



export default App;