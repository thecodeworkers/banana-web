const ContactMutation = ({ name, email, company, about, how }) => {
  return (
    `
    mutation {
        createContactInformation(input: { data: { name: "${name}", email: "${email}", company: "${company}", about: "${about}", how: "${how}" } }) {
          contactInformation {
            id
          }
        }
      }
    `
  )
}

export default ContactMutation
