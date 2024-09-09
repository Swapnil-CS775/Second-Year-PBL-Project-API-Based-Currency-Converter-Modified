const fName=document.querySelector("#fullName");
const email=document.querySelector("#email");
const message=document.querySelector("#message");
const form = document.querySelector(".contact-form");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("clicked");

    //proper email body
    let ebody=`
    <b>Name:</b>${fName.value}
    <br>
    <b>Email:</b>${email.value}
    <br>
    <b>Message:</b>${message.value}
`

    // email code
    Email.send({
        SecureToken : "4cef1a79-b4c8-4c97-9e86-2cf723e70bdf",
        To : 'w851843@gmail.com',
        From : "w851843@gmail.com",
        Subject : "Test email from "+email.value,
        Body : ebody
    }).then(
      message => alert(message)
    );
})