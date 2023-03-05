module.exports.pre = function(fetch, next, abort) {
  fetch({
    url: "https://si.te/verify",
    method: "GET",
  }).then(async res => {
    const body = await res.json();
    if (body.error) abort("Verification failed. Stopping bruteforce")
    next(extras = {
      cookie: res.headers["set-cookie"]//,
      //username: require("./config.js").username 
    })
  })
}

module.exports.attempt = function(extras, fetch, next, abort) {
}
