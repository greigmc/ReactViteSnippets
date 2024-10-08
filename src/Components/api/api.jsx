import { Container} from 'react-bootstrap';
import GeoPluginFetch from './geolocationDataApi';
import ApiFetch from './apiFetch';
import ApiAxiosUrl from './apiAxios';


export default function Api() {
  return (
    <Container className='my-5'>
      <ApiFetch />
      <ApiAxiosUrl />
      <GeoPluginFetch />
    </Container>

  );
}
