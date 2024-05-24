<script lang='ts'>
	import StudentModal from './StudentModal.svelte';
	import AddStudent from './AddStudent.svelte';

	import { getGender } from './utils.ts';


	/** @type {import('./$types').PageData} */
	export let data;
	const studentList = data.students;



	let studentModal;
	let selected = 0;

	function handleMouseOver(i) {
		// THIS IS A LOT MORE EFFICIENT THAN SVELTE class:active (DOESN'T LAG)
		// document.getElementById(`row-${rowfocus}`).classList.remove("active");
		selected = i;
		// document.getElementById(`row-${rowfocus}`).classList.add("active");
	}
</script>

<StudentModal bind:this={studentModal}/>

<div class="min-h-full m-12" >

	<h1 class="font-bold text-2xl">All Viettel Digital Talent students</h1>

	<div class="max-h-[70vh] overflow-x-auto my-4 border border-accent rounded-xl">
	  <table class="table ">
	    <!-- head -->
	    <thead class="sticky top-0 z-10 bg-base-300">
	      <tr>
	        <th>No.</th>
	        <th>Name</th>
	        <th>Gender</th>
	        <th>School</th>
	      </tr>
	    </thead>
	    <tbody>
	      <!-- row 1 -->
	      {#each studentList as student, i}
	      <tr class="hover" on:click={() => studentModal.showModal(studentList[selected])} 
	      		on:mouseover={() => handleMouseOver(i)}
	      		on:focus={() => handleMouseOver(i)}>
	        <td>{i+1}</td>
	        <td>{[student.last_name, student.middle_name, student.first_name].join(" ")}</td>
	        <td>{getGender(student.sex)}</td>
	        <td>{student.school}</td>
	      </tr>
	      {/each}
	    </tbody>
	  </table>
	</div>

	<div class="flex justify-center">
		<AddStudent />
	</div>
</div>
