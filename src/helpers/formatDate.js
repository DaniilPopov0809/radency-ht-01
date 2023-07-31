export const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const day = date.getDate().toString();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
  
    return `${day}/${month}/${year}`;
  };

