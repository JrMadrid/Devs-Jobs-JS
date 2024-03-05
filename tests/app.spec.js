const request = require('supertest');
const app = require('../app');

describe('GET /task', () => {
  test('should respond with status code 200 and correct response body', async () => {
    try {
      const response = await request(app).get('/task');
      expect(response.status).toBe(200);
      expect(response.body).toBeDefined(); // Check if response body is defined
      // Add more expect statements to check the response body as needed
    } catch (error) {
      // Handle any errors
      console.error('Error during test:', error);
      throw error; // Rethrow the error to fail the test
    }
  });
});
