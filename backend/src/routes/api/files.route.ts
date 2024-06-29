import PostFileController from '../../controllers/api/files/PostFileController';
import upload from '../../services/multerConfig';

const filesRoutes = (app: any, _: any, next: () => void) => {
  app.post('/', { preHandler: upload.single('file') }, PostFileController);
  next();
};

export default filesRoutes;
