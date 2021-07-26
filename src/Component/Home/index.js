import React from 'react';

const Home = () => {
    return ( <div>
       <h1>Add jUMBTRON FROM BOOT sTRAP .</h1> 

       <p>loreum op
       Creating a Link Between Pages in React Router
            We need a way to link users from our List page to our Detail page, but we're not going to do what you're 
            probably thinking. See, an experienced web developer like you will have written <a href="/foobar" >
            Click here!</a> more times 
            than you can remember, and you probably think we should do something similar here.

        Well, we're not, because React Router has a better solution: the component.
        This is a wrapper around our old friend the HTML anchor, but has the added benefit that it automatically knows where your components are and can adjust the style of a link to make it look active when it's the page the user is currently browsing.
            </p>

    </div>  );
}
 
export default Home;