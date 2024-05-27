var rollV, nameV, genderV, addressV, emailV;

function readFom() {
  uid1 = document.getElementById("uid").value;
  fname1 = document.getElementById("fname").value;
  mname1 = document.getElementById("mname").value;
  sname1 = document.getElementById("sname").value;
  eadd1 = document.getElementById("eadd").value;
  add1 = document.getElementById("add").value;
  console.log(uid1, fname1, mname1, sname1, eadd1,add1);
}
// Insert data

document.getElementById("insert").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + uid1)
    .set({
      uid: uid1,
      fname: fname1,
      mname: mname1,
      sname: sname1,
      eadd: eadd1,
      add: add1,
    });
  alert("Data Inserted");
  document.getElementById("uid").value = "";
  document.getElementById("fname").value = "";
  document.getElementById("mname").value = "";
  document.getElementById("sname").value = "";
  document.getElementById("eadd").value = "";
  document.getElementById("add").value = "";
};

// Read Data

document.getElementById("read").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + uid1)
    .on("value", function (snap) {
      document.getElementById("uid").value = snap.val().uid;
      document.getElementById("fname").value = snap.val().fname;
      document.getElementById("mname").value = snap.val().mname;
      document.getElementById("sname").value = snap.val().sname;
      document.getElementById("eadd").value = snap.val().eadd;
      document.getElementById("add").value = snap.val().add;
    });
};

document.getElementById("update").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + uid1)
    .update({
      //   UID
      uid: uid1,
      fname: fname1,
      mname: mname1,
      sname: sname1,
      eadd: eadd1,
      add: add1,
    });
  alert("Data Update");
  document.getElementById("uid").value = "uid";
  document.getElementById("fname").value = "fname";
  document.getElementById("mname").value = "mname";
  document.getElementById("sname").value = "sname";
  document.getElementById("eadd").value = "eadd";
  document.getElementById("add").value = "add";
};
document.getElementById("delete").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + uid1)
    .remove();
  alert("Data Deleted");
  document.getElementById("uid").value = "";
  document.getElementById("fname").value = "";
  document.getElementById("mname").value = "";
  document.getElementById("sname").value = "";
  document.getElementById("eadd").value = "";
  document.getElementById("add").value = "";
};
