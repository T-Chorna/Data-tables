# Project "DataTable Library"

## Project Description

This project is a training exercise aimed at creating a custom JavaScript library that dynamically generates tables based on provided configuration and data. 
The goal is to allow users to easily render tables with any number of columns and rows on a webpage. The project also includes basic styling to make the tables visually appealing.

The project consists of three files:
- **index.html** - the main HTML file for testing the library.
- **main.js** - contains the main JavaScript function `DataTable` that handles table creation.
- **style.css** - defines the styles for the generated tables.

## Project Structure

The project has the following structure:
/project-root
│

├── index.html

├── main.js

└── style.css


### Files

- **index.html**: A simple HTML file that includes the necessary structure and scripts to test the `DataTable` function.
- **main.js**: This file contains the `DataTable(config, data)` function, which generates a table based on the provided configuration and data. The function supports rendering multiple tables with various column configurations.
- **style.css**: CSS file that defines the styles for the generated tables, making them visually appealing and user-friendly.

## How It Works

The `DataTable` function accepts two parameters:
- **config**: An object that defines the table configuration, including the parent element where the table will be rendered and the columns to be displayed.
- **data**: An array of objects containing the data to be displayed in the table.

### Example Usage

```html
<div id="usersTable"></div>

<script src="main.js"></script>
<script>
  const config1 = {
    parent: '#usersTable',
    columns: [
      { title: 'Ім’я', value: 'name' },
      { title: 'Прізвище', value: 'surname' },
      { title: 'Вік', value: 'age' },
    ]
  };

  const users = [
    { id: 30050, name: 'Вася', surname: 'Петров', age: 12 },
    { id: 30051, name: 'Вася', surname: 'Васечкін', age: 15 },
  ];

  DataTable(config1, users);
</script>
```

### Result

After loading the page, the following table will be rendered:

```html
<div id="usersTable">
  <table>
    <thead>
      <tr>
        <th>№</th>
        <th>Ім’я</th>
        <th>Прізвище</th>
        <th>Вік</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Вася</td>
        <td>Петров</td>
        <td>12</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Вася</td>
        <td>Васечкін</td>
        <td>15</td>
      </tr>
    </tbody>
  </table>
</div>
```


## How to Run the Project 

1. Clone the repository to your computer:
> git clone https://github.com/T-Chorna/Data-tables
2. Open the index.html file in your browser.

You can do this by double-clicking the file or by selecting "Open File" from your browser's menu.

3. The example table will be generated based on the configuration and data provided in the script.

## Requirements

To run this project, you only need a modern web browser that supports JavaScript and CSS.

## Demo

You can view the live version of the website [here](https://github.com/T-Chorna/Data-tables).

## Author

- **Tatyana Chorna** - [GitHub](https://github.com/T-Chorna)
