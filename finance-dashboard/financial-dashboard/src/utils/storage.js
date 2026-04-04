export const loadData = () => JSON.parse(localStorage.getItem('tx')) || null;
export const saveData = (data) => localStorage.setItem('tx', JSON.stringify(data));



