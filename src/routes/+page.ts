import toast from 'svelte-french-toast';

export async function load({ fetch }) {
    let studentList = [];
    try {
        // Fetch data from an API endpoint
        const response = await fetch('http://localhost:3000/api/student');
        studentList = await response.json();

        // console.log("Student list loaded");
    } catch (e) {
        console.error(e);
        toast.error("Failed to get student list");
    }

    // Return the data to be used in the page
    return {
        students: studentList
    };
}