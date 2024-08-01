// Build the metadata panel
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // get the metadata field
    let metaData = data.metadata;

    // Filter the metadata for the object with the desired sample number
    let sampleMetaData = metaData.filter((obj) => {
      if (obj.id === +sample) { // Convert sample to a number for comparison using the unary plus(+) operator. 
        return obj;
      }
    })[0]; // get the single metadata object from within the filtered metadata array.
    console.log(sampleMetaData);

    // Use d3 to select the panel with id of `#sample-metadata`
    let metaPanel = d3.select('#sample-metadata');

    // Use `.html("") to clear any existing metadata
    metaPanel.html("");

    // Inside a loop, you will need to use d3 to append new
    // tags for each key-value in the filtered metadata.
    Object.entries(sampleMetaData).map(([key, value], index) => {
      metaPanel.append('p').attr("class", "card-text").text(`${key.toUpperCase()}: ${value} \n`);
    });
  });
}

// function to build both charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the samples field


    // Filter the samples for the object with the desired sample number


    // Get the otu_ids, otu_labels, and sample_values


    // Build a Bubble Chart


    // Render the Bubble Chart


    // For the Bar Chart, map the otu_ids to a list of strings for your yticks


    // Build a Bar Chart
    // Don't forget to slice and reverse the input data appropriately


    // Render the Bar Chart

  });
}

// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the names field
    let names = data.names;

    // Use d3 to select the dropdown with id of `#selDataset`
    let dropdownMenu = d3.select("#selDataset");

    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.
    let namesComprehension = names.map((name) => {
      dropdownMenu.append("option").attr("value", name).text(name); // Add the name as one of the select options
      return +name; // Add the name to namesComprehension after converting it to a number using the unary plus(+) operator.
    });

    // Get the first sample from the list
    firstSample = namesComprehension[0];
    console.log(`the first sample: ${firstSample}.`);
    console.log(`first sample data type: ${typeof firstSample}`);

    // Build charts and metadata panel with the first sample
    buildMetadata(firstSample);
    // buildCharts(firstSample);
  });
}

// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected
  buildMetadata(newSample);
}

// Initialize the dashboard
init();
