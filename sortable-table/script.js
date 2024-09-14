const data = [
    {
        id: 1,
        title: 'iPhone 9',
        price: 549,
        inStock: true,
        category: 'smartphones',
    },
    {
        id: 2,
        title: 'iPhone X',
        price: 899,
        inStock: true,
        category: 'smartphones',
    },
    {

        id: 3,
        title: 'Samsung Universe 9',
        price: 1249,
        inStock: true,
        category: 'smartphones',
    },
    {
        id: 4,
        title: 'Huawei P30',
        price: 499,
        inStock: false,
        category: 'smartphones',
    },
    {
        id: 5,
        title: 'OPPOF19',
        price: 280,
        inStock: false,
        category: 'smartphones',
    },
    {
        id: 6,
        title: 'MacBook Pro',
        price: 1749,
        inStock: true,
        category: 'laptops',
    },
    {
        id: 7,
        title: 'Samsung Galaxy Book',
        price: 1499,
        inStock: false,
        category: 'laptops'
    },
    {
        id: 8,
        title: 'Microsoft Surface Laptop 4',
        price: 1499,
        inStock: false,
        category: 'laptops',
    },
    {
        id: 9,
        title: 'HP Pavilion 15-DK1056WM',
        price: 1099,
        inStock: true,
        category: 'laptops',
    },
    {

        id: 10,
        title: 'Infinix INBOOK',
        price: 1099,
        inStock: true,
        category: 'laptops',
    }
];


const createTable = productData => {
    const tableElem = document.createElement('table');
    const tableHead = document.createElement('thead');
    const tableBody = document.createElement('tbody');

    const headers = Object.keys(productData[0]);
    tableHead.appendChild(createHeaderRow(headers));

    productData.forEach(rowData => {
        tableBody.appendChild(createProductRow(rowData));
    })
    
    tableElem.appendChild(tableHead);
    tableElem.appendChild(tableBody);

    return tableElem;
}

const createHeaderRow = columnNames => {
    const tr = document.createElement('tr');
    columnNames.forEach(columnName => {
        const th = document.createElement('th');
        th.textContent = columnName[0].toUpperCase() + columnName.slice(1);
        const searchUp = document.createElement('span');
        searchUp.textContent = '🔼';
        const searchDown = document.createElement('span');
        searchDown.textContent = '🔽';

        searchUp.onclick = () => sortDataBy(columnName, 'ASC');
        searchDown.onclick = () => sortDataBy(columnName, 'DESC');
        
        th.appendChild(searchDown);
        th.appendChild(searchUp);
        tr.appendChild(th);
    })

    return tr;
}

const createProductRow = product => {
    const tr = document.createElement('tr');
    Object.values(product).forEach(value => {
        const td = document.createElement('td');
        td.textContent = value;
        tr.appendChild(td); 
    });

    return tr;
}

const sortDataBy = (columnName, direction) => {
    const sortedASCData = [...data.sort((a, b) => a[columnName] > b[columnName] ? 1 : -1)];
    const sortedDESCData = [...data.sort((a, b) => a[columnName] < b[columnName] ? 1 : -1)];
    renderTable(direction === 'ASC' ? sortedASCData : sortedDESCData);
};

const renderTable = productData => {
    const sortableTableElement = document.getElementById('sortableTable');
    sortableTableElement.innerHTML = '';
    sortableTableElement.appendChild(createTable(productData));
};
renderTable(data);