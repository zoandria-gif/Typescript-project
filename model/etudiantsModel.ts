export class Etudiant {
  id: number;
  nom: string;
  prenom: string;
  numero: string;

  constructor(id: number, nom: string, prenom: string, numero: string) {
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.numero = numero;
  }
}