let name = "Luke Przekwas";

//logs top decorative line plus my name using js to capitalize it
console.log("``````````````````````````````");
console.log("Name: " + name.toUpperCase());
console.log("Career: Covalence Student / Barista");
console.log("Description: How would I describe myself? Three words. Hard-working, Alpha male. Jackhammer. Merciless. Insatiable.");
console.log("\n");

//starts logs for my interests
console.log("My Interests:");
console.log("* Super Smash Bros Tournaments");
console.log("* Learning how to code!");
console.log("* Coffee");
console.log("* Soccer");
console.log("* Metal Guitar");
console.log("\n");

//function to log experiences
function displayPosition(companyName, jobTitle, yearsWorked, description) {
    console.log("* " + jobTitle + " at " + companyName + " for " + yearsWorked + " years - " + description);
}

//starts logs for my experience
console.log("My Previous Experience:");
displayPosition("Urban Standard", "FOH Manager", 8, "Ran operations, did bookkeeping, inventory management, interviewing, and customer service relations.");
displayPosition("Samford University", "Phsysics Tutor", 2, "Tutored Pre-Med students in physcis after school hours")
displayPosition("UAB Center for Surgical Research", "Lab Assistant", 1, "Studied effects of beta-estrogen on repurfusion injuries, assisted lab doctors, took notes");
console.log("\n");

//function to display skills, with a BAM if they real cool
function displaySkill(skill, isCool) {
    if (isCool === true) {
        console.log("* BAM: " + skill);
    } else {
        console.log("* " + skill);
    }
}

//starts logs for skills which some would say are mad cool
console.log("My Skills:");
displaySkill("Polish", true);
displaySkill("Guitar", false);
displaySkill("HTML5", false);
displaySkill("CSS3", false);
displaySkill("JavaScript", false);
displaySkill("Formerly-ranked Super Smash Bros PM player", true);

console.log("``````````````````````````````");
//end
