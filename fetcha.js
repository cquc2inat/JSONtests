function Func() {
  fetch("load.json")
    .then(function (response) {
      if (response.status !== 200) {
        console.log(
          "Looks like there was a problem. Status Code: " + response.status
        );
        return;
      }

      // Examine the text in the response
      response.json().then(function (data) {
        console.log(data);
        document.getElementById("details").innerHTML =
          data.users[0].site + " - " + data.users[0].user;
      });
    })
    .catch(function (err) {
      console.log("Fetch Error :-S", err);
    });
}
