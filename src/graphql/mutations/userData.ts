const UserDataMutation = ({ name, lastname, document, address, email, phone, paymentMethod, number }) => {
  return (
    `
      mutation {
        createDatosDeUsuario(
          input: {
            data: {
              name: "${name}"
              lastname: "${lastname}"
              identification_document: "${document}"
              address: "${address}"
              email: "${email}"
              phone: "${phone}"
              payment_method : "${paymentMethod}"
              number: "${number}"
            }
          }
        ) {
          datosDeUsuario {
            name
            lastname
            identification_document
            address
            email
            phone
            payment_method
            number
          }
        }
      }
    `
  )
}



export default UserDataMutation
