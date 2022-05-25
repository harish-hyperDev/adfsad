function _idTodate(data) {
    let dict = {};
    data.movies.forEach(function (n) {
      dict[n.movie_id] = n.movie_release_date;
    });
    return dict;
  }