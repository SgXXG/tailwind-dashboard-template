import { gql } from "@apollo/client";
import client from "../apollo-client";

export const getAllBookings = async (event) => {
  const { page, size } = event;
  const { data, errors, loading } = await client.query({
    query: gql`
      query bookings($page: Int, $size: Int) {
        getBookings(page: $page, size: $size) {
          nodes {
            _id
            seatNumbers
            to
            from
            amount
            phone
            email
            bookingDate
            departureDate
            returningDate
            tripType

            passengers {
              name
              gender
              age
            }
          }
          pageInfo {
            lastPage
            currentPage
            totalItems
          }
        }
      }
    `,
    variables: {
      page,
      size,
    },
  });
  return { data, loading, errors };
};

export const createBooking = async (event) => {
  const {
    from,
    to,
    transporter,
    user,
    busId,
    amount,
    departureDate,
    returningDate,
    seatNumbers,
    status,
    phone,
    email,
    bookingDate,
    billingId,
    passengerType,
    tripType,
    passengers,
  } = event;
  const { data, errors } = await client.mutate({
    mutation: gql`
      mutation createBooking(
        $from: String!
        $to: String
        $transporter: String
        $user: String
        $busId: String
        $amount: String
        $departureDate: String
        $returningDate: String
        $seatNumbers: [Int]
        $status: String
        $phone: String
        $email: String
        $bookingDate: String
        $billingId: String
        $passengerType: String
        $tripType: String
        $passengers: [Passengers]
      ) {
        createBooking(
          from: $from
          transporter: $transporter
          user: $user
          to: $to
          busId: $busId
          amount: $amount
          departureDate: $departureDate
          returningDate: $returningDate
          seatNumbers: $seatNumbers
          status: $status
          phone: $phone
          email: $email
          bookingDate: $bookingDate
          billingId: $billingId
          tripType: $tripType
          passengers: $passengers
          passengerType: $passengerType
        ) {
          amount
          seatNumbers
          phone
          email
          bookingDate
          departureDate
          returningDate
          tripType
        }
      }
    `,
    variables: {
      from,
      to,
      transporter,
      user,
      busId,
      amount,
      departureDate,
      returningDate,
      seatNumbers,
      status,
      phone,
      email,
      bookingDate,
      billingId,
      passengerType,
      tripType,
      passengers,
    },
  });
  return { data, errors };
};

export const cancelConfirmBooking = async (event) => {
  const { bookingId, status } = event;
  const { data, errors } = await client.mutate({
    mutation: gql`
      mutation cancelConfirm($bookingId: String!, $status: String!) {
        updateBooking(status: $status, bookingId: $bookingId) {
          _id
        }
      }
    `,
    variables: {
      bookingId,
      status,
    },
  });
  return { data, errors };
};

export const getAllTrips = async (event) => {
  const { filters, page, size } = event;
  const { data, errors, loading } = await client.query({
    query: gql`
      query trips($page: Int, $size: Int, $filters: TripFilter!) {
        getTrips(page: $page, size: $size, filters: $filters) {
          pageInfo {
            totalItems
          }

          nodes {
            _id
            name
            price
            departureTime
            from {
              _id
              locationName
              city
            }
            to {
              _id
              locationName
              city
            }
            buses {
              _id
              vehicleNo
              busImage
              vehicleModel
              vehicleBrand
              numberOfSeats
              availableSeats
              transporter {
                _id
                name
                address
                logo
              }
            }
          }
        }
      }
    `,
    variables: {
      page,
      size,
      filters,
    },
  });
  return { data, loading, errors };
};
