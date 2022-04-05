function capitalise(str) {
    return str[0].toUpperCase() + str.substring(1, str.length).toLowerCase();
}

module.exports = capitalise; 