<script lang='ts'>
	import AddStudentBtn from './add/AddStudentBtn.svelte';
	import ViewStudentBody from './view/ViewStudentBody.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
	$: studentList = data.students;

</script>


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
	      <ViewStudentBody {studentList} />
	    </tbody>
	  </table>
	</div>

	<div class="flex justify-center">
		<AddStudentBtn />
	</div>
</div>
