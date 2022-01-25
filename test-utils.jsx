import React from 'react'
import {render} from '@testing-library/react'
import { BrowserRouter } from 'react-router';

// create a helper function that wraps around render
export const renderWithRouter = (ui, {route = '/'} = {}) => {
  window.history.pushState({}, 'Test page', route)

  return render(ui, {wrapper: BrowserRouter})
}

// // define a custom render method that includes things like global context providers, data stores, etc. 
// // To make this available globally, one approach is to define a utility file that re-exports everything from React Testing Library. 
// // You can replace React Testing Library with this file in all your imports.
// // - import { render, fireEvent } from '@testing-library/react';
// // + import { render, fireEvent } from '../test-utils';

// const AllTheProviders = ({children}) => {
//   return (
//     <ThemeProvider theme="light">
//       <TranslationProvider messages={defaultStrings}>
//         {children}
//       </TranslationProvider>
//     </ThemeProvider>
//   )
// }

// const customRender = (ui, options) =>
//   render(ui, {wrapper: AllTheProviders, ...options})

// // re-export everything
// export * from '@testing-library/react'

// // override render method
// export {customRender as render}