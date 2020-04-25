import gql from "graphql-tag";
import Constants from "expo-constants";

export const GET_ME = Constants.manifest.extra.mode === "driver" ? gql`
query {
  getMeDriver {
    id
    email
    phone_number
    nick_name
    first_name
    last_name
    token_version
    password_hash
    profile_picture_url
    address1
    address2
    address_city
    address_location
    postal_code
    state
    current_partner_id
    current_partner {
      business_name
      license_number
    }
    date_of_birth
    deleted_at
    created_at
    ssn
    partner_id
    partner {
      id
      license_number
      state_issued
      stripe_connect_id
      business_name
      business_entity_type
      created_at
      deleted_at
    }
    city_id
    city {
      id
      name
    }
    online
    scheduled_trips
    email_verified
    first_name_verified
    last_name_verified
    address_verified
  }
}
` : gql`
query {
  getMeUser {
    id
    first_name
    email
    last_name
    phone_number
    profile_picture_url
    stripe_customer_id
    created_at
    token_version
    password_hash
    email_verified
  }
}
`;

export const SUBSCRIBE_TO_ME = Constants.manifest.extra.mode === "customer" ? gql`
  subscription SubscribeToMe($id: Int!) @hasura {
    users(where: { id: { _eq: $id } }) {
      id
      first_name
      last_name
      email
      email_verified
      phone_number
      profile_picture_url
    }
  }
` : gql`
  subscription SubscribeToMe($id: Int!) @hasura {
    drivers(where: { id: { _eq: $id } }) {
      id
      online
      scheduled_trips
      first_name
      last_name
      nick_name
      profile_picture_url
    }
  }
`;

export const UPDATE_ACCOUNT = Constants.manifest.extra.mode === "driver" ? gql`
  mutation UpdateDriver($id: Int!, $data: drivers_set_input!) @hasura {
    update_drivers(where: {id: {_eq: $id}}, _set: $data) {
      returning {
        id
      }
    }
  }
` : gql`
  mutation UpdateCustomer($id: Int!, $data: users_set_input!) @hasura {
    update_users(where: {id: {_eq: $id}}, _set: $data) {
      returning {
        id
      }
    }
  }
`;

export const UPDATE_PUSH_TOKEN = Constants.manifest.extra.mode === "driver"
  ? gql`
    mutation UpdatePushToken($token: String) @hasura {
      update_drivers(where: {}, _set: { push_token: $token }) {
        affected_rows
      }
    }`
  : gql`
    mutation UpdatePushToken($token: String) @hasura {
      update_users(where: {}, _set: { push_token: $token }) {
        affected_rows
      }
    }`;

export const GET_VARIABLES = gql`
  query GetVariables @hasura {
    variables {
      key
      value
    }
  }
`;
