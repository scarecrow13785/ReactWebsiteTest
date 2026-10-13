function Burger(){

    const whatever = "its a button";


    return(
        <>
            <p>{whatever.toUpperCase()}</p>

            <button
            onClick={() => alert("HEY YOU CLICKED THE BUTTON >:(")}>
            DONT CLICK THE BUTTON</button>
        </>
    );

}

export default Burger;