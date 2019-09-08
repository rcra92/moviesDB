import { CHANGE_EXAMPLE } from "../types/example"

export const changeExample = () => ({
  type: CHANGE_EXAMPLE,
  payload: {
    example: "example",
  },
})
