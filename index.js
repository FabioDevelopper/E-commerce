const Content =document.querySelector(".content")
const Hero=document.querySelector(".hero");
const Title=document.querySelector("#title");
const Description=document.querySelector("#description");
let index=0;
const mypiture =[ {
    URL:"Images/image\ \(1\).jpg", title:"Bienvenue", description:"Découvrez nos sercives professionnels."
}, {
    URL:"/Images/image\ \(2\).jpg",title:"Dévéloppement web", description:"créaction des sites webs professionnels , modernes et responsives."
},{
    URL:"Images/image\ \(3\).jpg",title:"Nos partenaires", description:"Université de Lomé, Université de Kara, ESGIS, Ecobank, Orabank....."
},{
    URL:"Images/image\ \(4\).jpg",title:"Nos Actualités", description:"Découvrez nos  Sorties et Dons. "
},{
    URL:"Images/image\ \(5\).jpg",title:"A propos de Nous", description:"Connaissez-vous FabiolDell."
},{
    URL:"Images/image\ \(6\).jpg",title:"Nos Projets & Rêves ", description:"Imaginez un peu ce que deviendra nos entreprises dans quelques années."
},{
    URL:"Images/image\ \(7\).jpg",title:"Nous rejoindre", description:"Veuillez vous contacter via......."
}];
setInterval(()=>{
    index++;
     if(index >=mypiture.length){
        index=0;
    }
    Hero.style.backgroundImage= `url('${mypiture[index].URL}')`;
    Title.textContent=mypiture[index].title;
    Description.textContent=mypiture[index].description;
    Content.style.animation="none";

    setTimeout(()=>{
        Content.style.animation= "deplacement 5s";

    },10);
    
},5000);
// section pour le caseroul
 


