// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

function buildTable(data) {
    tbody.html("");
    data.forEach((dataRow) => {
        var row = tbody.append("tr");

        Object.values(dataRow).forEach((val) => {
            var cell = row.append("td");
                cell.text(val);
        });
    });
};

// function handleClick() {
//     d3.event.preventDefault();
//     var date = d3.select("#datetime").property("value");
//     let filteredData = tableDtata;    

//     if (date) {
//         filteredData = filteredData.filter(row => row.datetime === date);
//     }
    
//     buildTable(filteredData);
// }

// d3.selectAll("#filter-btn").on("click", handleClick);

// buildTable(tableData);

var filters = {};

function updateFilters() {
    var changeInput = d3.select(this).select("input");
    var inputValue = changeInput.property("value");
    var filterId = changedElement.attr("id");

    if (inputValue) {
        filters[filterId] = elementValue;
    }
    else {
        delete filters[filtersId];
    }
    filterTable();
}

function filterTable() {
    let filteredData = tableData;
    Object.defineProperties(filters).forEach(([key, value]) => {
        filteredData = filteredData.filter(row => row[key] === value);
    });

    buildTable(filteredData);
}

d3.selectAll(".filter").on("change", updateFilters);

buildTable(tableData);