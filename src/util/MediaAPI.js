const apiUrl = 'http://media.mw.metropolia.fi/wbma/';

const getAllMedia = () => {
  return fetch(apiUrl + 'media/').then(response => {
    return response.json();
  }).then(json => {
    console.log(json);
    return Promise.all(json.map(pic => {
      return fetch(apiUrl + 'media/' + pic.file_id).then(response => {
        return response.json();
      });
    })).then(pics => {
      console.log(pics);
      return pics;
    });
  });
};

const getSingleMedia = (id) => {
  return fetch(apiUrl + 'media/' + id).then(response => {
    return response.json();
  });
};

const login = (username, password) => {
  const settings = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({username, password}),
  };
  return fetch(apiUrl + 'login', settings).then(response => {
    return response.json();
  });
};

const register = (user) => {
  const settings = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  };
  return fetch(apiUrl + 'users', settings).then(response => {
    return response.json();
  });
};

const getUser = (token) => {
  const settings = {
    headers: {
      'x-access-token': token,
    },
  };
  return fetch(apiUrl + 'users/user', settings).then(response => {
    return response.json();
  });
};

const getProfilepic = () => {
  return fetch(apiUrl + 'tags/profile').then(response => {
    return response.json();
  });
};

const filterPic = (user_id) => {
  return getProfilepic().then((pics) => {
    return pics.filter(pic => {
      let kuva = null;
      if (pic.user_id === user_id) {
        kuva = pic;
      }
      return kuva;
    });
  });
};

export {getAllMedia, getSingleMedia, login, register, getUser, filterPic};