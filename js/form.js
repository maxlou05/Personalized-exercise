// import {getExercisePlan} from "getExercise";
class Exercise{
    constructor(name, intensity, type, requirements) {
        this.name = name;
        this.intensity = intensity;  // 0 for moderate, 1 for intense
        this.type = type;  // 0 for cardio, 1 for flexibility/range of motion/balance, 2 for strength
        this.requirements = requirements;  // 0 for legs, 1 for back, 2 for hips, 3 for arms
    }
}
// time should be at least 10 minutes

function getExercisePlan(intensity, type, time, requirements) {
    const exerciseBank = [];
    // Cardio - intense
    exerciseBank.push(new Exercise("High knees with arms up and down", 1, 0, [0, 3]));
    exerciseBank.push(new Exercise("Elbow to knee", 1, 0, [0, 3]));
    exerciseBank.push(new Exercise("Punches to the side", 1, 0, [3]));
    // Cardio - moderate
    exerciseBank.push(new Exercise("High knees with opposite arms swinging (weights optional)", 0, 0, [0, 3]));
    exerciseBank.push(new Exercise("Go for a brisk walk outside", 0, 0, [0]));
    exerciseBank.push(new Exercise("Side to side stepping", 0, 0, [0, 3]));
    // flexibility/range of motion/balance - intense
    exerciseBank.push(new Exercise("Heel raises and side arm raises", 1, 1, [0, 3]));
    exerciseBank.push(new Exercise("Straight leg lifts to the back", 1, 1, [0]));
    exerciseBank.push(new Exercise("Reach down with straight back, then shoulder shrug", 1, 1, [1, 2]));
    // flexibility/range of motion/balance - moderate
    exerciseBank.push(new Exercise("Ankle rotations and flexes (on one leg)", 0, 1, [0]));
    exerciseBank.push(new Exercise("Stand with good posture and close eyes", 0, 1, []));
    exerciseBank.push(new Exercise("Shoulder rotations", 0, 1, []));
    exerciseBank.push(new Exercise("Side arm lifts", 0, 1, [3]));
    exerciseBank.push(new Exercise("Front arm lift", 0, 1, [3]));
    exerciseBank.push(new Exercise("Heel-toe walking", 0, 1, [0]));
    exerciseBank.push(new Exercise("Torso twists", 0, 1, []));
    // strength - intense
    exerciseBank.push(new Exercise("Wall push-up", 1, 2, [3]));
    exerciseBank.push(new Exercise("Squats (chair)", 1, 2, [0]));
    exerciseBank.push(new Exercise("Opposite arm and leg raises", 1, 2, [0, 3]));
    exerciseBank.push(new Exercise("Bridge", 1, 2, [2]));
    exerciseBank.push(new Exercise("Modified plank", 1, 2, [1]));
    // strength - moderate
    exerciseBank.push(new Exercise("Arm rows", 0, 2, [3]));
    exerciseBank.push(new Exercise("Leg raises on chair", 0, 2, [0]));
    exerciseBank.push(new Exercise("Push-ups on chair", 0, 2, [3]));

    const regiment = [];
    for (let i = 0; i < exerciseBank.length; i++) {
        const element = exerciseBank[i];
        let pass = true;
        //console.log(element);
        if (element.intensity == intensity && element.type == type) {
            console.log("SOMETHING");
            for(let j = 0; j < element.requirements.length; j++) {
                for(let k = 0; k < requirements.length; k++) {
                    if(element.requirements[j] == requirements[k]) {
                        pass = false;
                        console.log(requirements[k]);
                        break;
                    }
                }
                if(pass == false) {break;}
            }
            if(pass) {
                console.log("--------ADDED AN EXERCISE!!!---------");
                regiment.push(element);
            }
        }
    }

    console.log(regiment);

    // time should be in seconds
    // exercises should be at least 30s, up to 60s
    let dt = time / regiment.length;
    let counter = 0;
    let len = regiment.length;
    while(dt < 30) {
        let r = Math.floor(Math.random()*regiment.length);
        regiment.pop(r);
        dt = time / regiment.length;
    }
    while(dt > 60) {
        regiment.push(regiment[counter]);
        counter++;
        if(counter > len-1){
            counter = 0;
        }
        dt = time / regiment.length;
    }

    let ret = {time: dt, plan: regiment};

    return ret;
}

function checkButton() {
    var intensity = document.querySelector(
        'input[name="intensity"]:checked');
    var time = document.querySelector(
        'input[name="time"]:checked');
    var type = document.querySelector(
        'input[name="type"]:checked');
    var requirements = document.querySelector(
        'input[name="handicaps"]:checked');
    
    if(intensity != null && time != null && type != null && requirements != null) {
        let regiment = getExercisePlan(intensity.value, type.value, time.value, [Number(requirements.value)]);
        document.getElementById("disp").innerHTML = JSON.stringify(regiment);
        document.getElementById("disp").style.color = "green";
    }
    else {
        document.getElementById("disp").innerHTML
            = "*You have not selected one of the fields";
        document.getElementById("disp").style.color = "red";
    }
}