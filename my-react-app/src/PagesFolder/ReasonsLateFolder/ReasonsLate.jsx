import Card from './Card.jsx'
import Table from './Table.jsx'

function ReasonsLate(){
    
    return(
        <>
            <Card 
                imgLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqML2-wrIKA4W3eo_PSjZ2KIwGOrYjQZwLLTK_MmKN8A&s=10" 
                reason="He was engaged in a high speed chase with an ice cream truck" 
                comment="It was very intense"/>
            <Card 
                imgLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQby1FcHV2j-7jWUhJixUiMbK8WjWOnjJMFWnI1QMStuw&s=10" 
                reason="He lost his pink rubber duck" 
                comment="He searched far and wide for that and reportedly found it "/>
            <Card 
                imgLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5l6UAQrDm-sPVKg7gwcc5EXzIu7wrvhCloN-qHJCwuw&s=10" 
                reason="His car rolled away" 
                comment="'Sir I'm telling you my car rolled away from me, and I could not make to school'"/>
            <Card 
                imgLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqPLu4o-WeSuIiXPGHnYru9d_QG1vyVx5q8a-LZeKemA&s=10" 
                reason="He had to emotionally recover from listening to the class playlist" 
                comment="He will be forever scarred "/>
            <Card 
                imgLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsWvFFuX5pSHCtTZ0r0T6uwGmWfRnO3NktcZeuNGBXqA&s=10" 
                reason="His house was locked and taken for ransom by an AI" 
                comment="This is not what I thought when I was told AI was going to make me lose my job"/>
            <Table/>
        </>
    );
}

export default ReasonsLate;