export const LocalService = {
  setItem: (key, value) => {
    let dataJson = JSON.stringify(value);
    localStorage.setItem(key, dataJson);
  },

  getItem :(key) => { 
    let dataJson = localStorage.getItem(key);
    return JSON.parse(dataJson);
   },

   removeItem : (key) => { 
    localStorage.removeItem(key);
    },

};
