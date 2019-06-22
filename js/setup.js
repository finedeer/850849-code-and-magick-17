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
var keys = ['name', 'coatColor', 'eyesColor'];
var wizardsNames = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardsSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

var wizards = [];
var selectRandomValue = function (randomValue) {
  var value = randomValue[Math.floor(Math.random() * randomValue.length)];
  return value
};

var getWizards = function () {
  for (var i = 0; i <= keys.length; i++) {
    var wizard = {};
    for (var j = 0; j <= keys.length - 1; j++) {
      wizard[keys[j]] = selectRandomValue(coatColors);
      if (j === 0) {
        wizard[keys[j]] = selectRandomValue(wizardsNames) + ' ' + selectRandomValue(wizardsSurnames);
      } else if (j === keys.length - 1) {
        wizard[keys[j]] = selectRandomValue(eyesColors);
      }
    }
    wizards.push(wizard);
  }
  return wizards
};
wizards = getWizards(wizards);

var renderWizard = function (wizard) {
  wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');