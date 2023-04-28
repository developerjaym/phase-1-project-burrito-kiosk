console.log("main js works")

fetch("http://localhost:3000/ingredients").then(response => response.json()).then(json => console.log(json))