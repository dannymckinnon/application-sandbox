export const PORT = process.env.PORT || 3000;

const isProduction = process.env.NODE_ENV === 'production';

export const corsOptions = {
  origin: isProduction
    ? 'https://application-sandbox-client.onrender.com'
    : 'http://localhost:5173',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
};
