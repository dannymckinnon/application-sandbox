const backendUrl =
  import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000/api';

const getFruits = async () => {
  const response = await fetch(backendUrl);
  const { fruits } = await response.json();
  return fruits;
};

export default { getFruits };
