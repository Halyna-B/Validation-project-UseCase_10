const isValidString = (input, maxLength) => {
    if (input.length > maxLength) return false;

    const pattern = /^(?=[^ ]*?[A-Z])(?=[^ ]*?[a-z])(?=[^ ]*?\d)(?=[^ ]*?[!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])[^ ]*$/;

    return pattern.test(input);
};