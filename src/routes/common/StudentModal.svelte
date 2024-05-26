<script lang='ts'>
  import { currentModal } from '$lib/stores.ts';
  let student_info_modal;

  export function showModal() {
    student_info_modal.showModal();
    $currentModal = student_info_modal;
  }
</script>

<dialog bind:this={student_info_modal} class="modal">
  <div class="modal-box !max-w-full !w-1/2">
    <slot/>
  </div>

  <form method="dialog" class="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
