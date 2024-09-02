let attckerName = prompt('insira o nome do atacante');
const attackPower = parselnt(prompt('insira o poder do ataque'))
let defenderName = prompt('insira o nome do defensor');
let healthPoints =parselnt(prompt ('insira a quantidadede pontos de vida do defensor'));
const hasShield = confirm('O defensor possui um escudo?');
let damage;
if (attackPower>defensePower){
  if(hasShield)
    damage = attackPower - defensePower/2;
    alert (${ attckerName atacou. ${defenderName} sofreu ${damage} de dano por possuir escudo.
      Sua vida agora é $ {healthPoints - damage} .);
             damage = attackPower - defensePower 
  alert (${attckerName} atacou.$ {defenderName} sofreu ${damage} de dano e não possuir escudo.Sua vida agora é $ {healthPoints - damage}.);
  damage =0;
  alert(${attckerName} atacou, mas não afetou ${defenderName}. Nenhum dano causado!);
  }
healthPoints-= damage;
  
