<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "data_dashboard";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Open the CSV file
if (($handle = fopen("Data.csv", "r")) !== FALSE) {
    // Skip the header row
    fgetcsv($handle);

    // Loop through the CSV rows
    while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
        $intensity = $conn->real_escape_string($data[0]);
        $likelihood = $conn->real_escape_string($data[1]);
        $relevance = $conn->real_escape_string($data[2]);
        $year = $conn->real_escape_string($data[3]);
        $country = $conn->real_escape_string($data[4]);
        $topics = $conn->real_escape_string($data[5]);
        $region = $conn->real_escape_string($data[6]);
        $city = $conn->real_escape_string($data[7]);
        $pest = $conn->real_escape_string($data[8]);
        $source = $conn->real_escape_string($data[9]);
        $swot = $conn->real_escape_string($data[10]);
        $sector = $conn->real_escape_string($data[11]);

        // Insert data into the database
        $sql = "INSERT INTO data (intensity, likelihood, relevance, year, country, topics, region, city, pest, source, swot, sector)
                VALUES ('$intensity', '$likelihood', '$relevance', '$year', '$country', '$topics', '$region', '$city', '$pest', '$source', '$swot', '$sector')";

        if ($conn->query($sql) !== TRUE) {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }

    // Close the file
    fclose($handle);
} else {
    echo "Unable to open the file.";
}

// Close the database connection
$conn->close();

echo "Data import completed.";
?>
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "data_dashboard";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Open the CSV file
if (($handle = fopen("Data.csv", "r")) !== FALSE) {
    // Skip the header row
    fgetcsv($handle);

    // Loop through the CSV rows
    while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
        $intensity = $conn->real_escape_string($data[0]);
        $likelihood = $conn->real_escape_string($data[1]);
        $relevance = $conn->real_escape_string($data[2]);
        $year = $conn->real_escape_string($data[3]);
        $country = $conn->real_escape_string($data[4]);
        $topics = $conn->real_escape_string($data[5]);
        $region = $conn->real_escape_string($data[6]);
        $city = $conn->real_escape_string($data[7]);
        $pest = $conn->real_escape_string($data[8]);
        $source = $conn->real_escape_string($data[9]);
        $swot = $conn->real_escape_string($data[10]);
        $sector = $conn->real_escape_string($data[11]);

        // Insert data into the database
        $sql = "INSERT INTO data (intensity, likelihood, relevance, year, country, topics, region, city, pest, source, swot, sector)
                VALUES ('$intensity', '$likelihood', '$relevance', '$year', '$country', '$topics', '$region', '$city', '$pest', '$source', '$swot', '$sector')";

        if ($conn->query($sql) !== TRUE) {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }

    // Close the file
    fclose($handle);
} else {
    echo "Unable to open the file.";
}

// Close the database connection
$conn->close();

echo "Data import completed.";
?>
