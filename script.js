document.addEventListener("DOMContentLoaded", function() {
    var SSOBtn = document.getElementById("ssoBtn");
    var isSSO = true;
    var cBtn = document.getElementById("conBtn");

    SSOBtn.addEventListener("click", function(){
        isSSO = !isSSO;
        if (isSSO) {
            SSOBtn.innerHTML = '<img src="key.jpg" width="16px" /> Single sign-on (SSO)';
            cBtn.innerHTML = "Continue"
        } else {
            SSOBtn.innerHTML = '<img src="email.jpeg" width="16px" /> Continue with email';
            cBtn.innerHTML = "Continue with SSO"
        }
    });
});
