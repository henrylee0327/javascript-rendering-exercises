;(function () {
  // convert a student JavaScript object to an HTML string
  function buildStudentHTML (student) {
    // TODO: Your code goes here.
    return `
        <div style="
          name: ${student.name};
          presence: ${student.isPresent};
        ">
        </div>
    `
  }

  // here we have five students, each represented by a JavaScript Object,
  // all collected into an Array.
  const studentsData = [
    {
      name: 'Kamilah',
      isPresent: true
    },
    {
      name: 'Kim',
      isPresent: true
    },
    {
      name: 'Stuart',
      isPresent: false
    },
    {
      name: 'Ron',
      isPresent: true
    },
    {
      name: 'Krissy',
      isPresent: false
    }
  ]

  const contentElement = document.getElementById("content")
  const btnElement = document.getElementById("studentsBtn")
  // Now that we have seen a few examples, try to write your own button click and
  // attach event handler code below.
  function clickStudentsBtn () {

      contentElement.innerHTML = `
      <div class="d-flex flex-column align-items-center">
      ${studentsData.map(buildStudentHTML).join('')}
      </div>
      `
  }
    btnElement.addEventListener("click", clickStudentsBtn)
})()
