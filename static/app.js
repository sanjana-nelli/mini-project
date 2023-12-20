 
var data= {
    chatinit:{
        title: ["Hello <span class='emoji'> &#128075;</span>","I am Mr. Chatbot","How can I help you?"],
        options: ["Semester_Structure","Syllabus","Notes","Papers"]
    },
    'semester_structure': {
        title:["Please select semester"],
        options:['2-1','2-2','3-1','3-2','4-1','4-2'],
        url : {
            
        }
    },
    'syllabus': {
        title:["Please select year"],
        options:['2ndyear','3rdyear','4thyear'],
        url : {
            
        }
    },
    
    notes: {
        title:["Here you can find notes,<a href='https://vishnulearning.com/login/index.php'  target='_blank' >https://vishnulearning.com/login/index.php</a>"],
        
    },
    papers: {
        title:["Here you can find previous year question papers <a href='https://www.manaresults.co.in/jntuh/jntuh-b-tech-old-previous-question-papers.php'  target='_blank' >https://www.manaresults.co.in/jntuh/jntuh-b-tech-old-previous-question-papers.php</a>"],
        
    },
    
        
    
    '2-1': {
        title: ["Here is 2-1 syllabus, In the 2nd year, 1st semester, our curriculum offers the subjects   Discrete Mathematics, Data Structures,Mathematical and Statistical Foundations,Computer Organization and Architecture,Python Programming,Business Economics & Financial Analysis,Data Structures Lab ,Python Programming Lab, Gender Sensitization Lab .<a href='https://jntuh.ac.in/uploads/academics/R18B.Tech.CSE(AIML)IIYearSyllabus.pdf' target='_blank' >https://jntuh.ac.in/uploads/academics/R18B.Tech.CSE(AIML)IIYearSyllabus.pdfp</a>"],
        
    },
    '2-2': {
        title: ["Here is 2-2 syllabus, the subjects included are  Formal Language and Automata Theory,Software Engineering,Operating Systems,Database Management Systems,Object Oriented Programming using Java,Operating Systems Lab,Database Management Systems Lab,Java Programming Lab,Constitution of India. <a href='https://jntuh.ac.in/uploads/academics/R18B.Tech.CSE(AIML)IIYearSyllabus.pdf' target='_blank' >https://jntuh.ac.in/uploads/academics/R18B.Tech.CSE(AIML)IIYearSyllabus.pdfp</a>"],
        
    },
    '3-1': {
        title: ["Here is 3-1 syllabus,The subjects included are Design and Analysis of Algorithms, Machine Learning, Computer Networks, Compiler Design, Professional Elective - I, Professional Elective - II, Machine Learning Lab, Computer Networks Lab, Advanced Communication Skills Lab, Intellectual Property Rights. <a href='https://jntuh.ac.in/uploads/academics/R18B.Tech.CSE(AIML)IIIIVYearTentativeSyllabus.pdf' target='_blank' >https://jntuh.ac.in/uploads/academics/R18B.Tech.CSE(AIML)IIIIVYearTentativeSyllabus.pdf</a>"],
        
    },
    '3-2': {
        title: ["Here is 3-2 syllabus,The subjects included are Artificial Intelligence, DevOps, Natural Language Processing, Professional Elective – III, Open Elective - I, Artificial Intelligence and Natural Language Processing Lab, DevOps Lab, Professional Elective - III Lab, Environmental Science.<a href='https://jntuh.ac.in/uploads/academics/R18B.Tech.CSE(AIML)IIIIVYearTentativeSyllabus.pdf' target='_blank' >https://jntuh.ac.in/uploads/academics/R18B.Tech.CSE(AIML)IIIIVYearTentativeSyllabus.pdf</a>"],
       
    },
    '4-1': {
        title: ["Here is 4-1 syllabus,The subjects included are Neural Networks & Deep Learning, Reinforcement Learning, Professional Elective - IV, Professional Elective - V, Open Elective - II, Deep Learning Lab, Industrial Oriented Mini Project/Summer Internship, Seminar, Project Stage - I.<a href='https://jntuh.ac.in/uploads/academics/R18B.Tech.CSE(AIML)IIIIVYearTentativeSyllabus.pdf' target='_blank' >https://jntuh.ac.in/uploads/academics/R18B.Tech.CSE(AIML)IIIIVYearTentativeSyllabus.pdf</a>"],
        
    },
    '4-2': {
        title: ["Here is 4-2 syllabus,The subjects included are Organizational Behaviour, Professional Elective - VI, Open Elective - III, Project Stage - II. <a href='https://jntuh.ac.in/uploads/academics/R18B.Tech.CSE(AIML)IIIIVYearTentativeSyllabus.pdf' target='_blank' >https://jntuh.ac.in/uploads/academics/R18B.Tech.CSE(AIML)IIIIVYearTentativeSyllabus.pdf</a>"],
        
    },
    '2ndyear': {
        title: ["Here you can find 2nd year syllabus, <a href='https://jntuh.ac.in/uploads/academics/R18B.Tech.CSE(AIML)IIYearSyllabus.pdf' target='_blank' >https://jntuh.ac.in/uploads/academics/R18B.Tech.CSE(AIML)IIYearSyllabus.pdfp</a>"],
        
    },
    '3rdyear': {
        title: ["Here you can find 3rd year syllabus, <a href='https://jntuh.ac.in/uploads/academics/R18B.Tech.CSE(AIML)IIIIVYearTentativeSyllabus.pdf' target='_blank' >https://jntuh.ac.in/uploads/academics/R18B.Tech.CSE(AIML)IIIIVYearTentativeSyllabus.pdf</a>"],
        
    },
    '4thyear':{
        title: ["Here you can find 4th year syllabus, <a href='https://jntuh.ac.in/uploads/academics/R18B.Tech.CSE(AIML)IIIIVYearTentativeSyllabus.pdf' target='_blank' >https://jntuh.ac.in/uploads/academics/R18B.Tech.CSE(AIML)IIIIVYearTentativeSyllabus.pdf</a>"],
    }

}
var cbot= document.getElementById("chat-box");
var len1= data.chatinit.title.length;

