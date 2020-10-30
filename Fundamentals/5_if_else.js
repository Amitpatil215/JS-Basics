var whoIsHere='teacher'

//For string use tripple equal (===)

if(whoIsHere==='user'){
    console.log("Greeting message for user")
    console.log("Allow user to view all courses")
}else if (whoIsHere=='teacher'){
    console.log("Greeting message for teacher")
    console.log("Allow acess to his courses")
}else{
    console.log("Please verify your credenials")
}
