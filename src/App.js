import { useEffect } from 'react';
import CV from './cv';
import Box from '@mui/material/Box';
import Background from './Background';

function App() {
  useEffect(() => {
    document.title = "Mehmet Yaylaci's Personal Site"
  }, []);

  return (
    <Box sx={{ width: '100vw', height: '100vh'}}>
      <Background sx={{ width: '100vw', height: '100vh'}} />
      <CV />
    </Box>
  );
}

export default App;
