import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');

export async function getOffres() {
    console.log('Lecture des offres');
    try {
        let data = await pb.collection('maison').getFullList({
            sort: '-created',
        });
        data = data.map((uneMaison) => {
            uneMaison.img = pb.files.getURL(uneMaison, uneMaison.images_maison);
            return uneMaison;
        });
        console.log('Liste des maisons', data);
        return data;
    } catch (error) {
        console.log('Une erreur est survenue en lisant la liste des maisons', error);
        return [];
    }
}