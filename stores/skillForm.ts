import { defineStore } from "pinia"



export const useSkillFormStore = defineStore("users", () => {
  const username = ref(""),
        skill = ref(""),
        level = 50


  return { username, skill, level }
})