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
  const productCollection = collection(db, "Skin");
  const querySnapshot = await getDocs(productCollection);

  const wrapper = document.querySelector(".game-list-1");

  querySnapshot.forEach((doc) => {
    const product = doc.data();
    console.log("🚀 ~ querySnapshot.forEach ~ product:", product)

    // Create a swiper-slide element
    const slide = document.createElement("div");
    slide.classList.add("game");

    // Add product content to the slide
    slide.innerHTML = `
                <img src="https://imageio.forbes.com/specials-images/imageserve/613766b74881e4e67926a2c3/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds" alt="Zedd x Spectrum Skin"/>
                <h4>Zedd x Spectrum Skin</h4>
                <p>Là bộ súng đắt và đẹp nhất trong game valorant</p>
                <p class="price">$100.00 USD</p>
                <a href="/html/game-detail/game3.html" class="buy-button">Mua Ngay</a>
        `;

    // Append the slide to the swiper-wrapper
    wrapper.appendChild(slide);
  });

  // Reinitialize Swiper after adding slides

}

// Call the function to display products
displayProducts();