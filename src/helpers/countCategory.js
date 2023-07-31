export const countCategory = (data, category) => {
   return data.reduce((acc, cur) => {
        if (cur.category === category) {   
            console.log("YEA")
            return acc +=1;
        }
        return acc;
    }, 0)
}