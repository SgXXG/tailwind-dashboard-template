import { gql } from "@apollo/client";
import client from "../apollo-client";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const getOneTransport = async (transporterId) => {
  const { data, errors, loading } = await client.query({
    query: gql`
      query getOneTrans($transporterId: String!) {
        getTransporter(transporterId: $transporterId) {
          _id
          name
          address
          email
          logo
          status
          contactPhoneNumber
          website
          terminals {
            _id
            city
            cityCode
            latitude
            longitude
            locationName
            locationCode
          }
          routes {
            _id
            name
            from {
              _id
              city
              locationName
              address
            }
            to {
              _id
              locationName
              address
              city
            }
            price
            date
            departureTime
          }
        }
      }
    `,
    variables: {
      transporterId,
    },
  });
  return { data, errors, loading };
};

export const getAllTransporter = async (page = 1, size = 10) => {
  const { data, error, loading } = await client.query({
    query: gql`
      query transport($page: Int, $size: Int) {
        getTransporters(page: $page, size: $size) {
          pageInfo {
            pageSize
            lastPage
            totalItems
            nextPage
            hasNextPage
            hasPreviousPage
            currentPage
          }
          nodes {
            _id
            address
            name
            email
            terminals {
              _id
              address
              streetAddress
              latitude
              longitude
              locationName
              locationCode
            }
            contactPhoneNumber
            status
            website
            logo
          }
        }
      }
    `,
    variables: {
      page,
      size,
    },
  });
  return { data, loading, error };
};

export const getAllTransporterName = async (page = 1, size = 20) => {
  const { data, error, loading } = await client.query({
    query: gql`
      query transport($page: Int, $size: Int) {
        getTransporters(page: $page, size: $size) {
          pageInfo {
            pageSize
            totalItems
          }
          nodes {
            _id
            name
          }
        }
      }
    `,
    variables: {
      page,
      size,
    },
  });
  return { data, loading, error };
};

export const addTransport = async (event) => {
  const {
    name,
    address,
    logo,
    transporterId,
    status,
    contactPhoneNumber,
    email,
    website,
    terminals,
  } = event;
  const { data, errors } = await client.mutate({
    mutation: gql`
      mutation addTrans(
        $name: String!
        $address: String!
        $logo: String!
        $transporterId: String!
        $status: String!
        $contactPhoneNumber: String!
        $email: String!
        $website: String!
        $terminals: [String]
      ) {
        addTransporter(
          name: $name
          address: $address
          logo: $logo
          transporterId: $transporterId
          terminals: $terminals
          status: $status
          contactPhoneNumber: $contactPhoneNumber
          email: $email
          website: $website
        ) {
          _id
          name
          address
          logo
          terminals {
            latitude
          }
          status
          contactPhoneNumber
          website
        }
      }
    `,
    variables: {
      name,
      address,
      logo,
      transporterId,
      status,
      contactPhoneNumber,
      email,
      website,
      terminals,
      // transporterId,
    },
  });
  return { data, errors };
};

export const deleteTransport = async (transporterId) => {
  console.log(transporterId, "id");
  const { data, errors } = await client.mutate({
    mutation: gql`
      mutation deleteTrans($transporterId: String!) {
        deleteTransporter(transporterId: $transporterId)
      }
    `,
    variables: {
      transporterId,
    },
  });
  return { data, errors };
};

export const updateTransport = async (event) => {
  const {
    name,
    address,
    logo,
    transporterId,
    status,
    contactPhoneNumber,
    email,
    website,
  } = event;
  const { data, errors } = await client.mutate({
    mutation: gql`
      mutation updateTrans(
        $name: String!
        $address: String!
        $logo: String!
        $transporterId: String!
        $status: String!
        $contactPhoneNumber: String!
        $email: String!
        $website: String!
      ) {
        updateTransporter(
          name: $name
          address: $address
          logo: $logo
          status: $status
          contactPhoneNumber: $contactPhoneNumber
          email: $email
          website: $website
          transporterId: $transporterId
        ) {
          _id
          name
          address
          logo
          terminals {
            latitude
          }
          status
          contactPhoneNumber
          website
        }
      }
    `,
    variables: {
      name,
      address,
      logo,
      transporterId,
      status,
      contactPhoneNumber,
      email,
      website,
    },
  });
  return { data, errors };
};

export const ActivateDeactivateTransport = async (event) => {
  const { transporterId, status } = event;
  const { data, errors } = await client.mutate({
    mutation: gql`
      mutation updateTrans($transporterId: String!, $status: String!) {
        updateTransporter(status: $status, transporterId: $transporterId) {
          _id
          status
        }
      }
    `,
    variables: {
      transporterId,
      status,
    },
  });
  return { data, errors };
};
