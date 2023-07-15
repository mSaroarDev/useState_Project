import { useRef } from "react";

const UseRef = () => {
    
    const click = useRef(null);
    // const btn = useRef();
    const div = useRef();

    function showText(){
        // click.current.innerText = 'Its Clicked';
        // btn.current.innerText = 'Hide';
        // btn.current.removeEventListener('click', hideText);

        return `
        <p>Button Clicked</p>
           <button onClick={hideText} className="btn btn-primary">Hide</button>
        `
    }

    function hideText(){
        // click.current.remove();
        // btn.current.innerText = 'Click Me';
        // btn.current.removeEventListener('click', showText);

        return `
           <button onClick={showText} className="btn btn-primary">Click Me</button>
        `
    }


    return (
        <div ref={div}>
           <p ref={click}></p>
           <button onClick={showText} className="btn btn-primary">Click Me</button> 
        </div>
    );
};

export default UseRef;