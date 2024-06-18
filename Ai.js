// ApiKey = AIzaSyBaJbXo1FWdmNUQxsbNcD-MSk2P7WsE_04 ;

let nam = document.getElementById("nam");
let btn = document.getElementById("btn");
let body = document.getElementById("bodies");
let search=document.getElementById("search");

window.addEventListener("load",()=>{
    let head=localStorage.getItem("Name");
    nam.innerText=head;
})

// import { GoogleGenerativeAI } from "@google/generative-ai";

//       // Make sure to secure your API key in a real-world application
//       const API_KEY = "AIzaSyBaJbXo1FWdmNUQxsbNcD-MSk2P7WsE_04";

//       const genAI = new GoogleGenerativeAI(API_KEY);

//       async function run() {
//         body.style.display = "none";
//         const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
//         let value = document.getElementById("search").value;
//         const prompt = value;

//         // Display the user's input
//         addMessage(prompt, "user-message", "User", "my.jpg");

//         try {
//           const result = await model.generateContent(prompt);
//           const response = result.response;
//           let text = await response.text();
//           let x=marked.parse(text);
//           console.log(x);

      

//           addMessage(
//             x,
//             "ai-message",
//             "Gemini",
//             "geimi-removebg-preview.png"
//           );
//           document.getElementById("search").value = "";
//         } catch (error) {
//           console.error("Error generating content:", error);
//           addMessage(
//             "Error generating content. Please try again.",
//             "ai-message",
//             "Gemini",
//             "geimi-removebg-preview.png"
//           );
//         }
//       }

//       function addMessage(text, className, sender, imgSrc) {
//         const chatBox = document.getElementById("chat-box");
//         const message = document.createElement("div");
//         message.className = "message " + className;

//         const img = document.createElement("img");
//         img.src = imgSrc;
//         img.alt = sender;
//         img.className = "chat-img";

//         const textNode = document.createElement("span");
//         textNode.innerHTML = text;

//         message.appendChild(img);
//         message.appendChild(textNode);
//         chatBox.appendChild(message);
//         chatBox.scrollTop = chatBox.scrollHeight;
//       }

//       btn.addEventListener("click", run);
//       document
//         .getElementById("search")
//         .addEventListener("keypress", function (event) {
//           if (event.key === "Enter") {
//             run();
//           }
//         });
