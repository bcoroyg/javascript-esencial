var count = 0;

const raining = () => Math.random() < 0.25;

do {
  count++;
} while (!raining());

console.log(`Fui a ver si llovia ${count} ${count === 1 ? 'vez' : 'veces'}.`);
