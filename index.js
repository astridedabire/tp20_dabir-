// //cercle section 1
// const cerclea=document.querySelector(".cerclea")
//     const cercleb=document.querySelector(".cercleb")
//     const cerclec=document.querySelector(".cerclec")
// // cercle section 2
//     const cerclea2=document.querySelector(".cerclea2")
//     const cercleb2=document.querySelector(".cercleb2")
//     const cerclec2=document.querySelector(".cerclec2")
// // cercle section 3
//     const cerclea3=document.querySelector(".cerclea3")
//     const cercleb3=document.querySelector(".cercleb3")
//     const cerclec3=document.querySelector(".cerclec3")

//     const section1=document.querySelector(".section1")
//     const section2=document.querySelector(".section2")
//     const section3=document.querySelector(".section3")
// //bouton
//     const a=document.querySelector(".a")
//     const b=document.querySelector(".b")
//     const c=document.querySelector(".c")
// //bouton forward section1 
//     a.addEventListener("click", () => {
//         section1.style.display="none"
//         section2.style.display="block"
//     section3.style.display="none"
//         })
//         //backward section 2
//         b.addEventListener("click", () => {
//             section1.style.display="block"
//             section2.style.display="none"
//         section3.style.display="none"
//             })
//             //forward section2
//             c.addEventListener("click", () => {
//                 section1.style.display="none"
//                 section2.style.display="none"
//             section3.style.display="block"
//                 })

// cercleb.addEventListener("click", () => {
//     section1.style.display="none"
//     section2.style.display="block"
// section3.style.display="none"
   

//     })
//     cerclec.addEventListener("click", () => {
//         section1.style.display="none"
//         section2.style.display="none"
//     section3.style.display="block"
       
    
//         })
//         //formulaire2
//         cerclea2.addEventListener("click", () => {
//             section1.style.display="block"
//             section2.style.display="none"
//         section3.style.display="none"
           
//          })
//          cerclec2.addEventListener("click", () => {
//             section1.style.display="none"
//             section2.style.display="none"
//         section3.style.display="block"
           
//          })
//          //formulaire3
           
//          cerclea3.addEventListener("click", () => {
//             section1.style.display="block"
//             section2.style.display="none"
//         section3.style.display="none"
           
//          })
//          cercleb3.addEventListener("click", () => {
//             section1.style.display="none"
//             section2.style.display="block"
//         section3.style.display="none"
           
//          })
       
         
// // const form =document.getElementById('form');
// // const FirstName =document.getElementById('FirstName');
// // const LastName =document.getElementById('LastName');
// // const yourEmail =document.getElementById('yourEmail');
// // const PhoneNumber =document.getElementById('PhoneNumber');
// // const Age =document.getElementById('Age');
// // const Sexe=document.getElementById('Sexe');
// // const formselect =document.getElementById('formselect');

// // form.addEventListener('forward', e => {
// //     e.preventDefault();
// //     validateInputs ();
// // })
// // const setError= (element, message) => {
// //     const InputControle = element.parentElement;
// //     const errorDisplay = InputControl.querySelector('.error');
// // }


const FirstName = document.getElementById('FirstName')
const f = document.getElementById('form')
const errorElement = document.getElementById('error')
const LastName =document.getElementById('LastName');
const yourEmail =document.getElementById('yourEmail');


console.log(f);
f.addEventListener('submit', (e) => {
let messages = []
if (FirstName.value === '' || FirstName.value == null) {
messages.push('renseignez votre nom')
}
if (LastName.value === '' || LastName.value == null) {
    messages.push('renseignez votre prenom')
    }
    if (yourEmail.value === '' || yourEmail.value == null) {
        messages.push('renseignez votre Email')
        }
        if (PhoneNumber.value === '' || PhoneNumber.value == null) {
            messages.push('contact obligatoire')
            }
            if (Age.value === '' || Age.value == null) {
                messages.push('mentionnez votre age')
                }
                if (sexe.value === '' || sexe.value == null) {
                    messages.push('précisez votre genre')
                    }
                    if (pays.value === 'Your country' ) {
                        messages.push('choisissez un pays')
                        }

if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(',')
}
})