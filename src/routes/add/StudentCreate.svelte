<script lang='ts'>
  import StudentInput from '../common/StudentInput.svelte';
  import { createStudent } from '../common/api.ts';
  import { rerunLoadFunc } from '../common/utils.ts';

  import { currentModal } from '$lib/stores.ts';

  let student = {};
</script>

<div class="md:flex justify-between pb-4">
  <h3 class="font-bold text-xl pb-4">Add a new student</h3>
</div>

<StudentInput bind:student />

<div class="flex w-full justify-end pt-4">
  <button class="btn btn-sm btn-success" 
    on:click={() => { createStudent(student); $currentModal.close(); rerunLoadFunc(); } }>
    Confirm
  </button>
</div>

<p class="pt-4 text-center text-base-content">Press ESC key or click outside to close</p>