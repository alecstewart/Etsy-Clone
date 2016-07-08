var etsyData = fetch('http://thinksaydo.com/tiyproxy.php?url=' + encodeURIComponent('https://openapi.etsy.com/v2/listings/active?api_key=h9oq2yf3twf4ziejn10b717i&keywords=' + encodeURIComponent('board games') + '&includes=Images,Shop'))

etsyData = etsyData.then(function(data){
  return data.json()

})

etsyData.then(function(etsySearch){


  etsySearch.results.forEach(function(searchVar){
    console.log(searchVar)
    var bigbox = document.createElement('div')
      bigbox.classList.add('bigbox')

    var img = document.createElement('img')
      img.classList.add('img')
      img.setAttribute('src', searchVar.Images[0].url_570xN)

    var p = document.createElement('p')
      p.classList.add('p')
      p.innerHTML = searchVar.title

    var inlineblock = document.createElement('div')
      inlineblock.classList.add('inlineblock')
      inlineblock.innerHTML = searchVar.Shop.shop_name

    var inlineblock2 = document.createElement('div')
      inlineblock2.classList.add('inlineblock2')
      inlineblock2.innerHTML = searchVar.price

    bigbox.appendChild(img)
    bigbox.appendChild(p)
    bigbox.appendChild(inlineblock)
    bigbox.appendChild(inlineblock2)
    document.getElementById('inside').appendChild(bigbox)

  })

})
