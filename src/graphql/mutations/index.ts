import gql from "graphql-tag";

// send Email mutation
export const sendEmailMutation = gql`
  mutation sendEmail(
    $name: String
    $email: String
    $message: String
    $phone: String
  ) {
    sendContactEmail(
      input: { name: $name, email: $email, message: $message, phone: $phone }
    ) {
      status
      message
    }
  }
`;
