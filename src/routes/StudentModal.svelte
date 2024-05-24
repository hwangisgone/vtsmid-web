<script lang='ts'>
  import StudentDisplay from './StudentDisplay.svelte';

  let student = {};
  let updateState = false;

  export function showModal(in_student) {
    student_info_modal.showModal();
    updateState = false;
    student = in_student;
  }
</script>

<dialog id="student_info_modal" class="modal">
  <div class="modal-box !max-w-full !w-1/2">
    <StudentDisplay {student} bind:updateState />
  </div>

  <form method="dialog" class="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
