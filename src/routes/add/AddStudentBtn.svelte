<script>
	import UserPlusSolid from 'svelte-awesome-icons/UserPlusSolid.svelte';
	import StudentModal from '../common/StudentModal.svelte';
	import StudentCreate from './StudentCreate.svelte';
	
	let studentCreateModal;
</script>

<StudentModal bind:this={studentCreateModal}>
	<StudentCreate />
</StudentModal>

<button class="btn btn-secondary"
	on:click={() => studentCreateModal.showModal()}>
	<UserPlusSolid size="20"/>
	Add student
</button>
