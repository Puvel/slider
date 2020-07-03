import Handlebars from 'handlebars/runtime';
Handlebars.registerHelper('firstStar', function (value) {
  return value >= 1;
});
Handlebars.registerHelper('secondStar', function (value) {
  return value >= 2;
});
Handlebars.registerHelper('thirdStar', function (value) {
  return value >= 3;
});
Handlebars.registerHelper('fourthStar', function (value) {
  return value >= 4;
});
Handlebars.registerHelper('fifthStar', function (value) {
  return value === 5;
});
