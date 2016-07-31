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
      // 400 token not provided
      // 401 token expired

      if (data.status === 401 &&
          json.error === 'token_expired') {
        SessionsService.destroy();
      }

      console.log(data);
    });
  });
};

