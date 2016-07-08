var myPromise = new Promsie(function(resolve, reject){
  resolve('blah')

  })
  .then(function(response) {
    return JSON.parse(response)
  })
  .then(function(data) {
    console.log(data)
  })
