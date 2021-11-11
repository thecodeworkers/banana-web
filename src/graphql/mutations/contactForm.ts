const ContactMutation = () => (`
  mutation {
    createContactInformation(input: { data: { name: "test", email: "test@test.com", company: "test company", about: "about test", how: "This is how we do this test" } }) {
      contactInformation {
        id
      }
    }
  }
`)

export default ContactMutation
