function useSaveToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
  return JSON.parse(localStorage.getItem(key));
}
export default useSaveToLocalStorage;
