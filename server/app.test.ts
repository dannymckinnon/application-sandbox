import request from 'supertest';
import app from './app.js';
import { describe, it, expect } from 'vitest';

describe('API Tests', () => {
  describe('GET /api', () => {
    it('should return a list of fruits', async () => {
      const response = await request(app).get('/api');
      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        fruits: [
          'The home of the HomeBoy',
          'Fresh fuckin Dumpling',
          'Mr. Harrison',
        ],
      });
    });

    it('should have the correct CORS headers', async () => {
      const response = await request(app).get('/api');
      expect(response.headers['access-control-allow-origin']).toBe(
        'http://localhost:5173'
      );
    });
  });

  describe('Invalid Routes', () => {
    it('should return 404 for invalid routes', async () => {
      const response = await request(app).get('/invalid-route');
      expect(response.status).toBe(404);
    });
  });

  // Add more API related tests here
});
