import React from 'react'
import { Routes, Route } from 'react-router-dom'
import routes from '../routes'

function Auth() {
  return (
    <Routes>
      {routes.map(
        ({ layout, pages }) =>
          layout === 'auth' &&
          pages.map(({ path, element }) => (
            <Route exact path={path} element={element} key={element}/>
          ))
      )}
    </Routes>
  )
}
export default Auth
