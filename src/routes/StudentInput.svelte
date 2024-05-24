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

<div class="grid grid-cols-3 gap-2 student-table">

<span>Email:</span>
<input type="email" bind:value={student.email} />
<span>Phone:</span>
<input type="phone" bind:value={student.phone} />

<span>First name:</span>
<input type="text" bind:value={student.first_name} />
<span>Middle name:</span>
<input type="text" bind:value={student.middle_name} />
<span>Last name:</span>
<input type="text" bind:value={student.last_name} />

<span>Gender:</span>
<select bind:value={student.sex}>
  <option value=1 >Male</option>
  <option value=2 >Female</option>
  <option value=0 >Prefer not to say</option>
  <option value=9 >Not applicable</option>
</select>

<span>Birth year:</span>
<input type="number" bind:value={student.birth_year} min=1000 max=3000 />

<span>School:</span>
<input type="text" bind:value={student.school}/>

<span>Country:</span>
<select bind:value={student.country_id}>
  <option value=1>Vietnam</option>
  <option value=2>Russia</option>
</select>

</div>

<style>
  .student-table span {
    @apply col-span-1;
  }

  .student-table input {
    @apply col-span-2 input input-sm input-bordered text-base;
  }

  .student-table select {
    @apply col-span-2 select select-sm select-bordered;
  }
</style>