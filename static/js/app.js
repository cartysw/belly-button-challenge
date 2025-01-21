// Build the metadata panel
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // get the metadata field
    let metadata = data.metadata;

    // Filter the metadata for the object with the desired sample number
    let filteredSample = metadata.filter(id => id.id === sample);

    // Use d3 to select the panel with id of `#sample-metadata` and use `.html("") to clear any existing metadata
    let sampleMetadata = d3.select('#sample-metadata').html("");

    // Inside a loop, you will need to use d3 to append new
    // tags for each key-value in the filtered metadata.
    Object.entries(filteredSample),forEach(([key, value]) => {
      sampleMetadata.append('h4').text(`${key}: ${value}`);
      
    });
  });
}

// function to build both charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the samples field
    let samples = data.samples;

    // Filter the samples for the object with the desired sample number
    let filteredSample = samples.filter(sample => sample.id === sample);

    // Get the otu_ids, otu_labels, and sample_values
    let otuIDs = filteredSample.otu_ids;
    let otuLabels = filteredSample.otu_labels;
    let sampleValues = filteredSample.sample_values;

    // Build a Bubble Chart
    // Bubble Chart Trace
    let bubbleTrace = {
      x: otuIDs,
      y: sampleValues,
      text: otuLabels,
      mode: 'markers',
      marker: {
        size: sampleValues,
        color: otuIDs,
        colorscale: 'Earth'
      }
    };

    // Bubble Chart Data Trace Array
    let bubbleData = [bubbleTrace];

    // Bubble Chart Layout
    let bubbleLayout = {
      title: 'Bacteria Cultures Per Sample'
    };

    // Render the Bubble Chart
    Plotly.newPlot('bubble', bubbleData, bubbleLayout);

    // For the Bar Chart, map the otu_ids to a list of strings for your yticks
    let barYTicks = otuIDs.slice(0, 10).map(id => `OTU ${id}`);

    // Build a Bar Chart
    // Don't forget to slice and reverse the input data appropriately
    // Bar Chart Trace
    let barTrace = {
      x: sampleValues.slice(0, 10).reverse(),
      y: barYTicks.reverse(),
      text: otuLabels.slice(0, 10).reverse(),
      type: 'bar',
      orientation: 'h'
    };

    // Bar Chart Data Trace Array
    let barData = [barTrace];

    // Bar Chart Layout
    let barLayout = {
      title: 'Top 10 Bacteria Cultures Found'
    };

    // Render the Bar Chart
    Plotly.newPlot('bar', barTrace, barLayout);

  });
}

// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the names field


    // Use d3 to select the dropdown with id of `#selDataset`


    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.


    // Get the first sample from the list


    // Build charts and metadata panel with the first sample

  });
}

// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected

}

// Initialize the dashboard
init();
