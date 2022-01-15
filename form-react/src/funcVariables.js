const filterDuplicate = (arr) => {
  return arr.filter((item, index) => arr.indexOf(item) === index);
};

// console.log(filterDuplicate([1, 1, 3, 5, 2, 1, 4, 2]));

const uniqueVal = (arr1, arr2) => {
  return arr1.filter((item) => arr2.indexOf(item) > -1);
};

// console.log(uniqueVal([1, 2], [2, 3]));

const isEmpty = (obj) => {
  for (let key in obj) {
    if (obj[key]) {
      if (typeof obj[key] !== "object") {
        console.log(typeof obj[key]);
        return false;
      } else {
        if (Array.isArray(obj[key])) {
          if (obj[key].length > 0) {
            for (let i = 0; i < obj[key].length; i++) {
              if (obj[key][i]) {
                return true;
              }
            }
          }
        } else {
          isEmpty(obj[key]);
        }
      }
    }
  }
  return true;
};

// console.log(isEmpty({ a: { b: [] } }));
