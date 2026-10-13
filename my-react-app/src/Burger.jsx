function Burger(){

    const whatever = "its a button";


    return(
        <>
            <p>{whatever.toUpperCase()}</p>

            <button
            onClick={() => prompt("HEY YOU CLICKED THE BUTTON >:(. Why did you click this?")}>
            DONT CLICK THE BUTTON</button>
            <button
            onClick={() => alert("ALERT: you have been ALERTED")}>
            ALERT</button>
        </>
    );

}

export default Burger;