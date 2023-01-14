import { defineStore } from "pinia"



interface Users {
  [username: string]: {
    [skill: string]: number
  }
}



export const useUsersStore = defineStore("users", () => {
  const users: Users = {
    Tom: {
      React: 90,
      Angular: 80
    },
    Lukas: {
      React: 70,
      Angular: 95
    }
  }

  return { users }
})