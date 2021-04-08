// Variáveis
var tempoInicial = 0, tempoAtual = 0, tempoNovo = 1;
var tempo = 0, tempo2 = 0; 
var pontos = 0, vidas = 100;
var intervaloFacil = 1200, intervaloMedio = 800, intervaloDificil = 500, intervaloJogo;
var listaSetas = [], listaY = [];
var numS1 = 0, numS2 = 0, numS3 = 0, numS4 = 0;

// Música de fundo
playSound("Musica-de-Fundo.mp3", true);

// Menu inicial
onEvent("botIniciar", "click", function() {
  playSound("sound://category_retro/retro_game_enemy_spawn_7.mp3", false);
  setScreen("Menu");  
  hideElement("botS1");
  hideElement("botS2");
  hideElement("botS3");
  hideElement("botS4");
});

// Tela de dificuldade
onEvent("botHoraDeDançar", "click", function() {
  playSound("sound://category_retro/retro_game_enemy_spawn_7.mp3", false);
  setScreen("Dificuldade");
});

// Tela feedback
onEvent("botFeedback", "click", function() {
  playSound("sound://category_retro/retro_game_enemy_spawn_7.mp3", false);
  setScreen("Feedback");
});

// Tela Instruções
onEvent("botInstrucoes","click",function(){
  playSound("sound://category_retro/retro_game_enemy_spawn_7.mp3", false);
  setScreen("Instrucoes");
});

// Tela créditos
onEvent("botCréditos", "click", function( ) {
  playSound("sound://category_retro/retro_game_enemy_spawn_7.mp3", false);
  setScreen("Créditos");
});

// Voltar do crédito para o menu
onEvent("botVoltar1", "click", function( ) {
  voltarMenu();
});

// Voltar do feedback para o menu
onEvent("botVoltar2","click",function(){
  voltarMenu();
});

// Voltar da instruções para o menu
onEvent("botVoltar6","click",function(){
  voltarMenu();
});

// Voltar da dificuldade para o menu
onEvent("botVoltar5","click",function(){
  voltarMenu();
});

// Voltar do game over para o menu
onEvent("botVoltar4","click",function(){
  voltarMenu();
  playSound("Musica-de-Fundo.mp3", true);
});

// Começar o jogo no fácil
onEvent("botFacil","click",function(){
  playSound("sound://category_retro/retro_game_enemy_spawn_7.mp3", false);
  setScreen("Jogo");
  hideElement("imageError");
  stopSound("Musica-de-Fundo.mp3");
  showElement("marcador");
  chamarDificuldade();
});

// Começar o jogo no médio
onEvent("botMedio","click",function(){
  playSound("sound://category_retro/retro_game_enemy_spawn_7.mp3", false);
  setScreen("Jogo");
  hideElement("imageError");
  stopSound("Musica-de-Fundo.mp3");
  showElement("marcador");
  chamarDificuldade();
});

// Começar o jogo no difícil
onEvent("botDificil","click",function(){
  playSound("sound://category_retro/retro_game_enemy_spawn_7.mp3", false);
  setScreen("Jogo");
  hideElement("imageError");
  stopSound("Musica-de-Fundo.mp3");
  showElement("marcador");
  chamarDificuldade();
});

// Tentativa de jogar com o teclado
/*onEvent("Jogo", "keydown", function(event) {
  if (event.key == "a") {
    setChecked("botS1", true);
  }
  if (event.key == "w") {
    setChecked("botS2", true);
  }
  if (event.key == "d") {
    setChecked("botS3", true);
  }
  if (event.key == "s") {
    setChecked("botS4", true);
  }
  console.log(event.key);
});*/

// Funções usadas
// Volta para tela de menu
function voltarMenu() {
  playSound("sound://category_retro/retro_game_enemy_spawn_7.mp3", false);
  setScreen("Menu");
}

// Chamar dificuldade
function chamarDificuldade(){
  playSound("sound://category_retro/start_game.mp3", false);
  playSound("Musica-de-Jogo.mp3", false);
  hideElement("botComecar");
  hideElement("botVoltar3");
  showElement("botS1");
  showElement("botS2");
  showElement("botS3");
  showElement("botS4");
  if(getChecked("botFacil")){
    intervaloJogo = intervaloFacil;
    //totalSetas = 50;
    jogo();
  } else if(getChecked("botMedio")){
    intervaloJogo = intervaloMedio;
    //totalSetas = 75;
    jogo();
  } else if(getChecked("botDificil")){
    intervaloJogo = intervaloDificil;
    //totalSetas = 120;
    jogo();
  }
}

// Criar setas
function criarSeta() {
  var id, imagem, posicaoX;
  var coluna = randomNumber(1, 4);
  
  if (coluna == 1){
    numS1 = numS1 + 1;
	id = "s1-" + numS1;
	imagem = "s1.png";
	posicaoX = 8;
  }
  if (coluna == 2){
    numS2 = numS2 + 1;
	id = "s2-" + numS2;
    imagem = "s2.png";
	posicaoX = 86;
  }
  if (coluna == 3){
    numS3 = numS3 + 1;
	id = "s3-" + numS3;
    imagem = "s3.png";
	posicaoX = 164;
  }
  if (coluna == 4){
    numS4 = numS4 + 1;
	id = "s4-" + numS4;
	imagem = "s4.png";
	posicaoX = 242;
  }
  
  image(id, imagem);
  setPosition(id, posicaoX, 28, 70, 60);
  listaSetas.push(id);
  listaY.push(0);
}

