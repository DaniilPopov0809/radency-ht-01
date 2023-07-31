export const countCategory = (data, category, param) => {
   return data.reduce((acc, cur) => {
        if (cur.category === category && cur.archive === param) {   
            return acc +=1;
        }
        return acc;
    }, 0)
}