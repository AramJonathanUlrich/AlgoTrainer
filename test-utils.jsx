import React from 'react'
import {render} from '@testing-library/react'
import { BrowserRouter } from 'react-router';

// create a helper function that wraps around render
export const renderWithRouter = (ui, {route = '/'} = {}) => {
  window.history.pushState({}, 'Test page', route)

  return render(ui, {wrapper: BrowserRouter})
}