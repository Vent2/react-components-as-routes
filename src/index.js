import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import About from './About';
import Login from './Login';
import Signup from './Signup';
import Navbar from './Navbar';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';


// const link = {
//   width: "100px",
//   padding: "12px",
//   margin: "0 6px 6px",
//   background: "black",
//   textDecoration: "none",
//   color: "white",
// };

// const Navbar = () => (
//   <div>
//     <NavLink
//       to="/"
//       exact
//       style={link}
//       activeStyle={{
//         background: "darkblue",
//       }}
//     >
//       Home
//     </NavLink>
//     <NavLink
//       to="/about"
//       exact
//       style={link}
//       activeStyle={{
//         background: "darkblue",
//       }}
//     >
//       About
//     </NavLink>
//     <NavLink
//       to="/login"
//       exact
//       style={link}
//       activeStyle={{
//         background: "darkblue",
//       }}
//     >
//       Login
//     </NavLink>
//     <NavLink 
//     to="/signup" 
//     exact
//     style={link}
//     activeStyle={{
//       background: "darkblue",
//     }}
//     > 
//     Signup
//     </NavLink>
//   </div>
// );
// const Home = () => <h1>Home!</h1>;

// const About = () => <h1>Let me tell you a story "About" the time I jumped out of a plane!</h1>

// const Signup = () => (
//   <div>
//     <h2>First time here?</h2>
//     <form>
//       <div>
//         <input type="text" name="username" placeholder="Username"/>
//         <label htmlFor="username">Username</label>
//       </div>
//       <div>
//         <input type="password" name="password" placeholder="Password"/>
//         <label htmlFor="password">Password</label>
//       </div>
//       <input type="submit" value="Signup"/>
//     </form>
//   </div>
// );
   

// const Login = () => (
//     <div>
//       <h2>Welcome Back!</h2>
//       <form>
//         <div>
//           <input type="text" name="username" placeholder="Username"/>
//           <label htmlFor="username">Username</label>
//         </div>
//         <div>
//           <input type="password" name="password" placeholder="Password"/>
//           <label htmlFor="password">Password</label>
//         </div>
//         <input type="submit" value="Login"/>
//       </form>
//     </div>
// );

ReactDOM.render(
  <Router>
    <div>
      <Navbar/>
    <Route exact path='/' component={Home} />
    <Route exact path='/about' component={About} />
    <Route exact path='/login' component={Login} />
    <Route exact path="/signup" component={Signup} />
    </div>
  </Router>,
  document.getElementById('root')
);
