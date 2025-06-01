// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import {
  getFirestore,
  collection,
  query,
  where,
  orderBy,
  limit,
  getDocs,
  doc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC9YCJlFvmjvheehAhX7Rwe3BckM9E1558",
  authDomain: "dungkae1.firebaseapp.com",
  projectId: "dungkae1",
  storageBucket: "dungkae1.firebasestorage.app",
  messagingSenderId: "390014988200",
  appId: "1:390014988200:web:c31c49ebe162c98c61b79d",
  measurementId: "G-7KTZPS260J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// Initialize Cloud Firestore and get a reference to the service

async function displayProducts() {
  const gunQuery = query(collection(db, "Skin"), where("category", "==", "Gun"));
  const gunQuerySnapshot = await getDocs(gunQuery);

  const wrapper1 = document.querySelector(".game-list-1");

  gunQuerySnapshot.forEach((doc) => {
    const product = doc.data();

    // Create a swiper-slide element
    const slide = document.createElement("div");
    slide.classList.add("game");

    // Add product content to the slide
    slide.innerHTML = `
        <img src="${product.thumbnail}" alt="${product.Name}"/>
        <h4>${product.Name}</h4>
        <p>${product.Infor}</p>
        <p class="price">${product.Price} USD</p>
        <a href="/html/game-detail/${product.id}.html" class="buy-button">Mua Ngay</a>
        `;

    // Append the slide to the swiper-wrapper
    wrapper1.appendChild(slide);
  });

  // Skin logic
  const skinQuery = query(collection(db, "Skin"), where("category", "==", "Skin"));
  const skinQuerySnapshot = await getDocs(skinQuery);

  const wrapper2 = document.querySelector(".game-list-2");

  skinQuerySnapshot.forEach((doc) => {
    const product = doc.data();

    // Create a swiper-slide element
    const slide = document.createElement("div");
    slide.classList.add("game");

    // Add product content to the slide
    slide.innerHTML = `
        <img src="${product.thumbnail}" alt="${product.Name}"/>
        <h4>${product.Name}</h4>
        <p>${product.Infor}</p>
        <p class="price">${product.Price} USD</p>
        <a href="/html/game-detail/${product.id}.html" class="buy-button">Mua Ngay</a>
        `;

    // Append the slide to the swiper-wrapper
    wrapper2.appendChild(slide);

  });

  // Reinitialize Swiper after adding slides

}

// Call the function to display products
displayProducts();