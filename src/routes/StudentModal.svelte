<script lang='ts'>
  export function showModal() {
    student_info_modal.showModal();
  }

  import StudentDisplay from './StudentDisplay.svelte';
  export let student = {};
</script>

<dialog id="student_info_modal" class="modal">
  <div class="modal-box !max-w-full !w-1/2">
    <StudentDisplay {student}/>
  </div>

  <form method="dialog" class="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
