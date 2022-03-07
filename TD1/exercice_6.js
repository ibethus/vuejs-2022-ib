/**** 6.1 ****/
function Film(titre, synopsys, sortie, nomReal, prenomReal, naissanceReal) {
    this.titre = titre;
    this.synopsys = synopsys;
    this.sortie = sortie;
    this.realisateur = {
        nom: nomReal,
        prenom: prenomReal,
        naissance: naissanceReal
    }
}

/**** 6.2 ****/
var titanic = new Film("Titanic", "Attention aux glaçons", "07/01/1998", "Cameron", "James", "16/08/1954");
var interstellar = new Film("Interstellar", "Vers l'infini et au-delà", " 26 octobre 2014", "Nolan", "Christopher", "30 juillet 1970");
var ligneVerte = new Film("La ligne verte", "Il y a de l'électricité dans l'air", "10 décembre 1999", "Darabont", "Franck", "28 janvier 1959")

var films = [titanic, interstellar, ligneVerte];

function showFilm(film) {
    console.log("************");
    console.log("**** FILM ****");
    console.log(`Titre du film : ${film.titre}`);
    console.log(`Synopsys du film : ${film.synopsys}`);
    console.log(`Année de sortie : ${film.sortie}`);
    console.log("**** REALISATEUR ****");
    console.log(`Nom/Prénom : ${film.realisateur.nom.toUpperCase()}, ${film.realisateur.prenom}`);
    console.log(`Année de naissance : ${film.realisateur.naissance}`);
    console.log("************");
}

films.forEach(f => showFilm(f));

/**** 6.3 ****/
function search_movie(arr, search) {
    return arr.filter(movie => movie.titre.includes(search));
}

console.log("Résultat(s) de la recherche :")
console.log(search_movie(films, "i"));