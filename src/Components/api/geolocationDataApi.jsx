import { useState, useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';

const GeoPluginFetch = () => {
  const [location, setLocation] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const geopluginAPI = 'http://www.geoplugin.net/json.gp';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(geopluginAPI);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const locationData = Array.isArray(data) ? data : [data];
        const filteredData = locationData.map(item => {
          // eslint-disable-next-line no-unused-vars
          const { geoplugin_areaCode, geoplugin_dmaCode, geoplugin_euVATrate, geoplugin_credit, geoplugin_regionName, geoplugin_inEU, geoplugin_continentCode, geoplugin_locationAccuracyRadius, geoplugin_currencySymbol, geoplugin_currencySymbol_UTF8, geoplugin_currencyConverter, ...rest } = item;
          return rest;
        });
        setLocation(filteredData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Container>
      <h1>Geolocation Data</h1>
      <p>The JSON IP Geolocation API allows you to determine the geographical location of visitors based on their IP addresses. It provides detailed location data such as country, region, city, and coordinates in a structured JSON format.</p>
      <Table responsive striped bordered hover variant="dark" className="table table-bordered mt-4 text-start">
        <thead>
          <tr>
            <th>Field</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {location.map((item, index) => (
            Object.entries(item).map(([key, value]) => (
              <tr key={`${index}-${key}`}>
                <td>{key}</td>
                <td>{value}</td>
              </tr>
            ))
          ))}
        </tbody>
      </Table>
      <hr />
    </Container>
  );
};

export default GeoPluginFetch;