document.getElementById('test').style.display='block';
initChat();


function initChat(){
    j=0;
    cbot.innerHTML='';
    for(var i=0;i<len1;i++){
        setTimeout(handleChat,(i*500));
    }
    setTimeout(function(){
        showOptions(data.chatinit.options)
    },((len1+1)*500))
}

var j=0;
function handleChat(){
    console.log(j);
    var elm= document.createElement("p");
    elm.innerHTML= data.chatinit.title[j];
    elm.setAttribute("class","msg");
    cbot.appendChild(elm);
    j++;
    handleScroll();
}

function showOptions(options){
    for(var i=0;i<options.length;i++){
        var opt= document.createElement("span");
        var inp= '<div>'+options[i]+'</div>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        opt.addEventListener("click", handleOpt);
        cbot.appendChild(opt);
        handleScroll();
    }
}

function handleOpt(){
    console.log(this);
    var str= this.innerText;
    var textArr= str.split(" ");
    var findText= textArr[0];
    
    document.querySelectorAll(".opt").forEach(el=>{
        el.remove();
    })
    var elm= document.createElement("p");
    elm.setAttribute("class","test");
    var sp= '<span class="rep">'+this.innerText+'</span>';
    elm.innerHTML= sp;
    cbot.appendChild(elm);

    console.log(findText.toLowerCase());
    var tempObj= data[findText.toLowerCase()];
    handleResults(tempObj.title,tempObj.options,tempObj.url);
}

function handleDelay(title){
    var elm= document.createElement("p");
        elm.innerHTML= title;
        elm.setAttribute("class","msg");
        cbot.appendChild(elm);
}


function handleResults(title,options,url){
    for(let i=0;i<title.length;i++){
        setTimeout(function(){
            handleDelay(title[i]);
        },i*500)
        
    }

    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }

    if(isObjectEmpty(url)==true){
        console.log("having more options");
        setTimeout(function(){
            showOptions(options);
        },title.length*500)
        
    }
    else{
        console.log("end result");
        setTimeout(function(){
            handleOptions(options,url);
        },title.length*500)
        
    }
}

function handleOptions(options,url){
    for(var i=0;i<options.length;i++){
        var opt= document.createElement("span");
        var inp= '<a class="m-link" href="'+url.link[i]+'">'+options[i]+'</a>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        cbot.appendChild(opt);
    }
    
    var opt= document.createElement("span");
    var inp= '<a class="m-link" href="'+url.more+'">'+'See more</a>';

    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }

    console.log(isObjectEmpty(url));
    console.log(url);
    opt.innerHTML=inp;
    opt.setAttribute("class","opt link");
    cbot.appendChild(opt);
    handleScroll();
}

function handleScroll(){
    var elem= document.getElementById('chat-box');
    elem.scrollTop= elem.scrollHeight;
}
function handleKeyDown(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}








 




 
