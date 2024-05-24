import toast from 'svelte-french-toast';

const url = 'http://localhost:3000';

export async function getStudent(student_id) {
	try {
		const res = await fetch(url + '/api/student/' + student_id);
		const json = await res.json();

		return json;
	} catch (e) {
		console.log(e);
		toast.error("ERROR: " + e.message);
	}
}

export async function createStudent(student) {
	try {
		const res = await fetch(url + '/api/student/', {
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(student)
		});
		const json = await res.json();

		if (res.status == 200) {
			console.log(json);
			toast.success("Student created!");
		} else {
			throw json;
		}
	} catch (e) {
		console.error(e);
		toast.error("ERROR: " + e.message);
	}
}

export async function updateStudent(student) {
	try {
		const res = await fetch(url + '/api/student/' + student.student_id, {
			method: 'PUT',
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(student)
		});
		const json = await res.json();

		if (res.status == 200) {
			console.log(json);
			toast.success("Student updated!");
		} else {
			throw json;
		}
	} catch (e) {
		console.error(e);
		toast.error("ERROR: " + e.message);
	}
}

export async function deleteStudent(student_id) {
	try {
		const res = await fetch(url + '/api/student/' + student_id, {
			method: 'DELETE',
		});
		const json = await res.json();

		if (res.status == 200) {
			console.log(json);
			toast.success("Student deleted!");
		} else {
			throw json;
		}
	} catch (e) {
		console.error(e);
		toast.error("ERROR: " + e.message);
	}
}