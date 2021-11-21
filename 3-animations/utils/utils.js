const generateNumberBetweenRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const generatePositiveOrNegativeNumber = () => (Math.random() < 0.5 ? 1 : -1);

export { generateNumberBetweenRange, generatePositiveOrNegativeNumber };
