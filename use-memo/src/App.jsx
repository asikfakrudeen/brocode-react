import React from 'react'
import ExpensiveCalculator from './component/ExpensiveCalculator'
import ProductPage from './component/ProductPage'
import EmployeeSearch from './component/EmployeeSearch'
import AnalyticsTracker from './component/AnalyticsTracker'
import ShoppingCart from './component/ShoppingCart'

const App = () => {
  return (
    <div>
      {/* <ExpensiveCalculator/> */}
      {/* <ProductPage /> */}
      {/* <EmployeeSearch employees={[
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
        { id: 3, name: "Charlie" },
        { id: 4, name: "David" }
      ]} /> */}
      <ShoppingCart/>
      {/* <AnalyticsTracker /> */}
    </div>
  )
}

export default App