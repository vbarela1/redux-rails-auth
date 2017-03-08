//browserHistory.push to whatever url('/')
import { browserHistory } from 'react-router';

const logout = () => {
  return { type: 'LOGOUT' }
  //these actions go to the reducers
}

const login = (id) => {
  return { type: 'LOGIN', id }
  //go to the reducers

}

export const handleLogin = (email, password) => {
  //make ajax call to log user into app
  return(dispatch) => {
    $.ajax ({
    url: '/users/sign_in',
    type: 'POST',
    dataType: 'JSON',
    data: { user: { email, password } }
    }).done( data => {
      dispatch(login(data.id));
      browserHistory.push('/')
    }).fail( data => {
      console.log(data);
    });
  }
}

export const handleLogout = () => {
  //make ajax call to log the user out of the app
  return(dispatch) => {
    $.ajax ({
      url: '/users/sign_out',
      type: 'DELETE',
      dataType: 'JSON'
    }).done( data => {
      dispatch(logout());
      browserHistory.push('/');
    }).fail( data => {
      console.log(data);
    });
  }
}

export const refreshLogin = () => {
  return (dispatch) => {
    $.ajax({
      url: '/api/user_info',
      type: 'GET',
      dataType: 'JSON'
    }).done( user => {
      if(user.id)
        dispatch(login(user.id))
      else
        dispatch(logout());
    }).fail( data => {
      console.log(date);
    });

  }
}

export const handleSignUp = (first_name, last_name, email, password) => {
  return(dispatch) => {
    $.ajax({
      url: '/users',
      type: 'POST',
      dataType: 'JSON',
      data: {user: { first_name, last_name, email, password } }
    }).done( user =>{
      dispatch(login(user.id));
      browserHistory.push('/');
    }).fail(data => {
      console.log(data);
    });
  }
}
