var duckJs = document.getElementsByClassName("formulario")[0];
var lista= document.getElementsByClassName("ducks")[0]; 


duckJs.addEventListener("submit", function(e){
e.preventDefault();
lista.innerText = "";
var searchDuck = e.target.busca.value; 

var xhr = new XMLHttpRequest;
xhr.open('GET', 'https://duckling-api.herokuapp.com/api/search?q=' + searchDuck);
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 201) {
       var ducks = JSON.parse(xhr.responseText);
        var ul = document.createElement('ul');
        lista.append(ul);
        ducks.forEach(function(duck) {
            var li = document.createElement('li');
            var img = document.createElement('img');
            var titulo = document.createElement('h3');
            var precio = document.createElement('p');
            img.src = duck.imageUrl;
            titulo = duck.title;
            precio = duck.price;

            ul.append(li);
            li.append(titulo);
            li.append(img);
            li.append(precio);
        });
    }
};
xhr.send();
});

