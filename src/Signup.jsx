import React, {Component} from 'react';

class Signup extends Component {
    render() {
        return(
            <div>
            <h2>First time here?</h2>
            <form>
              <div>
                <input type="text" name="username" placeholder="Username"/>
                <label htmlFor="username">Username</label>
              </div>
              <div>
                <input type="password" name="password" placeholder="Password"/>
                <label htmlFor="password">Password</label>
              </div>
              <input type="submit" value="Signup"/>
            </form>
          </div>
            )
    }

}

export default Signup;