const link = 'https://636b6df9ad62451f9fb14be5.mockapi.io/api/v1/goods';

const getAllProducts = async () => {
  const res = await fetch(link);
  return res.ok && res.json();
};

export { getAllProducts };
