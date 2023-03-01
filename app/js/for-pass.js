document.addEventListener("DOMContentLoaded", () => {
    const ResetForm = document.querySelector("#Reset");
    const CompletedForm = document.querySelector("#ResetDone");
    


    ResetForm.addEventListener("submit", e => {
        e.preventDefault();

        // add code that sends password reset link
        ResetForm.classList.add("form--hidden");
        CompletedForm.classList.remove("form--hidden");
    });

    CompletedForm.addEventListener("submit", e => {
        e.preventDefault();
        window.location = "Home-Page.html";
    });

});
