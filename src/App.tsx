import {useState} from 'react'
import ButtonUsage from "./components/test1/test1.tsx";
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

        Lorem ipsum dolor sit amet.
        <br/>
        <br/>
        <CssBaseline />
        <ButtonUsage />

    </>
  )
}

export default App
