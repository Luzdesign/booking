import { Route, Switch } from "react-router-dom";
import CarAvailable from "../CarRentalsPage/CarAvailable";
import CarPayment from "../CarRentalsPage/carPayment";
import CarRentals from "../components/CarRentalsPage/CarRentals";
import CarSearch from "../components/CarRentalsPage/CarSearch";
import AttractionIndex from '../components/Attractions/AttractionIndex'
import ListLanding from "../components/Attractions/pages_and_layouts/attractionPlaceListpage/ListLanding";

import ViewPlaceLanding from "../components/Attractions/pages_and_layouts/viewPlace/ViewPlaceLanding";
import Flights from "../FlightsPage/Flights";
import FlightsDetailsPage from "../FlightsPage/FlightsDetailsPage";
import Login from "../components/Login/Login";

export default function AllRoutes(){

    return(
        <>
          <Switch>
            <Route exact path="/">

            </Route>
            <Route exact path="/flights">
              <Flights/>
            </Route>
            <Route exact path="/flightsDetails">
              <FlightsDetailsPage/>
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/carrentals">
                <CarRentals/>
            </Route>
            <Route exact path="/car-available">
                <CarAvailable/>
            </Route>
            <Route exact path="/car-available/:id">
                <CarPayment/>
            </Route>
            <Route exact path="/carrentals/:id">
              <CarSearch/>
          </Route>
          <Route exact path="/attractions/:country">
             <ListLanding/>
            </Route>
            <Route exact path="/attractions/:country/:id">
             <ViewPlaceLanding/>
          </Route>
          <Route exact path="/attractions">
             <AttractionIndex/>
            </Route>
          </Switch>
        </>
    )
}
