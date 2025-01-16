import './App.css';
import TextField from '@mui/material/TextField';

const Wrapper: typeof TextField = ({ InputProps, ...props }) => (
  <TextField
    InputProps={{
      ...InputProps,
      sx: { borderRadius: '10px', ...InputProps?.sx },
    }}
    {...props}
  />
);

function App() {
  return (
    <div>
      <div className="App">
        <Wrapper />
      </div>
    </div>
  );
}

export default App;
