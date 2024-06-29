import files from './files.route';
import users from './users.route';


const api = (app: any, _: any, next: () => void) => {
  app.register(files, { prefix: '/files' });
  app.register(users, { prefix: '/users' });
  next();
};

export default api;
