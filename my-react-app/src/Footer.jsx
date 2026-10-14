import { useEffect, useState } from "react";

function Footer(){
    let [hour, setH] = useState(0);
    let [minute, setM] = useState(0);
    let [second, setS] = useState(0);
    let [wtf, setWTF] = useState(0);
    let [meridiem, setMeridiem] = useState("AM");
    let normalSeconds = 10;

    useEffect(() => {
        const interval = setInterval(
            () => {
                if(new Date().getHours() > 12){
                    setH(new Date().getHours() - 12);
                    setMeridiem("PM");
                }
                else{
                    setH(new Date().getHours());
                    setMeridiem("AM");
                }
                setM(new Date().getMinutes());
                setS(new Date().getSeconds());
            });
        return () => clearInterval(interval);
    });
    useEffect(() => {
        //Creats a random number (param1) every ? ms (param2)
        const interval = setInterval(
            () => {
                setWTF(Math.floor(Math.random() * (1000000000000 + 1)))
            }
        );
        //Clears the interval so that it can be updated and is put as the parameter of useEffect
        return () => clearInterval(interval);
    });
    return(
        <footer>
            <p> {new Date().getMonth() + 1}/{new Date().getDate()}/{new Date().getFullYear()}</p>
            <p>{hour}:{minute}:{second} {meridiem}</p>
            <p>{wtf}</p>
        </footer>
    );
}

export default Footer;