/**1.- Utilice Ajax para consumir la api https://randomuser.me/api/ que retorna en cada 
petición los datos de perfil de un usuario fake. 
Primero verifique en el navegador la api y compruebe que información retorna. 
Utilice el visor de Json del sitio http://jsonviewer.stack.hu/ para pegar el texto plano de 
json y con el visor facilitar el análisis de la respuesta. 
Realice una página con un botón que permita mostrar los principales datos e imagen 
pequeña del perfil recuperado en forma de lista. Agregue a cada entrada un botón para 
eliminar esa entrada cuando sea necesario.  */

const userListElement = document.getElementById("userList");

      function getRandomUser() {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "https://randomuser.me/api/");
        xhr.onload = () => {
          if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            const user = data.results[0];
            const userCard = document.createElement("li");
            userCard.classList.add("user-card");

            const userImage = document.createElement("img");
            userImage.src = user.picture.thumbnail;

            const userName = document.createElement("span");
            userName.textContent = `${user.name.first} ${user.name.last}`;

            const removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            removeButton.addEventListener("click", () => {
              userListElement.removeChild(userCard);
            });

            userCard.appendChild(userImage);
            userCard.appendChild(userName);
            userCard.appendChild(removeButton);
            userListElement.appendChild(userCard);
          } else {
            console.error("Error fetching data from server.");
          }
        };
        xhr.onerror = () => console.error("Error making request.");
        xhr.send();
      }

      document.getElementById("getUser").addEventListener("click", getRandomUser);
