export const checkDate = (date, idEl) => {
    try {
      const inputDate = new Date(date);
      const currentDate = new Date();

      currentDate.setHours(0, 0, 0, 0);
      
      if (inputDate < currentDate) {
        const errorMessage = "The entered date is less than the current date.";
        document.querySelector(`#${idEl}`).textContent = errorMessage;
        return false;
      } else {
        document.querySelector(`#${idEl}`).textContent = "";
        return true;
      }
    } catch (error) {
      const errorMessage = "Incorrect date format";
      document.querySelector(`#${idEl}`).textContent = errorMessage;
      return false;
    }
  }
