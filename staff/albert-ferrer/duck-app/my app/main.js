var duckJs = document.getElementsByClassName("formulario")[0];
var lista= document.getElementsByClassName("ducks")[0]; 
var infoDuck=document.getElementsByClassName("theDuck")[0];
var duckArticle=document.getElementsByClassName("duck__article")[0];


duckJs.addEventListener("submit", function(e){
e.preventDefault();
lista.innerText = "";
var query = e.target.busca.value; 

var xhr = new XMLHttpRequest;
xhr.open('GET', 'https://duckling-api.herokuapp.com/api/search?q=' + query);
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

            li.addEventListener('click', function(){
                searchDuck(duck.id);
                                
            })
        });
    }
};
xhr.send();

});

function searchDuck(duckId){
    var duckRequest = new XMLHttpRequest;
    duckRequest.open('GET', 'http://duckling-api.herokuapp.com/api/ducks/' + duckId);
    duckRequest.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 201) {
            var duck = JSON.parse(duckRequest.responseText);
                printDuck(duck);
            
        }
    };
duckRequest.send();
}

function printDuck(duck){
    duckArticle.innerText="";
    var descripcion = document.createElement('p');
    var imagen = document.createElement('img');
    var titulo = document.createElement('h3');
    var precio = document.createElement('p');

    descripcion=duck.description;
    imagen.src = duck.imageUrl;
    titulo = duck.title;
    precio = duck.price;

    duckArticle.append(titulo, imagen, descripcion, precio);


}


