<!--
* This script stablishes the connection between the database and the web api,
* and it accesses any entry from the database to display them using html format
-->

<!DOCTYPE html>
<html>

<head> <!-- head begins -->
<style> /* html table style used to display data send back from database */
table {
    width: 100%;
    border-collapse: collapse;
}

table, td, th {
    border: 1px solid black;
    padding: 5px;
}

th {text-align: left;}
</style>  <!-- end of html style -->
</head> <!-- head end -->

<body>

<?php

$q = intval($_GET['q']);

/* Creates connection between the web api and the database */
$con = mysqli_connect('mysql.hostinger.co.uk','u654640502_pnow','Zarate2002','u654640502_pnow');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

/* queries the database to obtain data using entry id */
mysqli_select_db($con,"ajax_demo");
$sql="SELECT * FROM RESTAURANTS_CA WHERE id = '".$q."'";
$result = mysqli_query($con,$sql);

/* table tittles to display */
echo "<table>
<tr>
<th>name</th>
<th>address</th>
<th>phone</th>
<th>city</th>
<th>website</th>
</tr>";

/* Entries to display within the table*/
while($row = mysqli_fetch_array($result)) {
    echo "<tr>";
    echo "<td>" . $row['name'] . "</td>";
    echo "<td>" . $row['address'] . "</td>";
    echo "<td>" . $row['phone'] . "</td>";
    echo "<td>" . $row['city'] . "</td>";
    echo "<td>" . $row['website'] . "</td>";
    echo "</tr>";
}
echo "</table>";
/* closes database connection */
mysqli_close($con);
?>
</body>
</html>