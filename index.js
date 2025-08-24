let nomeHeroi = "Arthur";
let experienciaHeroi = 2500;
let nivelHeroi = " ";

if (experienciaHeroi < 1000) {
  nivelHeroi = "Ferro";
  } 
if (experienciaHeroi >= 1001 && experienciaHeroi <= 2000) {
  nivelHeroi = "Bronze";
  }
if (experienciaHeroi >= 2001 && experienciaHeroi <= 5000) {
  nivelHeroi = "Prata";
  }
if (experienciaHeroi >= 6001 && experienciaHeroi <= 7000) {
  nivelHeroi = "Ouro";
  }
if (experienciaHeroi >= 7001 && experienciaHeroi <= 8000) {
  nivelHeroi = "Platina";
  }
if (experienciaHeroi >= 8001 && experienciaHeroi <= 9000) {
  nivelHeroi = "Ascendente";
  }
if (experienciaHeroi >= 9001 && experienciaHeroi <= 10000) {
  nivelHeroi = "Imortal";
  }
if (experienciaHeroi >= 10001) {
  nivelHeroi = "Radiante";
  }

console.log("O Herói de nome " + nomeHeroi + " está no nível de "+nivelHeroi);