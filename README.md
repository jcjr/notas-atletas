# Projeto de certificação 1 - Pontuação dos atletas

Este repositório contém um pequeno projeto em **JavaScript** responsável por processar uma matriz de objetos contendo informações de atletas e suas respectivas notas atribuídas por uma banca de jurados.

## Objetivo do Projeto

Receber uma matriz de objetos chamada `atletas`, onde cada objeto representa um atleta com:
- **nome**: nome do atleta;
- **notas**: array de números representando as notas dadas pelos jurados.

O script `notas-atletas.js` realiza três operações principais:
1. **Exibir o nome do atleta**.
2. **Ordenar as notas em ordem crescente**.
3. **Calcular a média das notas**, desconsiderando após a ordenação:
   - a menor nota;
   - a maior nota.

## Funcionamento Geral

O algoritmo segue a lógica abaixo:

1. Percorre o array `atletas`.
2. Para cada atleta:
   - Ordena as notas usando `sort()`.
   - Utiliza `slice(1, 4)` para obter apenas as notas intermediárias — excluindo a menor e a maior.
   - Calcula a média com `reduce()`.
   - Exibe os dados formatados no console.

## Exemplo de estrutura de dados
```js
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
```

## Resultado Gerado
Para cada atleta o sistema exibirá algo como:
```
Atleta: Cesar Abascal
Notas ordenadas: 7.88,8.42,9.34,10,10
Média válida: 9.128
```

## Finalidade
Este projeto é ideal para estudos de:
- Manipulação de arrays;
- Ordenação de dados;
- Cálculo de médias;
- Boas práticas no uso de objetos em JavaScript.
