class Job {
    constructor(id, title, description, startDate, endDate) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
      }
 }
 
 class Education {
    constructor(id, title, school, address, startDate, endDate) {
        this.id = id;
        this.title = title;
        this.school = school;
        this.address = address;
        this.startDate = startDate;
        this.endDate = endDate;
      }
 }

 class CV {
    constructor(email) {
      this.jobs = [];
      this.educations = [];
      this.email = email;
    }
  
    addJob(newJob) {
        this.jobs.push(newJob);
    }
  
    removeJob(removeJobID) {
        for (let i = 0; i < this.jobs.length; i++) {
            if(this.jobs[i].id === removeJobID){
                this.jobs.splice(i, 1);
            }
        }  
    }
  
    addEducation(education) {
        this.educations.push(education);
    }
  
    removeEducation(removeEduId) {
        for (let i = 0; i < this.educations.length; i++) {
            if(this.educations[i].id === removeEduId){
                this.educations.splice(i, 1);
            }
        }  
    }
    
    renderCV(){
        const renderCv = document.getElementById("render");
        for (let i = 0; i < this.jobs.length; i++) {
            const addElement = document.createElement("p");
            addElement.innerText = `The title is : ${this.jobs[i].title}, the description : ${this.jobs[i].description}`;
            renderCv.appendChild(addElement);
        }  
    }
  }


  const newJob = new Job(1, "Financial analyst", "dasda..", "01-01-2024", "01-01-2025");
  const newJob2 = new Job(2, "Software developer", "dasda..", "01-01-2024", "01-01-2025");
  const newEdu = new Education(1, "Mathematics", "dasda..","Al-azhar university", "Palestine", "01-01-2024", "01-01-2025");

  const myCV = new CV("adsa@gmail.com");
  myCV.addJob(newJob);
  myCV.addJob(newJob2);
  myCV.addEducation(newEdu);
  console.log(myCV);
  myCV.removeJob(1);
  myCV.removeEducation(1);
  myCV.renderCV();
  console.log(myCV);