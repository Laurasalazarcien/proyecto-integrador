const removeHyphens = (text) => {
  return text.split("-").join(" ");
};

const convertFirstLetterToUpperCase = (text) => {
  return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
};

export { removeHyphens, convertFirstLetterToUpperCase };
