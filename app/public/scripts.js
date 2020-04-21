document.querySelector('button[type="submit"]').addEventListener('click', () => {
   fetch('/fibonacci')
      .then(res => res.json())
      .then(data =>
         data.forEach(goodness => {
            document.body.innerHTML += `
            <ul>
               <li> ${goodness.body} </li>
            </ul>
            `;
         })
      );
});
