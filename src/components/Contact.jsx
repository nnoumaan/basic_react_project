import React from "react";

const Contact = () => {
  return (
    <div className="contact">

      <main>
        <form>
          <div>
            <label>Name</label>

            <input type="text" required placeholder="Name" />
          </div>
          <div>
            <label>Email</label>

            <input type="email" required placeholder="Name@Email.com" />
          </div>
          <div>
            <label>Message</label>

            <input type="text"required placeholder="Feedback" />
          </div>

          <button type="submit">Send Now</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
