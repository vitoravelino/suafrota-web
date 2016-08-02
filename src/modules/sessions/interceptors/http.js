import SessionsService from '../service';

export default (http) => {
  // request
  http.interceptors.push((request, next) => {
    const token = SessionsService.getToken();

    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    }

    next();
  });

  // response
  http.interceptors.push((request, next) => {
    next((data) => {
      const json = data.json();

      if (data.headers.Authorization) {
        const token = data.headers.Authorization.split('Bearer ')[1];

        // no idea why using this new token is not working
        SessionsService.setToken(token);
      }

      // 400 token not provided
      // 401 token expired
      if (data.status === 401 &&
          (json.message === 'Token has expired' ||
           json.message === 'Token Signature could not be verified.')) {
        // redirect to /users/sign_in
        SessionsService.destroy();
      }
    });
  });
};

