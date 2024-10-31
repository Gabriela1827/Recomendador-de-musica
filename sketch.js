let campoIdade;
let campoMpb;
let campoPop;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de musicas");
  createSpan("Sua idade:");
  campoIdade = createInput("12");
  campoMpb = createCheckbox("Gosta de mpb?");
  campoPop = createCheckbox("Gosta de pop?");
}

function draw() {
  background("#824D8B");
  let idade = campoIdade.value();
  let gostaDeMpb = campoMpb.checked();
  let gostaDePop = campoPop.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeMpb, gostaDePop);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeMpb, gostaDePop) {
  if (idade >= 12) {
    if (idade >= 20) {
      return "Oceano-Djavan";
    } else {
      if (idade >= 17) {
        if(gostaDeMpb || gostaDePop) {
          return "Tenha calma/Sem voce-Djavan";          
        } else{
         return "Snap-Linn";
        }
      } else {
        if (gostaDeMpb) {
          return "O velho e a flor-Toquinho,Vinicius de Moraes";
        } else {
          return "Oceano-Djavan";
        }
      }
    }
  } else {
    if (gostaDeMpb) {
      return "Water-Tyla";
    } else {
      return "Die With A smile-Bruno Mars e Lady Gaga";
    }
  }
}
