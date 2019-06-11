'use strict';

var WINDOW_WIDTH = 420;
var WINDOW_HEIGHT = 270;
var GISTO_WIDTH = 40;

window.renderStatistics = function(ctx, names, times) {
  var names = ['Дудь', 'Котик', 'Трамп', 'Вы'];
  var times = [3212, 8418, 5001, 1907];
  var YURA_TIME = times[0];
  for(var i = 0; i < times.length; i++){
    if(times[i] > times[0]){
        times[0] = times[i];
    }
  };
  var slowestTime = times[0];
  var gistoProportion = 150 / slowestTime;


  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, WINDOW_WIDTH, WINDOW_HEIGHT);

  ctx.fillStyle = '#fff';
  ctx.fillRect(100, 10, WINDOW_WIDTH, WINDOW_HEIGHT);

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.strokeText('Ура вы победили!', 120, 30);
  ctx.strokeText('Список результатов:', 120, 50);


  ctx.fillStyle = 'rgba(0, 0, 128, 0.5)';
  ctx.fillRect(155, 100 + (150 - YURA_TIME * gistoProportion), GISTO_WIDTH , YURA_TIME * gistoProportion);
  ctx.strokeText('Дудь', 155, 255);
  ctx.strokeText('3212', 155, 85 + (150 - YURA_TIME * gistoProportion) );

  ctx.fillStyle = 'rgba(0, 0, 128, 1)';
  ctx.fillRect(245, 100 + (150 - times[1] * gistoProportion), GISTO_WIDTH , times[1] * gistoProportion);
  ctx.strokeText('Котик', 245, 255);
  ctx.strokeText('8418', 245, 85 + (150 - times[1] * gistoProportion) );

  ctx.fillStyle = 'rgba(0, 0, 128, 0.8)';
  ctx.fillRect(335, 100 + (150 - times[2] * gistoProportion), GISTO_WIDTH , times[2] * gistoProportion);
  ctx.strokeText('Трамп', 335, 255);
  ctx.strokeText('5001', 335, 85 + (150 - times[2] * gistoProportion) );

  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillRect(425, 100 + (150 - times[3] * gistoProportion), GISTO_WIDTH , times[3] * gistoProportion);
  ctx.strokeText('Вы', 425, 255);
  ctx.strokeText('1907', 425, 85 + (150 - times[3] * gistoProportion) );
};
