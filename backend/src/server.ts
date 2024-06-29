import { build } from '.';

export const start = async () => {
  const app = await build();

  try {
    const IP = process.env.IP || '127.0.0.1';
    const PORT = process.env.PORT || 3000;

    const address = await app.listen({
      host: `${IP}`,
      port: Number(PORT),
    });

    console.log(`server listening on ${address}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
start();
