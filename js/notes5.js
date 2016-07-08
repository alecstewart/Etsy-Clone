var myPromise = new Promsie(function(resolve, reject){

  var github = new XMLHttpRequest()
  github.addEventListener('load', function() { resolve(this.responseText) })
  github.open('GET', 'https://api.github.com')
  github.send()
})
