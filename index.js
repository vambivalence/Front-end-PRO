function Form(insertPlace, classFormName) {
    this.insertPlace = insertPlace;
    this.classFormName = classFormName;
    this.regExpEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
    this.regExpPassword = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[a-z]+).*$/;
}

Form.prototype.render = function() {
    const formContainer = document.querySelector(this.insertPlace);
    this.form = document.createElement('form');

    const submitButton = document.createElement('button');
    submitButton.type = "submit";
    submitButton.innerHTML = "Log in";

    this.emailInput = document.createElement('input');
    this.emailInput.type = "text";
    this.emailInput.placeholder = "Enter email";

    this.passInput = document.createElement('input');
    this.passInput.type = "password";
    this.passInput.placeholder = "Enter password";

    this.form.append(this.emailInput);
    this.form.append(this.passInput);
    this.form.append(submitButton);


    this.form.className = this.classFormName;
    formContainer.append(this.form);

    this.submitEvent();
}

Form.prototype.validate = function() {
    return this.regExpEmail.test(this.emailInput.value) && this.regExpPassword.test(this.passInput.value);
}

Form.prototype.submitEvent = function() {
    this.form.addEventListener(
        'submit', (event) => {
            event.preventDefault();

            let userData = {};

            if (this.validate()) {
                userData.email = this.emailInput.value;
                userData.password = this.passInput.value;

                console.log(JSON.stringify(userData, null, '\t'));

                this.emailInput.value = null;
                this.passInput.value = null;
            } else {
                this.emailInput.classList.add("invalid");
                this.passInput.classList.add("invalid");
            }
        }  
    );
}

const form = new Form(".container", "submit-form");

form.render();