import { useState } from 'react';
import { Container, Box, TextField } from "@mui/material";
// import './App.css';



function App() {
  const [count, setCount] = useState(0);
  // https://www.youtube.com/results?search_query=comedy+scenes+in+hindi
  return (
    <>
      <Container >
        <Box component={"form"}
          sx={{ width: 500, maxWidth: "100%", margin: "10px auto" }}
        >
          <TextField
            fullWidth
            id='fullWidth'
            label="Enter Video Name:"
            autoFocus={true}
            placeholder='Enter Video Name:'
            // classes={""}
          />
        </Box>
      </Container>
    </>
  );
}

export default App;
