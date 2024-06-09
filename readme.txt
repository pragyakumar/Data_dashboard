Project Overview: Data Visualization Dashboard

Objective
The primary objective of this project was to create a data visualization dashboard using PHP, MySQL, and Chart.js. The dashboard reads data from a CSV file, imports it into a MySQL database, and visualizes key metrics to generate insights. The goal was to provide an interactive and user-friendly interface for users to filter and visualize data.

Tools and Platform 
- XAMPP :  for mySQL 
- PHPStrom and Notepad ++ 
 
Key Features
1. Data Import and Database Creation:
   - A PHP script (`import.php`) was used to read data from `data.csv` and import it into a MySQL database.
   - The database schema was designed to accommodate various fields including intensity, likelihood, relevance, year, country, topics, region, city, and impact.

2. Interactive Filters:
   - Users can filter data based on multiple criteria including end year, topics, sector, region, PEST, source, SWOT, country, city, and impact.
   - An "Apply Filters" button allows users to apply their selected filters, which are then displayed in a side panel for easy visibility.

3. Visualizations with Chart.js:
   - Various charts were created to visualize the data, including:
     - Intensity Chart: Bar chart visualizing intensity metrics.
     - Likelihood Chart: Bar chart visualizing likelihood metrics.
     - Relevance Chart: Bar chart visualizing relevance metrics.
     - Yearly Trends Chart: Line chart visualizing data trends over years.
     - Country Chart: Bar chart visualizing data per country.
     - Topics Chart: Bar chart visualizing data per topic.
     - Regions Chart: Bar chart visualizing data per region.
     - City Chart: Bar chart visualizing data per city.

4. Modern UX/UI Design:
   - The dashboard was designed with a modern and appealing user interface using Bootstrap 4.
   - The layout is responsive, ensuring compatibility across various devices.
   - The dashboard is divided into three main sections:
     - A side panel for filters (30% width).
     - A main panel for displaying charts (40% width).
     - A side panel for displaying applied filters (30% width).

Use of Impact Filter
The impact filter was included to provide an additional dimension for data analysis. Impact is a critical variable that can significantly affect the interpretation of data across various contexts. By including the impact filter, users can:
- Understand the significance of different data points.
- Compare how impact varies across other variables like country, region, and topics.
- Gain insights into the potential effects and implications of different data points.

Technologies Used
1. Backend:
   - PHP: For server-side scripting and handling data import and API requests.
   - MySQL: For storing and querying the imported data.

2. Frontend:
   - HTML/CSS: For structuring and styling the dashboard.
   - Bootstrap 4: For responsive and modern UI components.
   - jQuery: For simplifying JavaScript tasks and handling AJAX requests.
   - Chart.js: For creating interactive and dynamic charts.

3. Data Handling:
   - CSV: For initial data import.
   - AJAX: For fetching filtered data without reloading the page.

Files Overview
1. import.php: Script for importing CSV data into the MySQL database.
2. index.html: Main HTML file for the dashboard layout and structure.
3. dashboard.js: JavaScript file for handling chart creation, data fetching, and applying filters.
4. api.php 

Conclusion
This data visualization dashboard project effectively showcases the integration of PHP, MySQL, and Chart.js to create an interactive and user-friendly interface for data analysis. By implementing comprehensive filtering options and visually appealing charts, users can easily explore and derive insights from the data. The inclusion of the impact filter adds significant value, allowing for a deeper understanding of the data's implications.