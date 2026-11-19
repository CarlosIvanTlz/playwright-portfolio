export {};
const name: string = 'Carlos';
let testsPassed: number = 0;
const isReady: boolean = true;

function greet(person: string): string {
  return `Hello, ${person}!`;
}

const add = (a: number, b: number): number => a + b;

testsPassed = add(testsPassed, 3);
console.log(greet(name), '| Tests passed:', testsPassed, '| Ready:', isReady);

function isPassing(score: number): boolean {
  return score >= 80;
}

function double(n: number): number {
  return n * 2;
}

const doubleArrow = (n: number): number => n * 2;

function ticketTitle(service: string, user: string): string {
  return `Request for ${service} by ${user}`;
}

console.log(double(4));
console.log(doubleArrow(4));
console.log(isPassing(79));
console.log(isPassing(80));
console.log(ticketTitle('Support', 'John Doe'));