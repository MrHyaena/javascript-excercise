const getTheTitles = function() {

    const books = [
        {
          title: 'Book',
          author: 'Name'
        },
        {
          title: 'Book2',
          author: 'Name2'
        }
      ]

    function getTitle(books) {
        return books.title;
      }
      let titles = books.map(getTitle);
      return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
