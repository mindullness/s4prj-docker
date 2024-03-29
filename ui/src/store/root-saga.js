import { all, call } from 'redux-saga/effects';
import { airportSaga } from './airport/airport.saga';
import { userSagas } from './user/user.sagas';
import { bookingSaga } from './booking/booking.saga';
import { flightSagas } from './flight/flight.saga';
import { manage_bookingSaga } from './manage-booking/mb.saga';
import { seatSaga } from './seat/seat.saga';
import { passengerSagas } from './passenger/passenger.saga';
import { itinerarySagas } from './itinerary/itinerary.saga';

export function* rootSaga() {
  yield all([
    call(airportSaga),
    call(userSagas),
    call(bookingSaga),
    call(manage_bookingSaga),
    call(seatSaga),
    call(flightSagas),
    call(passengerSagas),
    call(itinerarySagas)
  ]);
}
