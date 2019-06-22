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
var GISTO_Y = 100;
var STAT_GAP = 5;
var STAT_TIME_Y = 85;

var getRandom = function (max, min) {
  return Math.floor(min + Math.random() * (max - min));
};
var getSlowestTime = function (arr) {
  var slowestTime = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > slowestTime) {
      slowestTime = arr[i];
    }
  }
  return slowestTime;
};
var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, WINDOW_WIDTH, WINDOW_HEIGHT);
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + SHADOW_GAP, CLOUD_Y + SHADOW_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');


  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.strokeText('Ура вы победили!', CLOUD_X + TEXT_GAP, CLOUD_Y + TEXT_GAP);
  ctx.strokeText('Список результатов:', CLOUD_X + TEXT_GAP, CLOUD_Y + TEXT_GAP * 2);

  var slowTime = getSlowestTime(times);
  var GISTO_X = CLOUD_X + GAP + STAT_GAP;
  for (var i = 0; i < names.length; i++) {
    var opacity = getRandom(100, 10) / 100;
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255,' + opacity + ')';
    }
    var barHeight = times[i] * MAX_GISTO_HEIGHT / slowTime;
    var barGap = MAX_GISTO_HEIGHT - barHeight;
    var barStep = (GAP + GISTO_WIDTH) * i;
    ctx.fillRect(GISTO_X + barStep, GISTO_Y + barGap, GISTO_WIDTH, barHeight);
    ctx.strokeText(names[i], GISTO_X + barStep, GISTO_Y + MAX_GISTO_HEIGHT + STAT_GAP);
    ctx.strokeText(Math.round(times[i]), GISTO_X + barStep, STAT_TIME_Y + barGap);
  }
};
