const etudiant = [
    {
    nom: "Dupont",
    prenom: "Lea",
    age: "20",
},
{
    nom: "Test",
    prenom: "a",
    age: 21,

}
];


const { nom, prenom, age } = etudiant
//très utilisé avec les paramètres de fonction
const afficher = ({nom, age}) => {
    return ('${nom} a ${age} ans');
}
console.log(afficher())

const resultat = etudiant.forEach((x)=> {
    console.log(x.nom)
});

const result = etudiant.map((x)=> x.age)
console.log(result);

//JS est monothread, haut vers le bas, pas pratique pour les applications
//Ex: hotel, et clients, passant un par un
//[...test]: pour faire de la concaténation, spread operator, pour copier un tableau, ou un objet.
//fonction fléchée (arrow function) assignée à une variable, pas de mot clé function, pas de this, pas de return si une seule instruction


let age = 20;
if (age >= 18) {
   return 'majeur'
}else 
    return 'mineur'

    age >= 18 ? 'majeur' : 'mineur'
//?: remplace if
//: : remplace else

    //installer: typeScript, npm install -g typescript
    //installer: nodemon, npm install -g nodemon (Version: 20)
    //installer: express, npm install express
    //Créer un serveur
    //Conventional commit, modèle mvc, 
    //dotenv
    //hello world sur express