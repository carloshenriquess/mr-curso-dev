test('GET to /v1/status should return 200', async () => {
  const response = await fetch('http://localhost:3000/v1/status');
  expect(response.status).toBe(200);
});

test('GET to /v1/status should return Healthy', async () => {
  const response = await fetch('http://localhost:3000/v1/status');
  const body = await response.json();
  expect(body.status).toBe('Healthy');
});
