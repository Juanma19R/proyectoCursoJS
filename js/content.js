const API_KEY = 'api_key=1cf50e6248dc270629e802686245c2c8';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY; //API para ordenar por popularidad
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?'+API_KEY; // Concatenamos para usar la funcion de buscar peliculas

const genres = [ // Array con los generos de la API
    {
        "id": 28,
        "name": "Action"
    },
    {
        "id": 12,
        "name": "Adventure"
    },
    {
        "id": 16,
        "name": "Animation"
    },
    {
        "id": 35,
        "name": "Comedy"
    },
    {
        "id": 80,
        "name": "Crime"
    },
    {
        "id": 99,
        "name": "Documentary"
    },
    {
        "id": 18,
        "name": "Drama"
    },
    {
        "id": 10751,
        "name": "Family"
    },
    {
        "id": 14,
        "name": "Fantasy"
    },
    {
        "id": 36,
        "name": "History"
    },
    {
        "id": 27,
        "name": "Horror"
    },
    {
        "id": 10402,
        "name": "Music"
    },
    {
        "id": 9648,
        "name": "Mystery"
    },
    {
        "id": 10749,
        "name": "Romance"
    },
    {
        "id": 878,
        "name": "Science Fiction"
    },
    {
        "id": 10770,
        "name": "TV Movie"
    },
    {
        "id": 53,
        "name": "Thriller"
    },
    {
        "id": 10752,
        "name": "War"
    },
    {
        "id": 37,
        "name": "Western"
    }
];

const main = document.getElementById('main');
const form =  document.getElementById('form');
const search = document.getElementById('search');
const tagsEl = document.getElementById('tags');

const prev = document.getElementById('prev');
const next = document.getElementById('next');
const current = document.getElementById('current');

let currentPage = 1; 
let nextPage = 2;
let prevPage = 3;
let lastUrl = '';
let totalPages = 100;

let selectedGenre = [];
setGenre();
function setGenre() { // Función para mostrar todos los generos a filtrar
    tagsEl.innerHTML= '';
    $(tags).fadeOut("slow", function() {
        $(tags).fadeIn(1000);
    });
    genres.forEach(genre => {
        const t = document.createElement('div');
        t.classList.add('tag');
        t.id=genre.id;
        t.innerText = genre.name;
        $(t).on('click', () => {
            if(selectedGenre.length == 0){
                selectedGenre.push(genre.id);
            }else{
                if(selectedGenre.includes(genre.id)) {
                    selectedGenre.forEach((id, idx) => {
                        if(id == genre.id) {
                            selectedGenre.splice(idx, 1);
                        }
                    });
                }else{
                    selectedGenre.push(genre.id);
                }
            }
            console.log(selectedGenre);
            getMovies(API_URL + '&with_genres='+encodeURI(selectedGenre.join(',')));
            highlightSelection();
        });
        tagsEl.append(t);
    });
}

function highlightSelection() { // Esta funcion deja marcado el boton de filtros elegido
    const tags = document.querySelectorAll('.tag');
    tags.forEach(tag => {
        tag.classList.remove('highlight');
    });
    clearBtn()
    if(selectedGenre.length !=0) {   
        selectedGenre.forEach(id => {
            const hightlightedTag = document.getElementById(id);
            hightlightedTag.classList.add('highlight');
        });
    }
}

function clearBtn() { // Botón para limpiar lo filtrado
    let clearBtn = document.getElementById('clear');
    if(clearBtn) {
        clearBtn.classList.add('highlight');
    }else{          
        let clear = document.createElement('div');
        clear.classList.add('tag','highlight');
        clear.id = 'clear';
        clear.innerText = 'Clear x';
        $(clear).on('click', () => {
            selectedGenre = [];
            setGenre();            
            getMovies(API_URL);
        });
        tagsEl.append(clear);
    }
}

getMovies(API_URL);

function getMovies(url) { // Funcion para obtener las peliculas de la url
    lastUrl = url;
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results);
        if(data.results.length !== 0) {
            showMovies(data.results);
            currentPage = data.page;
            nextPage = currentPage + 1;
            prevPage = currentPage - 1;
            totalPages = data.total_pages;
            current.innerText = currentPage;
            if(currentPage <= 1) {
                prev.classList.add('disabled');
                next.classList.remove('disabled')
            }else if(currentPage>= totalPages) {
                prev.classList.remove('disabled');
                next.classList.add('disabled');
            }else{
                prev.classList.remove('disabled');
                next.classList.remove('disabled');
            }
            tagsEl.scrollIntoView({behavior : 'smooth'})
        }else{
            main.innerHTML= `<h1 class="no-results">No Results Found</h1>`;
            $("h1").css({ "color": "#053742" });
        }
    });
}


