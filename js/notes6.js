function planetListener () {
var planets = JSON.parse(this.responseText)
console.dir(planets.results[0].name)
}

var starwarsPlanets = new XMLHttpRequest()
console.dir(document.body)

var starwarsPlanets = new XMLHttpRequest()
starwarsPlanets.addEventListener('load', planetListener)
starwarsPlanets.open('GET', 'http://swapi.co/api/planets')
starwarsPlanets.send()

jQuery.ajax({
  url: 'http://swapi.co/api/planets',
  type: 'GET',
  success: funtion(response) {
    console.dir(response)
  }
})
