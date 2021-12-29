export const PageCounter = (pages, pagesCount, currPage) => {
  if (pagesCount > 10) {
    if (currPage > 5) {
      for (let i = currPage - 4; i <= currPage + 5; i++) {
        pages.push(i);
        if (i === pagesCount) break;
      }
    } else {
      for (let i = 1; i <= 10; i++) {
        pages.push(i);
        if (i === pagesCount) break;
      }
    }
  } else {
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
  }
};
