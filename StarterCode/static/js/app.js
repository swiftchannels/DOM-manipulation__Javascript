// from data.js
var tableData = data;

// select table from base html
var tbody = d3.select("tbody")

function Tabledata(data) {
    // get ride of existing data
    tbody.html("");
    // loop through allien data and append rows and cells for each value
    data.forEach(function(dt) {
        var row = tbody.append("tr");
        // populate the rows and cells created from entries in the data
        Object.entries(dt).forEach((value) => {
            var cell = row.append("td");
            cell.text(value);

        });
    });
};

function handleClick() {
    d3.event.preventDefault();
  
    // select id datetime filter from the base html
    var date = d3.select("#datetime").property("value");
    let userEntry = tableData;
  
    if (date) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      userEntry = userEntry.filter(row => row.datetime === date);
    }
  
    Tabledata(userEntry);
  }
  
  // assign an event to button when click
  d3.selectAll("#filter-btn").on("click", handleClick);
  
  // Build the table when the page loads
  Tabledata(tableData);