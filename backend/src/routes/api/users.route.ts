import listController from '../../controllers/api/users/ListController';

const usersRoutes = (app: any, _: any, next: () => void) => {
  app.get('/', listController);
  next();
};

export default usersRoutes;
