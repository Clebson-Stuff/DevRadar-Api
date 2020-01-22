module.exports = (stringToArray) => {
    return stringToArray.split(',').map(index => index.trim());
}