import { createSelector } from 'reselect';

const bookingReducer = (state) => state.bookings;

export const selectBookingByPnr = createSelector([bookingReducer], (bookingSlice) => bookingSlice.bookings);

export const isFetchingPnr = createSelector([bookingReducer], (slice) => slice.isFetching);

export const selectBookings = createSelector([bookingReducer], (slice) => slice.bookings);

export const selectIsClickPayment = createSelector([bookingReducer], (slice) => slice.isClickPayment);
