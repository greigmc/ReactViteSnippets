import { useState, useEffect } from "react";
import { Container, Table, Alert } from "react-bootstrap";

const GeoPluginFetch = () => {
  const [location, setLocation] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = import.meta.env.VITE_API_GEO_KEY;
  const ipstackAPI = `http://api.ipstack.com/check?access_key=${apiKey}`;
  
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(ipstackAPI);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Data keys:", Object.keys(data)); // Log the keys to ensure we have the correct names
        setLocation([data]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const renderValue = (value) => {
    if (typeof value === "object" && value !== null) {
      return JSON.stringify(value);
    }
    return value;
  };

  const includeFields = [
    "ip",
    "type",
    "continent_code",
    "continent_name",
    "country_code",
    "country_name",
    "region_code",
    "region_name",
    "city",
    "zip",
  ];

  if (loading) {
    return <Alert variant="info">Loading...</Alert>;
  }
  if (error) {
    return <Alert variant="danger">Error: {error.message}</Alert>;
  }

  return (
    <Container>
      <h1>Geolocation Data</h1>
      <p>
        The ipstack API allows you to determine the geographical location of
        visitors based on their IP addresses. It provides detailed location data
        such as country, region, city, and coordinates in a structured JSON
        format.
      </p>
      <Table
        responsive
        striped
        bordered
        hover
        variant="dark"
        className="table table-bordered mt-4 text-start"
      >
        <thead>
          <tr>
            <th>Field</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {location.map((item, index) =>
            Object.entries(item)
              .filter(([key]) => includeFields.includes(key))
              .map(([key, value]) => (
                <tr key={`${index}-${key}`}>
                  <td>{key}</td>
                  <td>{renderValue(value)}</td>
                </tr>
              ))
          )}
        </tbody>
      </Table>
      <hr />
    </Container>
  );
};

export default GeoPluginFetch;
