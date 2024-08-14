function DataTable(config, data) {
    let parentElement = document.querySelector(config.parent);
    let table = document.createElement('table');
    let head = document.createElement('thead');
    let headRow = document.createElement('tr');

    let firstColumnTitle = document.createElement('th');
    firstColumnTitle.textContent = '№';
    headRow.appendChild(firstColumnTitle);

    let columnName = ['id'];

    for(let i = 0; i < config.columns.length; i++){
        let columnTitle = document.createElement('th');
        columnTitle.textContent = config.columns[i].title;
        headRow.appendChild(columnTitle);
        
        columnName.push(config.columns[i].value);
    }
    head.appendChild(headRow);
    table.appendChild(head);

    let body = document.createElement('tbody');
    for(let i = 0; i < data.length; i++){
        let row = document.createElement('tr');
        for(let j = 0; j < columnName.length; j++){
            let cellValue = document.createElement('td');
            cellValue.textContent = data[i][columnName[j]];
            row.appendChild(cellValue);
        }
        body.appendChild(row);
    }

    table.appendChild(body);
    parentElement.appendChild(table);
 }
 
 const config1 = {
   parent: '#usersTable',
   columns: [
     {title: 'Ім’я', value: 'name'},
     {title: 'Прізвище', value: 'surname'},
     {title: 'Вік', value: 'age'},
   ]
 };
 
 const users = [
   {id: 30050, name: 'Вася', surname: 'Петров', age: 12},
   {id: 30051, name: 'Вася', surname: 'Васечкін', age: 15},
 ];
 
 DataTable(config1, users);

