<script>
	import StudentModal from '../common/StudentModal.svelte';
	import { getGender } from '../common/utils.ts';

	import StudentDisplay from './StudentDisplay.svelte';

	export let studentList;

	let studentDisplayModal;
	let selectedIndex = 0;

	function handleMouseOver(i) {
		// THIS IS A LOT MORE EFFICIENT THAN SVELTE class:active (DOESN'T LAG)
		// document.getElementById(`row-${rowfocus}`).classList.remove("active");
		// document.getElementById(`row-${rowfocus}`).classList.add("active");
	}
</script>

<StudentModal bind:this={studentDisplayModal}>
	<StudentDisplay student={studentList[selectedIndex]}/>
</StudentModal>

{#each studentList as student, i}
<tr class="hover" on:click={() =>  { studentDisplayModal.showModal(); selectedIndex = i; }} 
	on:mouseover={() => handleMouseOver(i)}
	on:focus={() => handleMouseOver(i)}>

	<td>{i+1}</td>
	<td>{[student.last_name, student.middle_name, student.first_name].join(" ")}</td>
	<td>{getGender(student.sex)}</td>
	<td>{student.school}</td>
</tr>
{/each}

