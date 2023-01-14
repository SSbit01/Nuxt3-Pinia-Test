<script setup lang="ts">
import { useUsersStore } from "./stores/users";
import { useSkillFormStore } from "./stores/skillForm";


const usersStore = useUsersStore(),
      skillFormData = useSkillFormStore()



function addSkill() {
  if (!usersStore.users[skillFormData.username]) {
    usersStore.users[skillFormData.username] = {}
  }

  usersStore.users[skillFormData.username][skillFormData.skill] = skillFormData.level

  // RESET FORM
  skillFormData.username = ""
  skillFormData.skill = ""
  skillFormData.level = 50
}
</script>



<template>
  <header id="app-header">
    <form id="add-user-form" @submit.prevent="addSkill">
      <input v-model="skillFormData.username" type="text" placeholder="username" id="username" />
      <div>
        <label for="skill">Skill: </label>
        <input v-model="skillFormData.skill" type="text" placeholder="React" id="skill" />
      </div>
      <div>
        <label for="level">Level: </label>
        <input v-model="skillFormData.level" type="range" placeholder="username" id="level" />
      </div>
      <input type="submit" value="Add" />
    </form>
  </header>

  <nav id="users-navbar">
    <ul>
      <li v-for="(skills, user) in usersStore.users">
        <NuxtLink :to="`/users/${user}`" active-class="active-user">{{ user }}</NuxtLink>
      </li>
    </ul>
  </nav>

  <main>
    <NuxtPage />
  </main>
</template>



<style>
:root {
  --users-navbar-width: 20em;
}

#app-header {
  border-bottom: thin solid;
}

#add-user-form {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#users-navbar {
  position: fixed;
  top: 2.5em;
  bottom: 0;
  left: 0;
  width: var(--users-navbar-width);
  border-right: thin solid;
  overflow: auto;
}
#users-navbar > ul {
  list-style: none;
  font-size: 1.5em;
}

a.active-user {
  color: purple;
  font-weight: bold;
}
a:not(.active-user) {
  text-decoration: none;
}

main {
  margin-left: calc(var(--users-navbar-width) + 2em);
}
</style>