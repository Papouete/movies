'use strict';

const url = 'https://api.themoviedb.org/3/search/movie';
const apiKey = '60a2e5a69a97fbd2ed6179f0ba108a6a';

const app = new Vue({
    el: '#app',
    data: {
        search: '',
        movies: null,
        totalPages: 0,
        lang: 'en-US',
        selectedPage: 1
    },
    methods: {
        searchMovie(page = 1) {
            if (this.search.length > 3) {
                this.selectedPage = page;
                
                // Envoi d'une requête AJAX vers l'url spécifiée
                fetch(`${url}?api_key=${apiKey}&query=${this.search}&page=${page}&language=${this.lang}`)
                // Récupération de la réponse puis on renvoie la réponse dans le format choisi
                .then(response => response.json())
                // json => la réponse au format choisi
                .then(json => {
                    this.movies = json.results;
                    this.totalPages = json.total_pages;
                });
            }
        }
    }
});

// Exemple d'envoi de requête vers l'API
