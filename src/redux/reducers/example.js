import { CHANGE_EXAMPLE } from "../types/example"

const initialState = {
  example: null,
}

export default function(state = initialState, action) {
  switch (action.type) {
    case CHANGE_EXAMPLE: {
      const { id, content } = action.payload
      return {
        ...state,
        example: "UHUUU!",
      }
    }
    default:
      return state
  }
}
