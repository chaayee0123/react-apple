import axios from '../api/axios';

const Banner = () => {

  useEffect(() => {
    fetchData();
  }, [])
  
  const fetchData = () => {
    const response = axios.
    console.log(response);
  }
  return (
    <div>banner</div>
  )
}

export default Banner;