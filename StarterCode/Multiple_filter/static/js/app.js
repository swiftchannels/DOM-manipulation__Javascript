// from data.js
var tableData = data;

// select table from base html
var tbody = d3.select("tbody")

function Tabledata(data) {
    // get ride of existing data
    tbody.html("");
    // loop through allien data and append rows and cells for each value
    data.map((dt) => {
        var row = tbody.append("tr");
        // populate the rows and cells created from entries in the data
        Object.entries(dt).forEach((value) => {
            var cell = row.append("td");
            cell.text(value);

        });
    });
};

// Keep Track of all filters
var query = {};

function updatequery() {

  // Save the element, value, and id of the filter that was changed
  var changedElement = d3.select(this).select("input");
  var elementValue = changedElement.property("value");
  var queryId = changedElement.attr("id");

  // If a filter value was entered then add that filterId and value
  // to the filters list. Otherwise, clear that filter from the filters object
  if (elementValue) {
    query[queryId] = elementValue;
  }
  else {
    delete query[queryId];
  }

  // Call function to apply all filters and rebuild the table
  inputdata();

}

function inputdata() {

  let searchdata = tableData;

  // Loop through all of the search and keep any data that
  // matches the query values
  Object.entries(query).map(([key, value]) => {
    searchdata = searchdata.filter(row => row[key] === value);
  });

  Tabledata(searchdata);
}

// Attach an event to listen for changes to each search
d3.selectAll(".filter").on("change", updatequery);

// Build the table when the page loads
Tabledata(tableData);
