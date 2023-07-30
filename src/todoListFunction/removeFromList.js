export const removeFromList = (data, id) => {
    const index = data.findIndex((el) => (el.id === id));
    if(index !== -1) {
      data.splice(index, 1);
      return true;
    }
    return false;
  };