import PocketBase from "pocketbase";
const pb = new PocketBase("http://127.0.0.1:8090");

export async function getOffres() {
  try {
    let data = await pb.collection("maison").getFullList({
      sort: "-created",
    });
    data = data.map((uneMaison) => {
      uneMaison.img = pb.files.getURL(uneMaison, uneMaison.images_maison);
      return uneMaison;
    });
    return data;
  } catch (error) {
    console.log(
      "Une erreur est survenue en lisant la liste des maisons",
      error
    );
    return [];
  }
}

export async function getAgents() {
  try {
    let data = await pb.collection("Agent").getFullList({
      sort: "-created",
    });
    return data;
  } catch (error) {
    console.log("Une erreur est survenue en lisant la liste des agents", error);
    return [];
  }
}

export async function getAgent(id) {
  try {
    let data = await pb.collection("Agent").getOne(id);
    return data;
  } catch (error) {
    console.log("Une erreur est survenue en lisant l'agent", error);
    return null;
  }
}
export async function allOffresByAgent(artisteId) {
  try {
    let data = await pb.collection("maison").getFullList({
      filter: `agent_maison = "${artisteId}"`,
      expand: "agent_maison",
    });
    data = data.map((maison) => {
      maison.img = pb.files.getURL(maison, maison.images_maison);
      return maison;
    });
    return data;
  } catch (error) {
    console.log(
      "Une erreur est survenue en lisant les évènements d'un agent",
      error
    );
    return [];
  }
}

export async function getOffre(id) {
  try {
    let data = await pb.collection("maison").getOne(id);
    data.img = pb.files.getURL(data, data.images_maison);
    return data;
  } catch (error) {
    console.log("Une erreur est survenue en lisant la maison", error);
    return null;
  }
}

export async function bySurface(s) {
  const maisonSurface = await pb.collection("maison").getFullList({
    filter: `surface_maison > ${s}`,
  });
  maisonSurface.map((maison) => {
    maison.img = pb.files.getURL(maison, maison.images_maison);
    return maison;
  });
  return maisonSurface;
}

export async function byPrice(p) {
  const maisonPrice = await pb.collection("maison").getFullList({
    filter: `prix_maison < ${p}`,
  });
  maisonPrice.map((maison) => {
    maison.img = pb.files.getURL(maison, maison.images_maison);
    return maison;
  });
  return maisonPrice;
}

export async function addOffre(house) {
  try {
    await pb.collection("maison").create(house);
    return {
      success: true,
      message: "Offre ajoutée avec succès",
    };
  } catch (error) {
    console.log("Une erreur est survenue en ajoutant la maison", error);
    return {
      success: false,
      message: "Une erreur est survenue en ajoutant la maison",
    };
  }
}

export async function filterByPrix(prixMin, prixMax) {
  try {
    let data = await pb.collection("maison").getFullList({
      sort: "-created",
      filter: `prix_maison >= ${prixMin} && prix_maison <= ${prixMax}`,
    });
    data = data.map((maison) => {
      maison.img = pb.files.getURL(maison, maison.images_maison);
      return maison;
    });
    return data;
  } catch (error) {
    console.log(
      "Une erreur est survenue en filtrant la liste des maisons par prix",
      error
    );
    return [];
  }
}

export async function filterBySurface(surfaceMin, surfaceMax) {
  try {
    let data = await pb.collection("maison").getFullList({
      sort: "-created",
      filter: `surface_maison >= ${surfaceMin} && surface_maison <= ${surfaceMax}`,
    });
    data = data.map((maison) => {
      maison.img = pb.files.getURL(maison, maison.images_maison);
      return maison;
    });
    return data;
  } catch (error) {
    console.log(
      "Une erreur est survenue en filtrant la liste des maisons par surface",
      error
    );
    return [];
  }
}
export async function setFavori(house) {
  await pb
    .collection("maison")
    .update(house.id, { favoris_maison: !house.favoris_maison });
}
export async function getFavoris() {
  try {
    let data = await pb.collection("maison").getFullList({
      filter: "favoris_maison = true",
    });
    data = data.map((maison) => {
      maison.img = pb.files.getURL(maison, maison.images_maison);
      return maison;
    });
    return data;
  } catch (error) {
    console.log("Une erreur est survenue en lisant les favoris", error);
    return [];
  }
}
