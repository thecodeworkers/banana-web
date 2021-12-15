const UserDataMutation = ({ name, lastname, identification_document, address, email, phone }) => {
  return (
    `
      mutation {
        createDatosDeUsuario(
          input: {
            data: {
              name: "${name}"
              lastname: "${lastname}"
              identification_document: "${identification_document}"
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
