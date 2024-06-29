import multer from 'fastify-multer';
import { Request } from 'express';
import fs from 'fs';

const createUploadsFolder = () => {
  const uploadsDir = 'src/uploads';
  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
  }
};

createUploadsFolder();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, 'src/uploads');
  },
  filename: function (req, file, cb) {
      cb(null,  'file.csv');
  }
});

const fileFilter = function (req: Request, file: Express.Multer.File, cb: any) {
  if (file.mimetype === 'text/csv' || 
    file.mimetype === 'application/vnd.ms-excel' ||
    file.mimetype === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
    cb(null, true);
  } else {
      cb(new Error('Only CSV or Excel files are allowed!') as any, false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter as any,
});


export default upload;
