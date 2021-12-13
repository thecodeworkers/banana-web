const NewsLetterMutation = ({ email }) => {
  return (
    `
    mutation {
      createNewsLetter(input: { data: { email: "${email}" } }) {
        newsLetter {
          id
        }
      }
    }
    `
  )
}

export default NewsLetterMutation
