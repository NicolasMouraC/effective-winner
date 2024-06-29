import tap from 'tap';
import { build } from '../index';
import path from 'path';
import fs from 'fs';
import supertest from 'supertest';

const filePath = path.join(__dirname, '../tests/testFiles/test-file.csv');

tap.beforeEach(() => {
  if (!fs.existsSync(filePath)) {
    const data = 'dummy data for test-file.csv';
    fs.writeFileSync(filePath, data);
  }
});

tap.test('POST `/api/files` route', async (t) => {
  const fastify = build();
  await fastify.ready();
  const request = supertest(fastify.server);

  t.ok(fs.existsSync(filePath), 'File should exist');

  const response = await request
    .post('/api/files')
    .attach('file', filePath);

  t.equal(response.status, 200, 'returns a status code of 200');
  t.same(response.body, { message: 'The file was uploaded successfully.' }, 'response matches expected output');

  await fastify.close();
  t.end();
});

tap.test('POST `/api/files` route with missing file', async (t) => {
  const fastify = build();
  await fastify.ready();
  const request = supertest(fastify.server);

  const response = await request
    .post('/api/files')
    .field('file', '');

  t.equal(response.status, 400, 'returns a status code of 400');

  await fastify.close();
  t.end();
});
