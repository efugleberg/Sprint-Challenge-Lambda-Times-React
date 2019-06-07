What are PropTypes used for?  Please describe why it's important to check our data in JavaScript.

--PropTypes are a way for React Developers to catch bugs before they become a problem.  PropTypes is essentially a dictionary where you define what props your component needs and why type(s) they should be. If data is being passed around to other components via other components, PropTypes are used as a way to ensure the type of data being passed around is correct.



Describe a life-cyle event in React?

--A life-cycle event is where a component gets mounted to the DOM and then unmounted || OR || when a component gets mounted to the DOM, receives new data, is updated based on that data via setState, and is rerendered to the DOM
--life-cycles have 3 phases (Birth/Mounting, Growth/Updating, Death,Un-Mounting).  These were all described above.



Explain the details of a Higher Order Component?

--A higher-order component is a function that takes a component and returns a new component.  Whereas a component transforms props into UI, a higher-order component transforms a component into another component, which is then transformed into UI.  Most basic HOC's are a login page where the user enters login, the component checks database to see if the user exists, if they do, they are then directed to site content.



What are three different ways to style components in React? Explain some of the benefits of each.

--LESS or SASS - similar to CSS, no need to import a library, easy to nest styling

--Styled-Components - makes it easy to style components right on the javascript file.  easy to read and style components right in the same file

--Bootstrap - ready-to-use components that offer functionality, can also be manipulated.  very large open source userbase which allows to you to find styling you may need without creating it yourself.

