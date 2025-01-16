import './App.css';
import TextField from '@mui/material/TextField';

const Wrapper: typeof TextField = ({ slotProps, ...props }) => (
  <TextField
    slotProps={{
      input: {
        ...slotProps?.input,
        sx: { borderRadius: '10px', ...slotProps?.input?.sx },
      },
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
