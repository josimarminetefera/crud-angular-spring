//Esta interface só existe em tempo de desenvolvimento, quando compilado não vai ter classe curso,
//é só para ajudar em tempo de desenvolvimento.
//caso queira ter uma lógica de negócio ai tem que ser class

export interface Curso {
  _id: string;
  nome: string;
  categoria: string;
}
