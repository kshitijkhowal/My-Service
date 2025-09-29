import request from 'supertest';
import app from '../../src/server';
import Personal from '../../src/models/Personal';

describe('Personal Controller', () => {
  describe('POST /api/personal/profile', () => {
    it('should create a new personal profile', async () => {
      const personalData = {
        name: 'John Doe',
        bio: 'Software Developer with 5 years of experience',
        email: 'john.doe@example.com',
        socials: {
          linkedin: 'https://linkedin.com/in/johndoe',
          github: 'https://github.com/johndoe'
        }
      };

      const response = await request(app)
        .post('/api/personal/profile')
        .send(personalData)
        .expect(201);

      expect(response.body.success).toBe(true);
      expect(response.body.data.name).toBe(personalData.name);
      expect(response.body.data.email).toBe(personalData.email);
    });

    it('should return validation error for missing required fields', async () => {
      const personalData = {
        name: 'John Doe'
        // Missing bio and email
      };

      const response = await request(app)
        .post('/api/personal/profile')
        .send(personalData)
        .expect(400);

      expect(response.body.success).toBe(false);
    });
  });

  describe('GET /api/personal/profile', () => {
    it('should get all personal profiles', async () => {
      // Create test data
      await Personal.create({
        name: 'John Doe',
        bio: 'Software Developer',
        email: 'john@example.com',
        socials: {}
      });

      const response = await request(app)
        .get('/api/personal/profile')
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data).toHaveLength(1);
      expect(response.body.data[0].name).toBe('John Doe');
    });
  });

  describe('GET /api/personal/profile/:id', () => {
    it('should get personal profile by ID', async () => {
      const personal = await Personal.create({
        name: 'Jane Doe',
        bio: 'Frontend Developer',
        email: 'jane@example.com',
        socials: {}
      });

      const response = await request(app)
        .get(`/api/personal/profile/${personal._id}`)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data.name).toBe('Jane Doe');
    });

    it('should return 404 for non-existent profile', async () => {
      const fakeId = '507f1f77bcf86cd799439011';
      
      const response = await request(app)
        .get(`/api/personal/profile/${fakeId}`)
        .expect(404);

      expect(response.body.success).toBe(false);
    });
  });
});