function reiniciarJogo(totalSetas){
  for (var i = 0; i < totalSetas; i = i + 1) {
   deleteElement(listaSetas[i]);
  }
  listaSetas = [];
  listaY = [];
  numS1 = 0;
  numS2 = 0;
  numS3 = 0; 
  numS4 = 0;
  pontos = 0;
  vidas = 100;
  tempoInicial = 0;
  tempoAtual = 0;
  tempoNovo = 1;
  tempo = 0;
  tempo2 = 0;
  setText("label4", "vidas: 100");
  setChecked("botFacil", false);
  setChecked("botMedio", false);
  setChecked("botDificil", false);
}

// Rodar o jogo
function jogo() {
  var totalSetas = 51;
  reiniciarJogo(totalSetas);
 
  while(totalSetas > 0){
    criarSeta();
    totalSetas = totalSetas - 1;
  }
  
  totalSetas = 50;
  
  tempoInicial = getTime();
  
  while ((tempo < 2500)) {
    tempoAtual = getTime();
    tempo = tempoAtual - tempoInicial;
  }
  
  tempoNovo = getTime();
  while (tempo2 < intervaloJogo * 56) {
    tempoInicial = getTime();
    tempo = 0;
    tempo2 = tempoAtual - tempoNovo;
    
	for (var i = 0; i < totalSetas; i = i + 1) {
   // Verifica se o i(seta atual) deve descer
	  if (tempo2 > intervaloJogo * i) {
     moverSetas(i);
	  }
	}
 
    while ((tempo < 12)) {
      tempoAtual = getTime();
      tempo = tempoAtual - tempoInicial;
    }
    //hideElement("imageError");
  }  
  telaFinal();
}

// Tela final
function telaFinal(){
  setScreen("Fim");
  stopSound("Musica-de-Jogo.mp3", false);
  setTimeout(function() {
    setText("label3", "PONTUAÇÃO FINAL: " + pontos);
  }, 1500);
}

// Move as setas
function moverSetas(n) {
  if (listaY[n] < 450) {
    listaY[n] = listaY[n] + 3;
    var posicaoSeta = listaSetas[n].substring(0, 2);
    if (listaY[n] == 3) {
      showElement(listaSetas[n]);
      console.log(moverSetas);
    }
    setPosition(listaSetas[n], getXPosition(listaSetas[n]), listaY[n]);
    if (listaY[n] >= 450) {
      hideElement(listaSetas[n]);
      pontos = pontos - 100;
      //showElement("imageError");
      vidas = vidas - 10;
      hideElement("dança");
      playSound("sound://category_explosion/retro_game_classic_explosion_9.mp3", false);
      setText("label4", "vidas: " + vidas);
      setText("label3", "PONTUAÇÃO FINAL: " + pontos);
      /*setTimeout(function() {
        hideElement("imageError");
  }, 200);*/
    }
    if (posicaoSeta == "s1") {
      if (getChecked("botS1")) {
        if (getYPosition(listaSetas[n]) <= 450 && getYPosition(listaSetas[n]) >= 310) {
          playSound("sound://category_tap/level_select_1.mp3", false);
          listaY[n] = 450;
          pontos = pontos + 100;
          hideElement(listaSetas[n]);
          showElement("dança");
        }
         setChecked("botS1", false);
      }
    } 
      else if (posicaoSeta == "s2") {
      if (getChecked("botS2")) {
        if (getYPosition(listaSetas[n]) <= 450 && getYPosition(listaSetas[n]) >= 310) {
          playSound("sound://category_tap/level_select_1.mp3", false);
          listaY[n] = 450;
          pontos = pontos + 100;
          hideElement(listaSetas[n]);
          showElement("dança");
        }
        setChecked("botS2", false);
      }
    }
      else if (posicaoSeta == "s3") {
      if (getChecked("botS3")) {
        if (getYPosition(listaSetas[n]) <= 450 && getYPosition(listaSetas[n]) >= 310) {
          playSound("sound://category_tap/level_select_1.mp3", false);
          listaY[n] = 450;
          pontos = pontos + 100;
          hideElement(listaSetas[n]);
          showElement("dança");
        }
        setChecked("botS3", false);
      }
    }
      else if (posicaoSeta == "s4") {
      if (getChecked("botS4")) {
        if (getYPosition(listaSetas[n]) <= 450 && getYPosition(listaSetas[n]) >= 310) {
          playSound("sound://category_tap/level_select_1.mp3", false);
          listaY[n] = 450;
          pontos = pontos + 100;
          hideElement(listaSetas[n]);
          showElement("dança");
        }
        setChecked("botS4", false);
      }
    }
    if (vidas == 0) {
      tempo2 = intervaloFacil * 56;
      setText("label2", "GAME OVER");
    }
  }
}
