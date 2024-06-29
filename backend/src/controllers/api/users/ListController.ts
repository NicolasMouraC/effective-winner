import { FastifyRequest, FastifyReply } from 'fastify';
import fs from 'fs';
import csvParser from 'csv-parser';

let usersData: Array<any> = [];

export const loadCSVData = (data: Array<any>) => {
  usersData = data;
};


const listController = async (request: FastifyRequest<{ Querystring: { q: string, isTest: string } }>, reply: FastifyReply) => {
  try {
    const query = request.query.q?.toString().toLowerCase() || '';
    const isTestRequest = request.query.isTest?.toString().toLowerCase() === 'true' || false;

    const parseCSV = (): Promise<{ results: any[] }> => {
      return new Promise((resolve, reject) => {
        const results: any[] = [];
        const uploadsDir = isTestRequest ? 'src/uploads/test-file.csv' : 'src/uploads/file.csv';

        if (fs.existsSync(uploadsDir)) {
          fs.createReadStream(uploadsDir)
            .pipe(csvParser())
            .on('data', (data) => {
              results.push(data);
            })
            .on('end', () => {
              resolve({ results });
            })
            .on('error', (error) => {
              reject(error);
            });
        } else {
          return reply.code(200).send({
            data: []
          });
        }
      });
    };
    
    const { results } = await parseCSV();

    loadCSVData(results);

    if (!query) {
      return reply.status(200).send({ data: [ results ] });
    }

    let filteredData = results;
    if (query) {
      filteredData = results.filter(row => {
        return Object.values(row).some(value =>
          (value as any).toString().toLowerCase().includes(query)
        );
      });
    }
    
    return reply.code(200).send({
      data: [ filteredData ]
    });
  } catch (err: any) {
    return reply.code(500).send({
      message: err.message
    });
  }
};

export default listController;
