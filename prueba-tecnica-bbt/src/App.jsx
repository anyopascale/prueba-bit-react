import Filter from "./components/Filter"
import Heading from "./components/Heading"
import State from "./components/State"
import CardItem from "./components/CardItem"

import "./App.scss"


function App() {
  return(
    <section className="container-fluid px-0 max-width py-5">
      <div className="row">
       
       {/* headign */}
      <Heading/>
       {/* headign */}

        <div className="col-12 col-md order-2 order-md-1">
          <div className="row g-0">

            <div className="col-12 mb-4">
              {/* Filter */}
              <Filter/>
              {/* Filter */}
            </div>

            <CardItem/>
           

          </div>
        </div>

        <div className="col-12 col-md-auto order-1 order-md-2 mb-3 mb-md-0">
          {/* State */}
          <State/>
          {/* State */}
        </div>

      </div>
    </section>
  )
}

export default App