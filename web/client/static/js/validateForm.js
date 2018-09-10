$(document).ready(function () {
    jQuery.validator.addMethod("lettersonly", function(value, element) {
        return this.optional(element) || /[a-zA-Z][a-zA-Z ]+/i.test(value);
      }, "Letters only please");

    $('#input-group').validate({ // initialize the plugin
        rules: {
            inputEdit: {
                required: true,
                number: true,
            }
        },
        messages: {
            inputEdit: "Please enter number only, 10 digits and above."
          },
          // Make sure the form is submitted to the destination defined
          // in the "action" attribute of the form when valid
          submitHandler: function(form) {
            alert("Submitted!");
            form.submit();
          }
    });

    

});