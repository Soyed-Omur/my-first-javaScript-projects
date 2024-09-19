const testimonials = [
    {
        name : "Lisa, New Zealand",
        imageUrl : "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM1fHxwZXJzb258ZW58MHx8MHx8fDA%3D",
        text : "Hiya! Just a quick email to pass on my use for your website. I am making an Advent Calendar and wanted all the ornaments to be in a true random order. My partner showed your website and I now have a fantastically random order in my Calendar."
    },
    {
        name : "Dan C. Smith, TABS Direct, USA",
        imageUrl : "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ym95cyUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
        text : "Hello, We use Random.org to select random invoice numbers for financial auditing. We recently instituted a self-auditing program as a part of our compliance with Sarbanes–Oxley legislation. Auditing standards often require random selections.",
    },
    {
        name : "Gabriel Lichstein, Los Angeles",
        imageUrl : "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGJveXMlMjBwcm9maWxlfGVufDB8fDB8fHww",
        text : "I use your website to assign random problems to the math students I tutor. Thank you very much.",
    },
    {
        name : "Emilia Clark, Student, UK",
        imageUrl : "https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGJveXMlMjBwcm9maWxlfGVufDB8fDB8fHww",
        text : "I found your random number generator really useful in my Maths Statistics coursework preparation for my GCSE so while I was using the web I found your brilliant site to help me along the way and made it easier than using a calculator! Thank you very much!",
    }
];



const imgEl = document.querySelector("img");
const nameEl = document.querySelector(".username");
const textEl = document.querySelector(".text");

let idx = 0;
updateTestimonial();


function updateTestimonial() {
    const {name, imageUrl, text} = testimonials[idx];
    imgEl.src = imageUrl;
    nameEl.innerText = name;
    textEl.innerText = text;
    idx++;
    if(idx === testimonials.length){
        idx = 0;
    }
    setTimeout(()=>{
        updateTestimonial()
    },5000)
}