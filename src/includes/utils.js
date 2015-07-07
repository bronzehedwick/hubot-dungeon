/**
 * Various string utilities.
 */

exports.pluralize = function pluralize(word, num) {
  if (num === 1) {
    return word;
  }

  return word + 's';
};

exports.capitalizeFirstLetter = function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