function showMovies(data) { // Funcion para mostrar las peliculas
    main.innerHTML = '';

    data.forEach(movie => { // Se crea una card para mostrar la pelicula en patalla
        const {title, poster_path, vote_average, overview, id} = movie;
        $("#main").append(`
            <div class="movie">
                <img src="${poster_path? IMG_URL+poster_path: "http://via.placeholder.com/1080x1580" }" alt="${title}">
                <div class="movie-info">
                    <h3>${title}</h3>
                    <span class="${getColor(vote_average)}">${vote_average}</span>
                </div>
                <div class="overview">
                    <h3>Overview</h3>
                    ${overview}
                    <br/> 
                    <button class="know-more" id="${id}">Know More</button
                </div>
            </div>`);
            $(".know-more").css({ "borderBottom": "5px solid #ccc" });
            document.getElementById(id).addEventListener('click', () => {
            console.log(id)
            openNav(movie)
            });
    });
}

const overlayContent = document.getElementById('overlay-content'); 
function openNav(movie) { // Al entrar a una pelicula se abre un modal mostrando los trailers de la pelicula elegida
    let id = movie.id;
    fetch(BASE_URL + '/movie/'+id+'/videos?'+API_KEY).then(res => res.json()).then(videoData => {
        console.log(videoData);
        if(videoData) {
            document.getElementById("myNav").style.width = "100%";
            if(videoData.results.length > 0) {
                let embed = [];
                videoData.results.forEach((video) => {
                    let {name, key, site} = video
                    if(site == 'YouTube') {
                        embed.push(`
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/${key}" title="${name}" class="embed hide" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);}
                });      
                let content = `
                <h1 class="no-results">${movie.original_title}</h1>
                <br/>        
                ${embed.join('')}`;
                overlayContent.innerHTML = content;
                activeSlide=0;
                showVideos();
            }else{
                overlayContent.innerHTML = `<h1 class="no-results">No Results Found</h1>`
            }
        }
    });
}

function closeNav() { // Cierra cuando hagan clic en el símbolo "x" dentro de la modal
    document.getElementById("myNav").style.width = "0%";
}

let activeSlide = 0;
let totalVideos = 0;

function showVideos() { // Funcion para mostrar los videos en la modal
    let embedClasses = document.querySelectorAll('.embed');

    totalVideos = embedClasses.length; 
    embedClasses.forEach((embedTag, idx) => {
        if(activeSlide == idx){
            embedTag.classList.add('show');
            embedTag.classList.remove('hide');
        }else{
            embedTag.classList.add('hide');
            embedTag.classList.remove('show');
        }
    });
}

const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

$(leftArrow).on('click', () => { // Flecha para volver al trailer anteior de la pelicula
    if(activeSlide > 0){ 
        activeSlide--;
    }else{
        activeSlide = totalVideos -1;
    }
    showVideos();
});

$(rightArrow).on('click', () => { // Flecha para ir al siguiente trailer de la pelicula
    if(activeSlide < (totalVideos -1)){
        activeSlide++;
    }else{
        activeSlide = 0;
    }
    showVideos()
});


function getColor(vote) { // Funcion para darle color a los puntajes
    if(vote>= 8){
        return 'green'
    }else if(vote >= 5){
        return "orange"
    }else{
        return 'red'
    }
}

$(form).submit((e) => { // Submit de la busqueda de peliculas
    e.preventDefault();
    const searchTerm = search.value;
    selectedGenre=[];
    setGenre();
    if(searchTerm) {
        getMovies(searchURL+'&query='+searchTerm);
    }else{
        getMovies(API_URL);
    }
});

$(prev).on('click', () => { // Boton paginador left
    if(prevPage > 0){
        pageCall(prevPage);
    }
});

$(next).on('click', () => { // Boton paginador right
    if(nextPage <= totalPages){
        pageCall(nextPage);
    }
});

function pageCall(page) { // Funcion para llamar a la siguiente pagina
    let urlSplit = lastUrl.split('?');
    let queryParams = urlSplit[1].split('&');
    let key = queryParams[queryParams.length -1].split('=');
    if(key[0] != 'page'){
        let url = lastUrl + '&page='+page
        getMovies(url);
    }else{
        key[1] = page.toString();
        let a = key.join('=');
        queryParams[queryParams.length -1] = a;
        let b = queryParams.join('&');
        let url = urlSplit[0] +'?'+ b
        getMovies(url);
    }
}