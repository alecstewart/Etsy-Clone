fetch('http://thinksaydo.com/tiyproxy.php?url=https://openapi.etsy.com/v2/listings/active?api_key=h9oq2yf3twf4ziejn10b717i&keywords=' + encodeURIComponent('board games')
  .then(function(response) {
    return response.json()
  })
  .then(function(json) {
    json.results.forEach(function(result){
      var img = document.createElement('img')
      img.setAttribute('src', result.Images[0].url_170x135)

      var div = document.createElement('div')
      div.classList.add('foo')
      div.appendChild(img)

    }
  }))
