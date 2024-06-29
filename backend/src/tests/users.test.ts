import tap from 'tap';
import { build } from '../index';
import fs from 'fs';
import path from 'path';
import { TestInterface } from '../types/testTypes';

const mockData = [
  { name: 'Alice', age: '30', city: 'Wonderland' },
  { name: 'Bob', age: '25', city: 'Builderland' },
  { name: 'Charlie', age: '35', city: 'Chocolate Factory' }
];

tap.beforeEach(() => {
  const csvContent = 'name,age,city\nAlice,30,Wonderland\nBob,25,Builderland\nCharlie,35,Chocolate Factory\n';
  fs.writeFileSync(path.join(__dirname, '../uploads/test-file.csv'), csvContent);
});

tap.afterEach(() => {
  fs.unlinkSync(path.join(__dirname, '../uploads/test-file.csv'));
});

tap.test('GET `/list` route without query', async (t: TestInterface) => {
  const fastify = build();

  const response = await fastify.inject({
    method: 'GET',
    url: '/api/users?isTest=true'
  });

  t.equal(response.statusCode, 200, 'returns a status code of 200');
  t.same(response.json(), { data: [mockData] }, 'response matches expected output');

  await fastify.close();
  t.end();
});

tap.test('GET `/list` route with query', async (t: TestInterface) => {
  const fastify = build();

  const response = await fastify.inject({
    method: 'GET',
    url: '/api/users?q=alice&isTest=true'
  });

  t.equal(response.statusCode, 200, 'returns a status code of 200');
  t.same(response.json(), { data: [[mockData[0]]] }, 'response matches expected output');

  await fastify.close();
  t.end();
});

tap.test('GET `/list` route with non-matching query', async (t: TestInterface) => {
  const fastify = build();

  const response = await fastify.inject({
    method: 'GET',
    url: '/api/users?q=nonexistent&isTest=true'
  });

  t.equal(response.statusCode, 200, 'returns a status code of 200');
  t.same(response.json(), { data: [[]] }, 'response matches expected output');

  await fastify.close();
  t.end();
});
