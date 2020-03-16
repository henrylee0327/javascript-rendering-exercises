;(function () {
  // convert a nametag JavaScript object to an HTML string
  function buildNametagHTML (nametag) {
    // TODO: Your code goes here.
    return `
        <div class="nametag" style="
        border-style: solid;
        border-color: #212529;
        border-width: thin;
        margin: 5px;
        ">
        <p class="helloTag" style="
          height: 40px;
          width: 160px;
          background-color: blue;
          color: white;
          text-align: center;
          margin: 0;
          line-height: 2.5;
        ">Hello, my name is:</p>  
        <p class="studentName" style="
          height: 60px;
          width: 160px;
          background-color: #fff;
          text-align: center;
          margin: 0;
          line-height: 4.0;
        ">${nametag.name}</p>
        </div>
    `
  }

  // here we have five nametags, each represented by a JavaScript String,
  // all collected into an Array.
  const nametagsData = [
      {
        name: 'Kamilah'
      },
      {
        name: 'Kim'
      },
      {
        name: 'Stuart'
      },
      {
        name: 'Ron'
      },
      {
        name: 'Krissy'
      },
  ]

  // Now that we have seen a few examples, try to write your own button click and
  // attach event handler code below.
  const contentElement = document.getElementById("content")
  const btnEl = document.getElementById("nametagsBtn")

  function clickNametagsBtn () {
    contentElement.innerHTML = `
    <div class="d-flex flex-column align-items-center">
    ${nametagsData.map(buildNametagHTML).join('  ')}
    </div>
    `
  }
  btnEl.addEventListener("click", clickNametagsBtn)
})()
