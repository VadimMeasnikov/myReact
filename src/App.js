import './style/App.css';

function App() {
  return (
    <div className="App">
      <div class="haeder">
        <div class="haeder-container">
          <div class="navigation">
              <a href ="#" class = "nav-link">About</a>
              <a href ="#" class = "nav-link">Service</a>
              <a href ="#" class = "nav-link">Our news</a>
              <a href ="#" class = "nav-link">Blog</a>
          </div>
          <div class = "contacts">
             <p>Tel: +800028375478899</p>
             <p>Email: myReact@react.com</p>
          </div>

          <div class = "callBox">
             <button>Call Us</button>
          </div>
        </div>
      </div>

      <div class ="main">
        <div class = "main-container">
        <h1>Contact Us</h1>
          <form>
             <div class = "topBox">
                <div class = "topInputBox">
                  <p class = "heading">Name</p>
                  <input placeholder='Enter your name' type='text'></input>
                </div>
                <div class = "topInputBox">
                  <p class = "heading">Email</p>
                  <input placeholder='Enter your Email' type='email'></input>
                </div>
                <div class = "topInputBox">
                  <p class = "heading">Subject</p>
                  <input placeholder='Provide Subject' type='text'></input>
                </div>
                <div class = "topInputBox">
                  <p class = "heading">Subject</p>
                  <input placeholder='Select Subject' type='text'></input>
                </div>
             </div>
             <div class = "lowInput">
             <p class = "heading">Message</p>
              <input placeholder='Write ypur question here' type="text"></input>
             </div>

             <input type='submit' value = "Send Message"></input>
          </form>
          
        </div>
         
      </div>
    </div>
  );
}

export default App;
