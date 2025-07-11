// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-app.js";
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
} from "https://www.gstatic.com/firebasejs/11.7.3/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
var skinName = location.search.split("game=")[1];
async function getProductDetail() {
  try {
    const productCollection = query(
      collection(db, "Skin"),
      where("url", "==", skinName)
    );
    const querySnapshot = await getDocs(productCollection);
    const containerDiv = document.querySelector(".container");
    console.log("🚀 ~ getProductDetail ~ containerDiv:", containerDiv)

    if (querySnapshot.empty) {
      // No product found
      document.querySelector(".container h1").textContent = "Không tìm thấy sản phẩm";
      document.querySelector(".product-details").innerHTML = "<p>Sản phẩm bạn tìm kiếm không tồn tại hoặc đã bị xóa.</p>";
      document.querySelector(".price").textContent = "N/A";
      document.querySelector(".buy-now").style.display = "none";
      return;
    }

    querySnapshot.forEach((doc) => {
      const product = doc.data();
      console.log("🚀 ~ querySnapshot.forEach ~ product:", product);

      // Update the page title and header
      document.title = `${product.Name} - Game Items Store`;

      // Update product name
      const productTitle = document.querySelector(".container h1");
      if (productTitle) {
        productTitle.textContent = product.Name;
      }

      // Update product image
      const productImage = document.querySelector(".product-image");
      if (productImage && product.thumbnail) {
        productImage.src = product.thumbnail;
        productImage.alt = product.Name;
      }

      // Update product description
      const productDetails = document.querySelector(".product-details");
      if (productDetails && product.Information) {
        // Format the long text with proper paragraphs
        const formattedText = product.Information.split('\n\n').map(paragraph =>
          `<p>${paragraph.trim()}</p>`
        ).join('');

        productDetails.innerHTML = `
          <p><strong class="highlight">${product.Name}</strong></p>
          ${formattedText}
        `;
      }

      // Update price
      const priceElement = document.querySelector(".price");
      if (priceElement && product.Price) {
        // Format price based on currency
        const formattedPrice = product.Price >= 1000 ?
          `$${product.Price}.00 USD` :
          `${product.Price.toLocaleString('vi-VN')} VNĐ`;
        priceElement.textContent = formattedPrice;
      }

      // Update stats section for game-specific information
      const statsDiv = document.querySelector(".stats");
      if (statsDiv) {
        statsDiv.innerHTML = `
          <div>
            <span>Danh mục</span>
            ${product.category || 'Skin'}
          </div>
          <div>
            <span>Trò chơi</span>
            Liên Quân Mobile
          </div>
          <div>
            <span>Độ hiếm</span>
            Legendary
          </div>
        `;
      }

      // Update buy button link
      const buyButton = document.querySelector(".buy-now");
      if (buyButton && product.Name && product.thumbnail && product.Price) {
        const formattedPrice = product.Price >= 1000 ?
          `$${product.Price}.00` :
          `${product.Price.toLocaleString('vi-VN')} VNĐ`;

        buyButton.href = `checkout.html?title=${encodeURIComponent(product.Name)}&image=${encodeURIComponent(product.thumbnail)}&price=${encodeURIComponent(formattedPrice)}`;
      }
    });
  } catch (error) {
    console.error("Error fetching product details:", error);
    document.querySelector(".container h1").textContent = "Lỗi tải dữ liệu";
    document.querySelector(".product-details").innerHTML = "<p>Có lỗi xảy ra khi tải thông tin sản phẩm. Vui lòng thử lại sau.</p>";
    document.querySelector(".price").textContent = "N/A";
    document.querySelector(".buy-now").style.display = "none";
  }
}

if (skinName) {
  getProductDetail();
}
