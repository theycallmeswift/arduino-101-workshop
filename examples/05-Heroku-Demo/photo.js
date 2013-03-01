module.exports = function getImage(cb) {
  var request = require('request')
    , callback = cb || function() {}
    , tumblr_key = process.env.TUMBLR_KEY
    , post = Math.floor((Math.random()*96))
    , url = "http://api.tumblr.com/v2/blog/programmerryangosling.tumblr.com/posts?api_key=" + tumblr_key + "&type=photo&limit=1&offset=" + post;

  request(url, function(err, res, body) {
    try {
      var image = JSON.parse(body).response.posts[0].photos[0].original_size.url;
      callback(err, "<img src='" + image + "' width='50%' />");
    } catch(e) {
      callback(e);
    }
  });
};
