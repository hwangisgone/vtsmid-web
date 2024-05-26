<script lang='ts'>
  export let student = {
    "email": "muoivan@gmail.com", 
    "phone": "0987654321", 
    "last_name": "Nguyen", 
    "middle_name": "Van", 
    "first_name": "Muoi", 
    "birth_year": 2003, 
    "sex": 1, 
    "school": "HUST", 
    "country_id": 1,
    "country_name": "Unnamed"
  };

  // console.log(student);
  // console.log(student.country_id);
</script>

<div class="grid grid-cols-3 gap-2 student-table text-base">

<span>Email:</span>
<input class="student-input input" type="email" bind:value={student.email} />
<span>Phone:</span>
<input class="student-input input" type="phone" bind:value={student.phone} />

<span>First name:</span>
<input class="student-input input" type="text" bind:value={student.first_name} />
<span>Middle name:</span>
<input class="student-input input" type="text" bind:value={student.middle_name} />
<span>Last name:</span>
<input class="student-input input" type="text" bind:value={student.last_name} />

<span>Gender:</span>
<select class="student-select select select-sm" bind:value={student.sex}>
  <option value=1 >Male</option>
  <option value=2 >Female</option>
  <option value=0 >Prefer not to say</option>
  <option value=9 >Not applicable</option>
</select>

<span>Birth year:</span>
<input class="student-input input" type="number" bind:value={student.birth_year} min=1000 max=3000 />

<span>School:</span>
<input class="student-input input" type="text" bind:value={student.school}/>

<span>Country:</span>
<select class="student-select select select-sm" bind:value={student.country_id}>
  <option value=1>Vietnam</option>
  <option value=2>Russia</option>
</select>

</div>

<style>
  .student-table span {
    @apply col-span-1;
  }

  .student-input{
    @apply col-span-2 input-sm input-bordered text-base;
  }

  .student-select {
    @apply col-span-2 select-bordered;
  }
</style>