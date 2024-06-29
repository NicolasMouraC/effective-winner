import tap from 'tap';
import { build } from '../index';
import { TestInterface } from '../types/testTypes';

tap.test('GET `/` route', async (t: TestInterface) => {
  const fastify = build();

  const response = await fastify.inject({
    method: 'GET',
    url: '/'
  });

  t.equal(response.statusCode, 200, 'returns a status code of 200');
  t.same(response.json(), { message: 'Server running.' }, 'response matches expected output');

  await fastify.close();
});