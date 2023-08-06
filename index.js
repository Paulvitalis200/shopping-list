const myList = [
    {
        id: 1,
        description: 'Rubber',
        category: 'Stationary',
        amount: 200
    },
    {
        id: 2,
        description: 'Milk',
        category: 'Groceries',
        amount: 50
    },
    {
        id: 3,
        description: 'Sofa',
        category: 'Furniture',
        amount: 300000
    }
]

const table = document.getElementById('table');

function shoppingList() {
    const row1 = document.createElement('tr');
    const rubber = document.createElement('td');
    const stationary = document.createElement('td');
    const amount1 = document.createElement('td');
    const row2 = document.createElement('tr');
    const milk = document.createElement('td');
    const grocery = document.createElement('td');
    const amount2 = document.createElement('td');
    const row3 = document.createElement('tr');
    const sofa = document.createElement('td');
    const furniture = document.createElement('td');
    const amount3 = document.createElement('td');
    const row4 = document.createElement('tr');
    const total = document.createElement('td');
    const sumTotal = document.createElement('td');

    rubber.innerHTML = 'Rubber';
    stationary.innerHTML = 'Stationary';
    amount1.innerHTML = '200';

    milk.innerHTML = 'Milk';
    grocery.innerHTML = 'Groceries';
    amount2.innerHTML = '50';

    sofa.innerHTML = 'Sofa';
    furniture.innerHTML = 'Furniture';
    amount3.innerHTML = '300000';

    total.innerHTML = 'Total';
    sumTotal.innerHTML = myList.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.amount;
    }, 0);

    row1.append(rubber, stationary, amount1);
    row2.append(milk, grocery, amount2);
    row3.append(sofa, furniture, amount3);
    row4.append(total, sumTotal);

    table.append(row1, row2, row3, row4);
    
}

shoppingList();


// 1. Create a table of your shopping list containing the three items in the list with three columns. Description, Category and Amount
// 2. Calculate the total amount using javascript's "reduce" method. Read up on it from google
// Check the ReadMe file on Github of this project to see how the table should appear.
// Fetch them from the table above and put them into  a html page with javascript.
// Do not use any CSS. Ensure to only use Bootstrap. https://getbootstrap.com/docs/4.1/content/tables/