export {};

function sumAndPrint(a: number, b: number): void {
  console.log('inside:', a + b);
  return a + b;
}

function sumAndReturn(a: number, b: number): number {
  return a + b;
}

const x = sumAndPrint(2, 3);
const y = sumAndReturn(2, 3);
console.log('x =', x, '| y =', y);



function login(user: string, password: string = 'secret_sauce'): string {
  return `Login as ${user} with ${password}`;
}
console.log(login('standard_user'));
console.log(login('locked_out_user', 'other'));

function describeTicket(service: string, priority?: string): string {
  return priority ? `${service} (${priority})` : service;
}
console.log(describeTicket('Smartphone'));
console.log(describeTicket('Smartphone', 'High'));



//formatTestId(n: number): string → "TC-01" para 1 y "TC-12" para 12.
//Pista: String(n).padStart(2, '0') convierte el número en texto y lo rellena con ceros a la izquierda hasta tener 2 caracteres.

function formatTestId(n: number): string{
const num = String(n).padStart(2, '0');
 return `TC-${num}`;
}

console.log(formatTestId(1));   
console.log(formatTestId(12));

//bugTitle(area: string, summary: string, severity: string = 'Medium'): string
//Debe devolver "[Checkout] Total is wrong (Medium)".
//Pruébala dos veces: bugTitle('Checkout', 'Total is wrong') y bugTitle('Login', 'Button does nothing', 'High').

function bugTitle(area: string, summary: string, severity: string = 'Medium'):string{
     
    return `[${area}] ${summary} (${severity})`;

}

console.log(bugTitle('Checkout', 'Total is wrong'));                 // [Checkout] Total is wrong (Medium)
console.log(bugTitle('Login', 'Button does nothing', 'High'));       // [Login] Button does nothing (High)





const formatTestIdArrow = (n: number): string => {
  const num = String(n).padStart(2, '0');
  return `TC-${num}`;
};

console.log(formatTestIdArrow(7));   // TC-07
console.log(formatTestIdArrow(12));  // TC-12