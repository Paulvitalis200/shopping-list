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
    
    
    
    const sumTotal = document.createElement('td');
    for (let i = 0; i < myList.length; i++) {
        console.log('item', myList[i]);
        const row = document.createElement('tr');
        const description = document.createElement('td');
        const category = document.createElement('td');
        const amount = document.createElement('td');
        description.innerHTML = myList[i].description
        category.innerHTML = myList[i].category
        amount.innerHTML = myList[i].amount
        row.append(description,category,amount)
        table.append(row)
      }

      const total = document.createElement('tr');
      const totalText = document.createElement('td');
      const space = document.createElement('td');
      const totalAmount = document.createElement('td');
    totalText.innerHTML = 'Total';
    space.innerHTML = '';
    totalAmount.innerHTML = myList.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.amount;
    }, 0);
    total.append(totalText, space, totalAmount)
    table.append(total)

    
}

shoppingList();

function submitForm(event) {
    event.preventDefault()
    const description =document.getElementById('description');
    const category =document.getElementById('category');
    const amount =document.getElementById('amount');
    console.log(description,category,amount)
    const payLoad = {
        id: myList.length,
        description: description.value,
        category: category.value,
        amount: parseInt(amount.value)
    }
    myList.push(payLoad);
    console.log(myList)
    document.getElementById("myForm").reset();
    shoppingList();
}

// 1. Create a table of your shopping list containing the three items in the list with three columns. Description, Category and Amount
// 2. Calculate the total amount using javascript's "reduce" method. Read up on it from google
// Check the ReadMe file on Github of this project to see how the table should appear.
// Fetch them from the table above and put them into  a html page with javascript.
// Do not use any CSS. Ensure to only use Bootstrap. https://getbootstrap.com/docs/4.1/content/tables/