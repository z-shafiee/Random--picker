const optionsDisplay = document.getElementById('options-container');

const inputField = document.getElementById('input-area');

inputField.focus();
 inputField.addEventListener('keyup', (event) => { handleOptions(event.target.value); 

    if (event.key === 'Enter') { inputField.value = ''; startRandomSelection(); } });
     function handleOptions(text) { const items = text.split(',') .filter(item => item.trim() !== '').map(item => item.trim()); optionsDisplay.innerHTML = '';
          items.forEach(item => { const element = document.createElement('span'); 

            element.classList.add('option-tag');
             element.innerText = item; optionsDisplay.appendChild(element); }); }
             function startRandomSelection() { 
                const maxCounter = 30; let counter = 0;
                 const interval = setInterval(() => { const randomElement = selectRandomElement();
                     if (randomElement) { activateTag(randomElement); setTimeout(() => deactivateTag(randomElement), 100); }
                      counter++; 
                     if (counter === maxCounter) { clearInterval(interval);
                         const finalElement = selectRandomElement(); 

                        if (finalElement) activateTag(finalElement); } }, 100); } 
                        function selectRandomElement() {
                             const elements = document.querySelectorAll('.option-tag');
                              return elements[Math.floor(Math.random() * elements.length)]; }
                              
                         function activateTag(tag) { tag.classList.add('highlight'); } 
                         
                        function deactivateTag(tag) { setTimeout(() => tag.classList.remove('highlight'), 100); }
