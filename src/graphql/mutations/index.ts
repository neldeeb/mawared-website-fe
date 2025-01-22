import gql from "graphql-tag";

// send Email mutation
export const sendEmailMutation = gql`
  mutation sendEmail(
    $name: String
    $email: String
    $message: String
    $phone: String
    $company_name: String
    $job_title: String
    $number_of_employees: String
  ) {
    sendContactEmail(
      input: {
        name: $name
        email: $email
        message: $message
        phone: $phone
        company_name: $company_name
        job_title: $job_title
        number_of_employees: $number_of_employees
      }
    ) {
      status
      message
    }
  }
`;
