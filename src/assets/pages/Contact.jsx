import React from 'react';

function Contact(props) {
    return (
        <div>
            <form style="width: 26rem;">

  <div data-mdb-input-init class="form-outline mb-4">
    <input type="text" id="form4Example1" class="form-control" />
    <label class="form-label" for="form4Example1">Name</label>
  </div>


  <div data-mdb-input-init class="form-outline mb-4">
    <input type="email" id="form4Example2" class="form-control" />
    <label class="form-label" for="form4Example2">Email address</label>
  </div>

 
  <div data-mdb-input-init class="form-outline mb-4">
    <textarea class="form-control" id="form4Example3" rows="4"></textarea>
    <label class="form-label" for="form4Example3">Message</label>
  </div>

 
  <div class="form-check d-flex justify-content-center mb-4">
    <input
      class="form-check-input me-2"
      type="checkbox"
      value=""
      id="form4Example4"
      checked
    />
    <label class="form-check-label" for="form4Example4">
      Send me a copy of this message
    </label>
  </div>

 
  <button data-mdb-ripple-init type="button" class="btn btn-primary btn-block mb-4">Send</button>
</form>
        </div>
    );
}

export default Contact;