var DsaArr = JSON.parse(localStorage.getItem("dsa")) || [];

      // Display the stored data in the table
      displayTable(DsaArr);

      // Add event listener to the form submission
      document.querySelector("form").addEventListener("submit", DsaApp);

      function DsaApp(event) {
        event.preventDefault();  // Prevent the form from submitting normally

        // Get values from input fields
        var quetitle = document.querySelector("#title").value;
        var quelink = document.querySelector("#link").value;
        var quediff = document.querySelector("#difficulty").value;

        // Validation - Check if any input is empty
        if (quetitle === "" || quelink === "" || quediff === "") {
          alert("Please fill out all fields.");
          return;
        }

        // Create an object to store the question
        var Dsaobj = {
          quetitle: quetitle,
          quelink: quelink,
          quediff: quediff
        };

        // Push the object into the array and update localStorage
        DsaArr.push(Dsaobj);
        localStorage.setItem("dsa", JSON.stringify(DsaArr));

        // Display updated table
        displayTable(DsaArr);

        // Clear the form fields after submission
        document.querySelector("form").reset();
      }

      // Function to display table data
      function displayTable(DsaArr) {
        var tbody = document.querySelector("tbody");
        tbody.innerHTML = ""; // Clear table body

        DsaArr.forEach(function (ele) {
          var tr = document.createElement("tr");

          var td1 = document.createElement("td");
          td1.innerText = ele.quetitle;

          var td2 = document.createElement("td");
          var a = document.createElement("a"); // Make the link clickable
          a.href = ele.quelink;
          a.target = "_blank"; // Open link in a new tab
          a.innerText = "Open Link";
          td2.appendChild(a);

          var td3 = document.createElement("td");
          td3.innerText = ele.quediff;

          var td4 = document.createElement("td");
          // Conditional logic to determine if revision is required
          td4.innerText = ele.quediff === "Easy" ? "No" : "Yes";

          tr.append(td1, td2, td3, td4);
          tbody.appendChild(tr);
        });
      }