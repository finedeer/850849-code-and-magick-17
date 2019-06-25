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
var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var selectRandomValue = function (randomValue) {
  return randomValue[Math.floor(Math.random() * randomValue.length)];
};

var getWizards = function () {
  var wizards = [];
  for (i = 0; i <= 3; i++) {
    var wizard = {
      'name': selectRandomValue(wizardsNames) + ' ' + selectRandomValue(wizardsSurnames),
      'coatColor': selectRandomValue(coatColors),
      'eyesColor': selectRandomValue(eyesColors),
    };

    wizards.push(wizard);
  }
  return wizards;
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

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

// Нажатие на элемент .setup-open удаляет класс hidden
// у блока setup. Нажатие на элемент .setup-close, расположенный
// внутри блока setup возвращает ему класс hidden.
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

var setupWizardCoatColor = document.querySelector('.setup-wizard .wizard-coat');
setupWizardCoatColor.addEventListener('click', function () {
  setupWizardCoatColor.style.fill = selectRandomValue(coatColors);
});
var setupWizardEyesColor = document.querySelector('.setup-wizard .wizard-eyes');
setupWizardEyesColor.addEventListener('click', function () {
  setupWizardEyesColor.style.fill = selectRandomValue(eyesColors);
});

var setupWizardFireballColor = document.querySelector('.setup-fireball-wrap');
setupWizardFireballColor.addEventListener('click', function () {
  setupWizardFireballColor.style.fill = selectRandomValue(fireballColors);
});
