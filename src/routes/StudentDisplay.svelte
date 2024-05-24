<script lang='ts'>
  import { getGender } from './utils.ts';
  import PenToSquareSolid from 'svelte-awesome-icons/PenToSquareSolid.svelte';
  import TrashSolid from 'svelte-awesome-icons/TrashSolid.svelte';

  export let student = {};
</script>

<div class="flex justify-between">
  <h3 class="font-bold text-xl pb-4">{[student.last_name, student.middle_name, student.first_name].join(" ")}</h3>
  <div class="flex gap-2">
    <button class="btn btn-sm btn-info">
      <PenToSquareSolid size="16"/>
      Update
    </button>
    <button class="btn btn-sm btn-error">
      <TrashSolid size="16"/>
      Delete
    </button>
  </div>
</div>

<div class="grid grid-cols-3 gap-2 student-table">
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

  <span>Gender</span>
  <p>{getGender(student.sex)}</p>
  <span>Birth year:</span>
  <p>{student.birth_year}</p>
  <span>School:</span>
  <p>{student.school}</p>
  <span>Country:</span>
  <p>{student.country_name}</p>
  <span></span><p class="py-4">Press ESC key or click outside to close</p>
</div>



<style>
  .student-table span {
    @apply col-span-1;
  }

  .student-table p {
    @apply col-span-2;
  }
</style>