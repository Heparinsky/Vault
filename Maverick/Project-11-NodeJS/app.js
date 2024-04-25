function getForm() {
    let activityType = document.getElementById("activity").value;
    let coefficient = 0;

    if (activityType === "semi-pushups") {
        coefficient = 2;
    } else if (activityType === "pushups") {
        coefficient = 4;
    } else if (activityType === "situps") {
        coefficient = 3;
    } else if (activityType === "squats") {
        coefficient = 5;
    } else if (activityType === "legraises") {
        coefficient = 7.5;
    } else if (activityType === "russian-twists") {
        coefficient = 3;
    } else if (activityType === "mixed") {
        coefficient = 10;
    } else if (activityType === "tubes") {
        coefficient = 0.25;
    }

    let dateData = document.getElementById("date").value;
    let repsData = Number(document.getElementById("reps").value);
    let xpData = repsData * coefficient;
    let myForm = {
        date: dateData,
        activity: activityType,
        reps: repsData,
        xp: xpData,
    };
    // console.log(myForm);
    console.log(myForm);
}

let userInfo = {
    name: "Faraz",
    age: 21,
    job: "Musician",
};

console.log(amir);

const fs = require("fs");
let userJson = fs.readFileSync("sports.json");
let users = JSON.parse(userJson);
users.push(userInfo);
userJson = JSON.stringify(users);
fs.writeFileSync("sports.json", userJson);
