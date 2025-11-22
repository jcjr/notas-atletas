class NotasAtletas {

   constructor(atletas) {
     this.atletas = atletas;
   }

   mostrarInformacoes() {
      let atletas = this.atletas.forEach(function(atleta) {
         let ordenacao = atleta.notas.sort(function(acumulador, valor) {
            return acumulador - valor;
         });
         ordenacao.slice(1, 4);
         let somatorio = ordenacao.reduce(function(acumulador, valor) {
            return acumulador + valor;
         }, 0);

         let media = somatorio / ordenacao.length;

         console.log(`Atleta: ${atleta.nome}\nNotas obtidas: ${ordenacao}\nMédia Válida: ${media}\n`);
      });
   }

}

// Dados de entrada
let atletas = [
      {
         nome: "Cesar Abascal",
         notas: [10, 9.34, 8.42, 10, 7.88]
      },
      {
         nome: "Fernando Puntel",
         notas:  [8, 10, 10, 7, 9.33]
      },
      {
         nome: "Daiane Jelinsky",
         notas: [7, 10, 9.5, 9.5, 8]
      },
      {
         nome: "Bruno Castro",
         notas: [10, 10, 10, 9, 9.5]
      }
   ];

   let notasAtletas = new NotasAtletas(atletas);   
   notasAtletas.constructor(atletas);
   notasAtletas.mostrarInformacoes();