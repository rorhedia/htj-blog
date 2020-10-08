const formatName = (name) => {
  let nameArr = name.split(" ");

  return nameArr[0] + " " + nameArr[1].charAt(0).toUpperCase() + ".";
};

const formatDate = (date) => {
  let dateArr = new Date(date);
  dateArr = dateArr.toString().split(" ");

  return `${dateArr[1]} ${dateArr[2]}, ${dateArr[3]}`;
};

const limitText = (text) => {
  let textArr = text.split(" ");
  textArr = textArr.filter((word, idx) => idx <= 15);

  return textArr.join(" ") + "...";
};

export { formatName, formatDate, limitText };
