import { useNavigate } from 'react-router-dom';
import beforeLoagin from '../../assets/images/chickenRoad/inoutlogo';

const Beforelogin = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      startTransition(() => navigate('/chickenroad'));
    }, 1000);
  }, []);

  return (
    <Container
      sx={{
        height: '100vh',
      }}
    >
      <Box>
        <img src={beforeLoagin} className="!h-[100vh]" />
        <p className="!text-white !font-bold">OUT</p>
      </Box>
      <p>Loading...</p>
    </Container>
  );
};

export default Beforelogin;
