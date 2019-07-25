class Person {
  constructor(attrs) {
    this.name = attrs.name;
    this.age = attrs.age;
    this.location = attrs.location;
  }

  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}

class Instructor extends Person {
  constructor(attrs) {
    super(attrs);
    this.specialty = attrs.specialty;
    this.favLanguage = attrs.favLanguage;
    this.catchPhrase = attrs.catchPhrase;
  }

  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }
  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }
}

class Student extends Person {
  constructor(attrs) {
    super(attrs);
    this.previousBackground = attrs.previousBackground;
    this.className = attrs.className;
    this.favSubjects = attrs.favSubjects;
    this.grade = attrs.grade;
    // favSubjects is an array
  }

  listsSubjects() {
    this.favSubjects.forEach(subject => console.log(subject));
  }

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }

  graduate() {
    if (this.grade > 70) console.log(`${this.name} successfully graduated!`);
    else console.log("Needs a higher grade to graduate");
  }
}

class ProjectManager extends Instructor {
  constructor(args) {
    super(args);
    this.gradClassName = args.gradClassName;
    this.favInstructor = args.favInstructor;
  }

  standUp(channel) {
    console.log(`${this.name} announes to ${channel}, @channel standy times!`);
  }
  debugsCode(student, subject) {
    console.log(`${this.name} gebugs ${student.name}'s code on ${subject}`);
  }
}

// ********************** TESTS ***********************//
// I was too lazy to make references accurate, do keep in mind!
const Jon = new Instructor({
  name: "Jon",
  age: 31,
  location: "Beyond the Wall",
  specialty: "Looking confident",
  favLanguage: "English",
  catchPhrase: "Winter is Coming"
});
const Igrid = new Instructor({
  name: "Igrid",
  age: 23,
  location: "Underworld",
  favLanguage: "English",
  specialty: "Shooting arrows and dying",
  catchPhrase: "You know nothing, Jon Snow"
});

const Kate = new Student({
  name: "Kate",
  age: ":P",
  location: "Sunnyvale",
  previousBackground: "C++, Java and JavaScript",
  className: "WEB22",
  grade: 100,
  favSubjects: ["Drawing", "Coding", "Anything that does not involve running"]
});

const Gregoriooo = new Student({
  name: "Gregoriooo",
  age: "57",
  location: "End of this World",
  previousBackground: "Being rasict against Khajiits",
  className: "WEB588",
  grade: 78,
  favSubjects: ["Coming from the future", "to leave you", "a message!"]
});

const Sansa = new ProjectManager({
  name: "Sansa",
  age: 42,
  location: "Seven Kingdoms",
  specialty: "Mystery detective",
  favLanguage: "English",
  catchPhrase: "Lol",
  gradClassName: "WEB18",
  favInstructor: "Not Jon"
});

const DoctorWho = new ProjectManager({
  name: "The Doctor",
  age: 1703,
  location: "Anywhere in Time and Space",
  specialty: "Being charismatic and getting out of trouble",
  favLanguage: "English",
  catchPhrase: "Wibbly Wobly, Timey Wimey...stuff",
  gradClassName: "WEB1",
  favInstructor: "Me, myself and I"
});

Jon.speak();
Jon.demo("fighting");
Jon.grade(Kate, "sarcasm");
Igrid.speak();
Igrid.demo("archery");
Igrid.grade(Kate, "facial expressions");

Kate.listsSubjects();
Kate.PRAssignment("React");
Kate.sprintChallenge("JS V");
Kate.graduate();
Gregoriooo.listsSubjects();
Gregoriooo.PRAssignment("Vue");
Gregoriooo.sprintChallenge("Overloard");
Gregoriooo.graduate();

Sansa.demo("sarcasm");
Sansa.grade(Gregoriooo, "ethics");
Sansa.standUp("WEB18");
Sansa.debugsCode(Kate, "React");
DoctorWho.demo("running");
DoctorWho.grade(Kate, "taking a leadership role");
DoctorWho.standUp("WEB190");
DoctorWho.debugsCode(Gregoriooo, "Vue");
