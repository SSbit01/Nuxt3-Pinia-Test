<script setup lang="ts">
import { useUsersStore } from "../../stores/users";
import { useSkillFormStore } from "~~/stores/skillForm";


const skillFormData = useSkillFormStore()


const route = useRoute(),
      username = Array.isArray(route.params.username) ? route.params.username[0] : route.params.username,
      //
      usersStore = useUsersStore(),
      skills = usersStore.users[username]


function bindFormSkill(skill: string, level: number) {
  skillFormData.username = username
  skillFormData.skill = skill
  skillFormData.level = level
}


function removeSkill(skill: string) {
  delete skills[skill]
}
</script>



<template>
  <table>
    <tr v-for="(level, skill) in skills" :title="`${level}%`">
      <th>
        <label for="level" @click="typeof skill === 'string' && bindFormSkill(skill, level)">{{ skill }}</label>
      </th>
      <td>
        <progress max="100" :value="level" id="level"></progress>
      </td>
      <td>
        <button @click="typeof skill === 'string' && removeSkill(skill)">X</button>
      </td>
    </tr>
  </table>
</template>
