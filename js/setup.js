'use strict';


var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

for (var i = 0; i < 0; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  similarListElement.appendChild(wizardElement);
}
var wizardsNames = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardsSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

var selectRandomValue = function (randomValue) {
  return randomValue[Math.floor(Math.random() * randomValue.length)];
};

var getWizards = function () {
  var wizzards = [];
  for (i = 0; i <= 3; i++) {
    var wizard = {};
    wizard['name'] = selectRandomValue(wizardsNames) + ' ' + selectRandomValue(wizardsSurnames);
    wizard['coatColor'] = selectRandomValue(coatColors);
    wizard['eyesColor'] = selectRandomValue(eyesColors);

    wizzards.push(wizard);
  }
  return wizzards;
};
var wizards = getWizards();

var renderWizard = function (wizard) {
  wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
