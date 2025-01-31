import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');
//Question 5 Prendre la liste des données//
/*
try {
    const maisons = await pb.collection('maison').getFullList();
    console.table(maisons);
} catch (e) {
    console.error(e);
}
//Question 6 Afficher une maison avec son id//
try {
    const uneMaison = await pb.collection('maison').getOne('dgg6062j1q3e91s');
    console.table(uneMaison);
} catch (e) {
    console.error(e);
}

//Question 7 Lister les maisons par leurs ordre croissant de leur date de création//
try {
    const maisonsOrdreCroissant = await pb.collection('maison').getFullList({ sort: 'created' });
    console.table(maisonsOrdreCroissant);
} catch (e) {
    console.error(e);
}
//Question 8 Lister les maisons par leurs ordre décroissant de leur date de création//
try {
    const maisonsOrdreDecroissant = await pb.collection('maison').getFullList({ sort: '-created' });
    console.table(maisonsOrdreDecroissant);
} catch (e) {
    console.error(e);
}

//Question 9 Afficher les maisons en favoris//
try {
    const maisonsFavoris = await pb.collection('maison').getFullList({ filter: 'favoris_maison = true' });
    console.table(maisonsFavoris);
} catch (e) {
    console.error(e);
}

//Question 10 Afficher toutes les maisons qui ont une superficie supèrieur à 100m2//

try {
    const maisonsSuperficie = await pb.collection('maison').getFullList({ filter: 'surface_maison > 100' });
    console.table(maisonsSuperficie);
} catch (e) {
    console.error(e);
}



//Question 11 Toutes les maisons avec une superficie de 100 et avec au moins de 2 salles de bains//

try {
    const maisonSuperficieSdb = await pb.collection('maison').getFullList({ filter: 'surface_maison > 100 && nombres_salle_de_bain_maison >= 2' });
    console.table(maisonSuperficieSdb);
} catch (e) {
    console.error(e);
}

//Question 12 Toutes les maisons avec une superficie supèrieur à 100 ou au moins 3 chambres//
try {
    const maisonSuperficieChambre = await pb.collection('maison').getFullList({ filter: 'surface_maison > 100 || nombres_chambre_maison >= 3' });
    console.table(maisonSuperficieChambre);
} catch (e) {
    console.error(e);
}

//Question 13 Afficher toutes les maisons ayant une superficie supèrieur à 100 dans l'odre croissant de leurs prix//
try {
    const maisonSuperficiePrix = await pb.collection('maison').getFullList({ filter: 'surface_maison > 100', sort: 'prix_maison' });
    console.table(maisonSuperficiePrix);
} catch (e) {
    console.error(e);
}

//Question 14 Afficher toutes les maisons par ordre croissant de leur nom//
try {
    const maisonNomOrdre = await pb.collection('maison').getFullList({ sort: 'nom_maison' });
    console.table(maisonNomOrdre);
} catch (e) {
    console.error(e);
}

//Question 15 Afficher la maison ayant un nom donné//
try {
    const maisonNomPrecis = await pb.collection('maison').getFullList({ filter: 'nom_maison = "Garfield House"' });
    console.table(maisonNomPrecis);
} catch (e) {
    console.error(e);
}

//Question 16 Afficher toutes les mais dont le nom est différent de "Garfield House" dans un ordre croissant de leurs noms//
try {
    const maisonOrdreSaufGarfield = await pb.collection('maison').getFullList({ filter: 'nom_maison != "Garfield House"', sort: 'nom_maison' });
    console.table(maisonOrdreSaufGarfield);
} catch (e) {
    console.error(e);
}
*/
