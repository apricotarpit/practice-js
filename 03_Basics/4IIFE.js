// Immediately Invoked FUnction Expression (IIFE)

// this is used for immediately invoking (call ) function so that it immedately connectedd DBMS and solving global scope ke pollution ko

(function chai(){
    console.log(`DB connected`);
}) () ;// this perenthis is used for immediately invoking this function


// write the whole func into in a small parenthesis () for IIFE 

// jb 2 IIFE func ho toh ; lgana jaruri h 
( (name) => {
    console.log(`DB connected two ${name}`);
    
})("jhsjd")