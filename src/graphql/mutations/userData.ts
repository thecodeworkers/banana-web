const UserDataMutation = ({ name, lastname, document, address, email, phone }) => {
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
          }
        }
      }
    `
  )
}



export default UserDataMutation
