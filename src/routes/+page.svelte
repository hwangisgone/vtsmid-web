<script lang='ts'>
	import StudentModal from './StudentModal.svelte';
	import AddStudent from './AddStudent.svelte';
	import { getGender } from './utils.ts';

	const studentList =
[{"student_id":1,"email":"lmckernan0@nytimes.com","phone":"5622427218","first_name":"Lewes","middle_name":"Réservés","last_name":"McKernan","sex":2,"school":"Divanoodle","country_id":2,"country_name":"Peru","birth_year":1987},
{"student_id":2,"email":"wjowling1@senate.gov","phone":"5938004446","first_name":"Wilow","middle_name":"Maï","last_name":"Jowling","sex":1,"school":"Kwimbee","country_id":1,"country_name":"China","birth_year":2009},
{"student_id":3,"email":"uditer2@about.com","phone":"1001027515","first_name":"Urban","middle_name":"Léana","last_name":"Diter","sex":2,"school":"Brightbean","country_id":2,"country_name":"Japan","birth_year":2008},
{"student_id":4,"email":"wrape3@ucoz.ru","phone":"7735199945","first_name":"Willow","middle_name":"Salomé","last_name":"Rape","sex":2,"school":"Aivee","country_id":1,"country_name":"Portugal","birth_year":2004},
{"student_id":5,"email":"eworrall4@google.cn","phone":"2444711836","first_name":"Ernaline","middle_name":"Mélinda","last_name":"Worrall","sex":2,"school":"Voomm","country_id":1,"country_name":"Russia","birth_year":2004},
{"student_id":6,"email":"zanthoin5@hhs.gov","phone":"7866478574","first_name":"Zaccaria","middle_name":"Yóu","last_name":"Anthoin","sex":1,"school":"Quimm","country_id":2,"country_name":"Indonesia","birth_year":2008},
{"student_id":7,"email":"uzammett6@e-recht24.de","phone":"6102554185","first_name":"Ulrike","middle_name":"Personnalisée","last_name":"Zammett","sex":1,"school":"DabZ","country_id":1,"country_name":"Brazil","birth_year":2002},
{"student_id":8,"email":"mconnaughton7@dailymotion.com","phone":"2802606794","first_name":"Merrel","middle_name":"Intéressant","last_name":"Connaughton","sex":2,"school":"Wordpedia","country_id":2,"country_name":"France","birth_year":1993},
{"student_id":9,"email":"lsouthby8@upenn.edu","phone":"4075852594","first_name":"Llewellyn","middle_name":"Sòng","last_name":"Southby","sex":1,"school":"Photobug","country_id":1,"country_name":"United States","birth_year":1967},
{"student_id":10,"email":"aoglevie9@miitbeian.gov.cn","phone":null,"first_name":"Arnold","middle_name":"Anaïs","last_name":"Oglevie","sex":1,"school":"Aivee","country_id":1,"country_name":"Colombia","birth_year":2011},];


	


	let studentModal;
	let selected = 0;

	function handleMouseOver(i) {
		// THIS IS A LOT MORE EFFICIENT THAN SVELTE class:active (DOESN'T LAG)
		// document.getElementById(`row-${rowfocus}`).classList.remove("active");
		selected = i;
		// document.getElementById(`row-${rowfocus}`).classList.add("active");
	}
</script>

<StudentModal bind:this={studentModal} student={studentList[selected]}/>

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
	      <tr class="hover" on:click={() => studentModal.showModal()} 
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
