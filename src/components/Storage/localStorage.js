// Функция setUserCardToStorage(cart) сохраняет объект cart в localStorage под ключом 'userCard'
const setUserCardToStorage = cart => {
  // Преобразование объекта cart в строку с помощью JSON.stringify
  const cartString = JSON.stringify(cart);

  // Сохранение строки в localStorage под ключом 'userCard'
  localStorage.setItem('userCard', cartString);
};

// Функция getUserCardFromStorage() возвращает значение из localStorage, соответствующее ключу 'userCard'
const getUserCardFromStorage = () => {
  // Получение значения из localStorage, соответствующего ключу 'userCard'
  const cartString = localStorage.getItem('userCard');

  // Возвращение значения из localStorage (строка) или null, если значение не найдено
  return cartString && cartString;
};

export { setUserCardToStorage, getUserCardFromStorage };
