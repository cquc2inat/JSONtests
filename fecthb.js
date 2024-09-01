function Func() {
  fetch("load.json")
    .then((res) => {
      return res.json();
    })
    .then(
      (data) =>
        (document.getElementById("details").innerHTML =
          data.users[0].site + " - " + data.users[0].user)
    );
}
