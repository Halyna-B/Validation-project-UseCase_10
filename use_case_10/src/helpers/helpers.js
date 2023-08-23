const isValidString = (input, maxLength) => {
    if (input.length > maxLength) return false;

    const pattern = /^(?=[^ ]*?[A-Z])(?=[^ ]*?[a-z])(?=[^ ]*?\d)(?=[^ ]*?[!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])[^ ]*$/;

    return pattern.test(input);
};

const testRegexImplementation = () => {
    const testCases = [
        { input: "A", description: "Too short input", expected: false },
        { input: "Aa1!Aa1!Aa1!Aa1!Aa1!Aa1!Aa1!Aa1!Aa1!Aa1!Aa1!Aa1!", description: "Too long input", expected: false },
        { input: "Aa1!", description: "Matching input length", expected: true },
        { input: "aaaa1!", description: "Missing uppercase", expected: false },
        { input: "AAAA1!", description: "Missing lowercase", expected: false },
        { input: "AaaaA", description: "Missing special character", expected: false },
        { input: "Aaaa!", description: "Missing digit", expected: false },
        { input: " Aa1!", description: "Whitespace at the beginning", expected: false },
        { input: "Aa1! ", description: "Whitespace at the end", expected: false },
        { input: "Aa 1!", description: "Whitespace in the middle", expected: false }
    ];

    testCases.forEach(test => {
        const result = isValidString(test.input, 30);
        console.log(`Test for ${test.description}: Input "${test.input}" -> Expected ${test.expected}, Got ${result}`);
        console.log(`Test ${test.expected === result ? 'PASSED' : 'FAILED'}`);
    });
};

//If you're integrating this into a React application,
// you might want to call this function within a component lifecycle method or a React hook (like useEffect)
// based on your specific requirements. However, typically in a real-world application,
// such tests would be separated out and executed as part of a test suite (using tools like Jest),
// and not within the application's main flow.
