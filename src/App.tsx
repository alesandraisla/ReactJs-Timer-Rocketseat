import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Button } from './components/Button';
import { GlobalStyle } from './styles/globa';
import { defaultTheme } from './styles/themes/default';

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant='secondary' />
      <Button variant='danger' />
      <Button variant='success'/>
      <Button variant='primary' />
      <Button />

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
