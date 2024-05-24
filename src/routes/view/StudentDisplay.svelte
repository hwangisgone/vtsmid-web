<script lang='ts'>
  import PenToSquareSolid from 'svelte-awesome-icons/PenToSquareSolid.svelte';
  import TrashSolid from 'svelte-awesome-icons/TrashSolid.svelte';

  import StudentInput from '../common/StudentInput.svelte';
  import { updateStudent, deleteStudent } from '../common/api.ts';
  import { getGender  } from '../common/utils.ts';

  import { currentModal } from '$lib/stores.ts';
  
  export let student = {};
  export let updateState = false;
</script>

<div class="md:flex justify-between pb-4">
  <h3 class="font-bold text-xl pb-4">{[student.last_name, student.middle_name, student.first_name].join(" ")}</h3>

  <div class="flex gap-2">
  {#if !updateState}
    <button class="btn btn-sm btn-info"
      on:click={() => updateState = true}>
      <PenToSquareSolid size="16"/>
      Update
    </button>
    <button class="btn btn-sm btn-error"
      on:click={() => { $currentModal.close(); deleteStudent(student.student_id); updateState = false; } }>
      <TrashSolid size="16"/>
      Delete
    </button>

  {:else}
    <button class="btn btn-sm btn-outline"
      on:click={() => { updateState = false; }}>
      Cancel
    </button>
    <button class="btn btn-sm btn-success" 
      on:click={() => { updateState = false; updateStudent(student); $currentModal.close(); } }>
      Confirm
    </button>
  {/if}
  </div>
</div>


{#if updateState}

<StudentInput bind:student />

{:else}

<div class="grid grid-cols-3 gap-2 student-table text-base">
  <span>Email:</span>
  <p>{student.email}</p>
  <span>Phone:</span>
  <p>{student.phone}</p>

  <span>First name:</span>
  <p>{student.first_name}</p>
  <span>Middle name:</span>
  <p>{student.middle_name}</p>
  <span>Last name:</span>
  <p>{student.last_name}</p>

  <span>Gender:</span>
  <p>{getGender(student.sex)}</p>
  <span>Birth year:</span>
  <p>{student.birth_year || "Not provided"}</p>
  <span>School:</span>
  <p>{student.school}</p>
  <span>Country:</span>
  <p>{student.country_name}</p>
</div>

{/if}

<p class="pt-4 text-center text-base-content">Press ESC key or click outside to close</p>


<style>
  .student-table span {
    @apply col-span-1;
  }

  .student-table p {
    @apply col-span-2;
  }
</style>