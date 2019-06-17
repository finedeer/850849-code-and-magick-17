'use strict';
var WINDOW_WIDTH = 420;
var WINDOW_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GISTO_WIDTH = 40;
var MAX_GISTO_HEIGHT = 150;
var GAP = 50;
var SHADOW_GAP = 10;
var TEXT_GAP = 20;

window.renderStatistics = function (ctx, names, times) {
  var getSlowestTime = function (arr) {
    var slowestTime = arr[0];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > slowestTime) {
        slowestTime = arr[i];
      }
    }

    return slowestTime;
  };

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(CLOUD_X + SHADOW_GAP, CLOUD_Y + SHADOW_GAP, WINDOW_WIDTH, WINDOW_HEIGHT);

  ctx.fillStyle = '#fff';
  ctx.fillRect(CLOUD_X, CLOUD_Y, WINDOW_WIDTH, WINDOW_HEIGHT);

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.strokeText('Ура вы победили!', CLOUD_X + TEXT_GAP, CLOUD_Y + TEXT_GAP);
  ctx.strokeText('Список результатов:', CLOUD_X + TEXT_GAP, CLOUD_Y + TEXT_GAP * 2);

  var slowTime = getSlowestTime(times);

  for (var i = 0; i < names.length; i++) {
    var opacity = ((Math.random() * 1) + 0.1).toFixed(1);
    if (i === names.indexOf('Вы')) {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255,' + opacity + ')';
    }
    ctx.fillRect(155 + (GAP + GISTO_WIDTH) * i, 100 + (MAX_GISTO_HEIGHT - (times[i] * MAX_GISTO_HEIGHT / slowTime)), GISTO_WIDTH, (times[i] * MAX_GISTO_HEIGHT / slowTime));
    ctx.strokeText(names[i], 155 + (GAP + GISTO_WIDTH) * i, 255);
    ctx.strokeText(Math.round(times[i]), 155 + (GAP + GISTO_WIDTH) * i, 85 + (MAX_GISTO_HEIGHT - times[i] * MAX_GISTO_HEIGHT / slowTime));
  }
};
