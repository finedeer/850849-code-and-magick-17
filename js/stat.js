'use strict';
var WINDOW_WIDTH = 420;
var WINDOW_HEIGHT = 270;
var GISTO_WIDTH = 40;

window.renderStatistics = function(ctx, names, times) {
var names = ['Дудь', 'Котик', 'Трамп', 'Вы'];
var times = [3212, 8418, 5001, 1907];
var gistoHeights = [];

var getGistoHeight = function(times, gistoHeights){
  var slowestTime = times[0];
  for(var i = 0; i < times.length; i++){
    var playerTime = times[i];
    if(playerTime > slowestTime){
        slowestTime = playerTime;

     var slowpoke = playerTime;
     var slowpokeProportion = 150 / slowpoke;

     for(var j = 0; j <= times.length - 1; j++){
        gistoHeights.push(Math.round(slowpokeProportion * times[j]));
        }
      }
    };
 return gistoHeights
}
getGistoHeight(times, gistoHeights)

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, WINDOW_WIDTH, WINDOW_HEIGHT);

  ctx.fillStyle = '#fff';
  ctx.fillRect(100, 10, WINDOW_WIDTH, WINDOW_HEIGHT);

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.strokeText('Ура вы победили!', 120, 30);
  ctx.strokeText('Список результатов:', 120, 50);


  ctx.fillStyle = 'rgba(0, 0, 128, 0.5)';
  ctx.fillRect(155, 100 + (150 - gistoHeights[0]), GISTO_WIDTH, gistoHeights[0]);
  ctx.strokeText('Дудь', 155, 255);
  ctx.strokeText('3212', 155, 85 + (150 - gistoHeights[0]) );

  ctx.fillStyle = 'rgba(0, 0, 128, 1)';
  ctx.fillRect(245, 100 + (150 - gistoHeights[1]), GISTO_WIDTH, gistoHeights[1]);
  ctx.strokeText('Котик', 245, 255);
  ctx.strokeText('8418', 245, 85 + (150 - gistoHeights[1]));

  ctx.fillStyle = 'rgba(0, 0, 128, 0.8)';
  ctx.fillRect(335, 100 + (150 - gistoHeights[2]), GISTO_WIDTH , gistoHeights[2]);
  ctx.strokeText('Трамп', 335, 255);
  ctx.strokeText('5001', 335, 85 + (150 - gistoHeights[2]) );

  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillRect(425, 100 + (150 - gistoHeights[3]), GISTO_WIDTH , gistoHeights[3]);
  ctx.strokeText('Вы', 425, 255);
  ctx.strokeText('1907', 425, 85 + (150 - gistoHeights[3]));



};
