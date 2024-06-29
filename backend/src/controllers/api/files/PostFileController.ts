import { Request } from 'express';
import { FastifyReply } from 'fastify';
import fs from 'fs/promises';

const PostFileController = async (request: Request, reply: FastifyReply) => {
  try {
    if (!request?.file?.path) {
      return reply.code(400).send({ error: 'No file uploaded.' });
    }

    const filePath = request.file.path;

    let data;
    try {
      data = await fs.readFile(filePath, 'utf8');
    } catch (err) {
      return reply.code(500).send({ error: 'Error reading file.' });
    }

    const modifiedData = data.replace(/;/g, ',');

    try {
      await fs.writeFile(filePath, modifiedData, 'utf8');
    } catch (err) {
      return reply.code(500).send({ error: 'Error saving file.' });
    }

    return reply.code(200).send({
      message: 'The file was uploaded successfully.'
    });

  } catch (err: any) {
    return reply.code(500).send({
      message: err.message
    });
  }
};

export default PostFileController;
