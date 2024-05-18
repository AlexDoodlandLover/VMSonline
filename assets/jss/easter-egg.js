function Human(name, age, isGirl, brain) {
  this.name = name;
  this.age = age;
  this.isGirl = isGirl;
  this.brain = brain;
  this.poop = function () {
    console.log(this.name + " farted! EEW!");
  };
}
