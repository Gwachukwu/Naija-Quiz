const selectedQuestions = qAndA.sort(()=>{return(Math.random()-Math.random())}).slice(0,5);
let score = 0;
let questionIndex = 0;

const gradeQuestion = (ans)=>{
if(ans === selectedQuestions[questionIndex].answer){
    score += 1
}
questionIndex +=1;
};
const renderSuccess = () =>{
    $(".question-number").text(" ");
    $(".question-question").text(" ");
    $(".question-options").text(" ");
    if( score > 2){
        $("<p><strong>SUCCESSFUL</strong><p>").appendTo(".question-number");
        $('<img src="https://i.pinimg.com/originals/7b/ff/86/7bff8670a655a8d11963a74b6defc0c1.gif">').appendTo(".question-options");
    }else{
        $("<p><strong>NOT SUCCESSFUL</strong><p>").appendTo(".question-number");
        $('<img src="https://media2.giphy.com/media/mBjW9bfJeLLwu6Fhyl/giphy.gif">').appendTo(".question-options");

    }
};

const renderQuestion = (qIndex) =>{
    let question = selectedQuestions[qIndex];
    $('.question-number').text('Question ' +  (qIndex + 1));
    $('.question-question').text(question.question);
    $(".option1").text("");
    $(".option2").text("");
    $(".option3").text("");
    $(".option4").text("");
    question.options.forEach((element,i) =>{
        let opt =  '.option'+(i+1);
        let radioBut = $('<input type="radio" name="answer" value =' + element + ' /> ') ;
        let radioLab = $('<label for = ' + element + '>'+ element +'</label> '); 
        radioBut.appendTo(opt);
        radioLab.appendTo(opt);
    });
    $("input:radio[name='answer']").click(function(){
        //grade question gradeQuestion(this.value)
        gradeQuestion(this.value)
        if(questionIndex == (selectedQuestions.length)){
            //render success
            renderSuccess();
        }else{
        //render the next question renderQuestion[questionIndex]
        renderQuestion(questionIndex)
        }
    });
    
};
$(document).ready(function(){
    renderQuestion(questionIndex);
})