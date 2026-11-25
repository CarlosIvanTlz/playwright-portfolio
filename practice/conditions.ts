export { };

function testStatus(expected: string, actual: string): string {
    if (expected === actual) {
        return 'PASS';
    } else {
        return 'FAIL';
    }
}

console.log(testStatus('Products', 'Products'));
console.log(testStatus('Products', 'Error Page'));

const readiness = (score: number): string => score >= 80 ? 'Ready' : 'Needs work';
console.log(readiness(85), readiness(60));




//Ejercicio, tú solo: 
//escribe severityFromUsers(usersAffected: number): string.
//Recibe cuántos usuarios afecta un bug y devuelve la 
//severidad:


function severityFromUsers(usersAffected: number): string {


    if (usersAffected >= 100) {
        return 'Critical';

    } else if (usersAffected >= 10) {
        return 'High';

    } else if (usersAffected >= 1) {
        return 'Medium';

    } else {
        return 'Low';
    }

}



console.log(severityFromUsers(0));
console.log(severityFromUsers(1));
console.log(severityFromUsers(10));
console.log(severityFromUsers(150));


//////////////////////////////////

let passed = 0;
let failed = 0;

function check(name: string, expected: number, actual: number): boolean {


    if (expected === actual) {
        passed++;
        console.log(`✓ ${name}`);
        return true;
    } else {
        failed++;
        console.log(`✗ ${name}: expected ${expected}, got ${actual}`);
        return false;
    }

}

const add = (a: number, b: number): number => a + b;

check('2 + 3 = 5', 5, add(2, 3));
check('10 + 0 = 10', 10, add(10, 0));
check('intentionally wrong', 7, add(3, 3));

console.log(`Passed: ${passed} | Failed: ${failed}`);