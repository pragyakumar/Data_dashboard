$(document).ready(function() {
    let allData = [];

    // Fetch data from API
    $.getJSON('api.php', function(data) {
        allData = data;
        populateFilters(data);
        createCharts(data);
    });

    // Function to populate filter options
    function populateFilters(data) {
        let years = [...new Set(data.map(item => item.year))];
        let topics = [...new Set(data.map(item => item.topics))];
        let sectors = [...new Set(data.map(item => item.sector))];
        let regions = [...new Set(data.map(item => item.region))];
        let pests = [...new Set(data.map(item => item.pest))];
        let sources = [...new Set(data.map(item => item.source))];
        let swots = [...new Set(data.map(item => item.swot))];
        let countries = [...new Set(data.map(item => item.country))];
        let cities = [...new Set(data.map(item => item.city))];
        let impacts = [...new Set(data.map(item => item.impact))];
        
        populateFilter('#yearFilter', years);
        populateFilter('#topicsFilter', topics);
        populateFilter('#sectorFilter', sectors);
        populateFilter('#regionFilter', regions);
        populateFilter('#pestFilter', pests);
        populateFilter('#sourceFilter', sources);
        populateFilter('#swotFilter', swots);
        populateFilter('#countryFilter', countries);
        populateFilter('#cityFilter', cities);
        populateFilter('#impactFilter', impacts);
    }

    // Function to populate filter options
    function populateFilter(selector, items) {
        items.forEach(item => {
            $(selector).append(`<option value="${item}">${item}</option>`);
        });
    }

    // Function to create charts using Chart.js
    function createCharts(data) {
        // Intensity Chart
        const intensityChart = document.getElementById('intensityChart').getContext('2d');
        const intensityData = {
            labels: data.map(item => item.year),
            datasets: [{
                label: 'Intensity',
                data: data.map(item => item.intensity),
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        };
        const intensityChartInstance = new Chart(intensityChart, {
            type: 'bar',
            data: intensityData,
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });

        // Likelihood Chart
        const likelihoodChart = document.getElementById('likelihoodChart').getContext('2d');
        const likelihoodData = {
            labels: data.map(item => item.year),
            datasets: [{
                label: 'Likelihood',
                data: data.map(item => item.likelihood),
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        };
        const likelihoodChartInstance = new Chart(likelihoodChart, {
            type: 'line',
            data: likelihoodData,
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });

        // Sample data for relevance
const relevanceData = {
    labels: ['Category A', 'Category B', 'Category C'],
    values: [50, 75, 90] // Sample relevance values
};

// Create a relevance chart
const relevanceChartCanvas = document.getElementById('relevanceChart');
const relevanceChartContext = relevanceChartCanvas.getContext('2d');

const relevanceChart = new Chart(relevanceChartContext, {
    type: 'bar',
    data: {
        labels: relevanceData.labels,
        datasets: [{
            label: 'Relevance',
            data: relevanceData.values,
            backgroundColor: 'rgba(255, 99, 132, 0.5)', // Adjust color as needed
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

	// Sample data for yearly trends
const yearlyTrendsData = {
    labels: ['2018', '2019', '2020', '2021', '2022'], // Sample years
    values: [100, 150, 200, 250, 300] // Sample data for each year
};

// Create a yearly trends chart
const yearlyTrendsChartCanvas = document.getElementById('yearlyTrendsChart');
const yearlyTrendsChartContext = yearlyTrendsChartCanvas.getContext('2d');

const yearlyTrendsChart = new Chart(yearlyTrendsChartContext, {
    type: 'line',
    data: {
        labels: yearlyTrendsData.labels,
        datasets: [{
            label: 'Yearly Trends',
            data: yearlyTrendsData.values,
            backgroundColor: 'rgba(54, 162, 235, 0.5)', // Adjust color as needed
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
	 // Sample data for country
const countryData = {
    labels: ['Country A', 'Country B', 'Country C'],
    values: [50, 75, 90] // Sample data for each country
};

// Create a chart for country
const countryChartCanvas = document.getElementById('countryChart');
const countryChartContext = countryChartCanvas.getContext('2d');

const countryChart = new Chart(countryChartContext, {
    type: 'bar',
    data: {
        labels: countryData.labels,
        datasets: [{
            label: 'Country Data',
            data: countryData.values,
            backgroundColor: 'rgba(255, 99, 132, 0.5)', // Adjust color as needed
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
// Sample data for topics
const topicsData = {
    labels: ['Topic A', 'Topic B', 'Topic C'],
    values: [50, 75, 90] // Sample data for each topic
};

// Create a chart for topics
const topicsChartCanvas = document.getElementById('topicsChart');
const topicsChartContext = topicsChartCanvas.getContext('2d');

const topicsChart = new Chart(topicsChartContext, {
    type: 'bar',
    data: {
        labels: topicsData.labels,
        datasets: [{
            label: 'Topics Data',
            data: topicsData.values,
            backgroundColor: 'rgba(255, 99, 132, 0.5)', // Adjust color as needed
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
// Sample data for regions
const regionsData = {
    labels: ['Region A', 'Region B', 'Region C'],
    values: [50, 75, 90] // Sample data for each region
};

// Create a chart for regions
const regionsChartCanvas = document.getElementById('regionsChart');
const regionsChartContext = regionsChartCanvas.getContext('2d');

const regionsChart = new Chart(regionsChartContext, {
    type: 'bar',
    data: {
        labels: regionsData.labels,
        datasets: [{
            label: 'Regions Data',
            data: regionsData.values,
            backgroundColor: 'rgba(255, 99, 132, 0.5)', // Adjust color as needed
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
// Sample data for cities
const cityData = {
    labels: ['City A', 'City B', 'City C'],
    values: [50, 75, 90] // Sample data for each city
};

// Create a chart for cities
const cityChartCanvas = document.getElementById('cityChart');
const cityChartContext = cityChartCanvas.getContext('2d');

const cityChart = new Chart(cityChartContext, {
    type: 'bar',
    data: {
        labels: cityData.labels,
        datasets: [{
            label: 'City Data',
            data: cityData.values,
            backgroundColor: 'rgba(255, 99, 132, 0.5)', // Adjust color as needed
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

        // Highlight selected filter values in charts
        function highlightFilterValues(chartInstance, filterValue) {
            const data = chartInstance.data.datasets[0].data;
            const labels = chartInstance.data.labels;
            const highlightColor = 'rgba(255, 206, 86, 0.2)';
            const highlightBorderColor = 'rgba(255, 206, 86, 1)';

            data.forEach((value, index) => {
                if (filterValue === labels[index]) {
                    chartInstance.data.datasets[0].backgroundColor[index] = highlightColor;
                    chartInstance.data.datasets[0].borderColor[index] = highlightBorderColor;
                } else {
                    chartInstance.data.datasets[0].backgroundColor[index] = 'rgba(255, 99, 132, 0.2)';
                    chartInstance.data.datasets[0].borderColor[index] = 'rgba(255, 99, 132, 1)';
                }
            });

            chartInstance.update();
        }

        // Event listener for Apply Filters button click
        $('#applyFilters').click(function() {
            const selectedYear = $('#yearFilter').val();
            const selectedTopic = $('#topicsFilter').val();
            const selectedSector = $('#sectorFilter').val();
            const selectedRegion = $('#regionFilter').val();
            const selectedPest = $('#pestFilter').val();
            const selectedSource = $('#sourceFilter').val();
            const selectedSwot = $('#swotFilter').val();
            const selectedCountry = $('#countryFilter').val();
            const selectedCity = $('#cityFilter').val();
            const selectedImpact = $('#impactFilter').val();
            
            highlightFilterValues(intensityChartInstance, selectedYear);
            highlightFilterValues(likelihoodChartInstance, selectedYear);

            // Update applied filters
            updateAppliedFilters(selectedYear, selectedTopic, selectedSector, selectedRegion, selectedPest, selectedSource, selectedSwot, selectedCountry, selectedCity, selectedImpact);
        });
    }

    // Function to update applied filters section
    function updateAppliedFilters(year, topic, sector, region, pest, source, swot, country, city, impact) {
        $('#appliedFiltersList').empty();
        if (year) $('#appliedFiltersList').append(`<li>Year: ${year}</li>`);
        if (topic) $('#appliedFiltersList').append(`<li>Topic: ${topic}</li>`);
        if (sector) $('#appliedFiltersList').append(`<li>Sector: ${sector}</li>`);
        if (region) $('#appliedFiltersList').append(`<li>Region: ${region}</li>`);
        
        if (source) $('#appliedFiltersList').append(`<li>Source: ${source}</li>`);
        if (swot) $('#appliedFiltersList').append(`<li>SWOT: ${swot}</li>`);
        if (country) $('#appliedFiltersList').append(`<li>Country: ${country}</li>`);
        if (city) $('#appliedFiltersList').append(`<li>City: ${city}</li>`);
        if (impact) $('#appliedFiltersList').append(`<li>Impact: ${impact}</li>`);
    }
});
