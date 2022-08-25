//import { result } from "lodash"

export const addFields = async (name, score) => {
  const userDetails = {
    user: name.value,
    score: score.value
  }

  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/sPf8SKzZBKXXEHwaDGgG/scores', {
    method: 'POST',
    body: JSON.stringify(userDetails),
    headers: {
      'content-type': 'application/json'
    }
  })
  return response.result;
}
export const getData = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/sPf8SKzZBKXXEHwaDGgG/scores').then((response) => response.json());
  return response.result;
}