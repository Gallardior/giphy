import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('Renderiza bien', () => {
  const { getByText } = render(<App/>)
  const title = getByText(/Ultima Busqueda/i)
  expect(title).toBeInTheDocument
})