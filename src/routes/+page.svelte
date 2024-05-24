<script lang='ts'>
	
	const studentList =
[{"student_id":1,"email":"lmacgown0@yandex.ru","phone":"4907745044","first_name":"Lizette","middle_name":"Örjan","last_name":"MacGown","sex":1,"school":"Buzzshare","country_id":1},
{"student_id":2,"email":"ggallety1@storify.com","phone":"7438449093","first_name":"Georgine","middle_name":"Mélodie","last_name":"Gallety","sex":1,"school":"Realcube","country_id":2},
{"student_id":3,"email":"dtrevon2@goodreads.com","phone":"6575649940","first_name":"Delia","middle_name":"Vénus","last_name":"Trevon","sex":1,"school":"Zoovu","country_id":1},
{"student_id":4,"email":"bmateuszczyk3@pagesperso-orange.fr","phone":"9038372183","first_name":"Boniface","middle_name":"Noëlla","last_name":"Mateuszczyk","sex":2,"school":"Mycat","country_id":1},
{"student_id":5,"email":"ccracie4@whitehouse.gov","phone":"2608486845","first_name":"Cyndy","middle_name":"Personnalisée","last_name":"Cracie","sex":2,"school":"Flashset","country_id":2},
{"student_id":6,"email":"ogrowcott5@t.co","phone":"6117200014","first_name":"Orlan","middle_name":"Chloé","last_name":"Growcott","sex":2,"school":"Realfire","country_id":1},
{"student_id":7,"email":"carnholdt6@shutterfly.com","phone":"4607126694","first_name":"Chelsey","middle_name":"Björn","last_name":"Arnholdt","sex":1,"school":"Jayo","country_id":1},
{"student_id":8,"email":"hhearn7@php.net","phone":null,"first_name":"Hakeem","middle_name":"Médiamass","last_name":"Hearn","sex":2,"school":"Youfeed","country_id":2},
{"student_id":9,"email":"bmcgeoch8@histats.com","phone":"9602524309","first_name":"Beatrisa","middle_name":"Håkan","last_name":"McGeoch","sex":1,"school":"Voonder","country_id":2},
{"student_id":10,"email":"bpetrichat9@mail.ru","phone":"7853916497","first_name":"Bernard","middle_name":"Hélèna","last_name":"Petrichat","sex":2,"school":"Feedmix","country_id":1}];

	function getGender(num) {
		switch(num){	// https://en.wikipedia.org/wiki/ISO/IEC_5218
			case 1: return "Male";
			case 2: return "Female";
			case 9: return "Not applicable";
			default: return "Unknown";
		}
	}
</script>


<div class="min-h-full m-12" >

	<h1>All Viettel Digital Talent students</h1>
	<button>Add student</button>
	<div class="overflow-x-auto">
	  <table class="table">
	    <!-- head -->
	    <thead>
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
	      <tr class="hover" on:click={}>
	        <td>{i}</td>
	        <td>{[student.last_name, student.middle_name, student.first_name].join(" ")}</td>
	        <td>{getGender(student.sex)}</td>
	        <td>{student.school}</td>
	      </tr>
	      {/each}
	    </tbody>
	  </table>
	</div>


	<button class="btn btn-primary ">Daisyui Button</button>
</div>
