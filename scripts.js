// مصفوفة السلة
let cart = [];

// إضافة منتج للسلة
document.querySelectorAll(".add-to-cart").forEach(btn => {
  btn.addEventListener("click", () => {
    let product = btn.parentElement;
    let name = product.dataset.name;
    let price = parseInt(product.dataset.price);
    cart.push({ name, price });
    alert(name + " تمت إضافته للسلة!");
    updateCart();
  });
});

// تحديث عرض السلة
function updateCart() {
  let list = document.getElementById("cart-items");
  let total = document.getElementById("total");
  if (!list || !total) return; // إذا مو بداخل صفحة السلة يخرج
  list.innerHTML = "";
  let sum = 0;
  cart.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item.name + " - " + item.price + " ريال";
    list.appendChild(li);
    sum += item.price;
  });
  total.textContent = "الإجمالي: " + sum + "ريال";
}
// زر تفريغ السلة
let clearBtn = document.getElementById("clear-cart");
if (clearBtn) {
  clearBtn.addEventListener("click", () => {
    cart = []; // إفراغ المصفوفة
    updateCart(); // تحديث العرض
    alert("تم إفراغ السلة!");
  });
}
// =======================
// التحقق من تسجيل الدخول
// =======================
let loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function(e) {
    e.preventDefault();
    let email = loginForm.querySelector("input[type='email']").value.trim();
    let password = loginForm.querySelector("input[type='password']").value.trim();

    if (email === "" || password === "") {
      alert("الرجاء إدخال البريد الإلكتروني وكلمة المرور");
      return;
    }
    if (!email.includes("@")) {
      alert("الرجاء إدخال بريد إلكتروني صالح");
      return;
    }
    if (password.length < 6) {
      alert("كلمة المرور يجب أن تكون 6 أحرف على الأقل");
      return;
    }
    alert("تم تسجيل الدخول بنجاح ✅");
  });
}

// =======================
// التحقق من إنشاء حساب
// =======================
let registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", function(e) {
    e.preventDefault();
    let inputs = registerForm.querySelectorAll("input");
    let name = inputs[0].value.trim();
    let email = inputs[1].value.trim();
    let pw1 = inputs[2].value.trim();
    let pw2 = inputs[3].value.trim();

    if (name === "" || email === "" || pw1 === "" || pw2 === "") {
      alert("الرجاء تعبئة جميع الحقول");
      return;
    }
    if (!email.includes("@")) {
      alert("الرجاء إدخال بريد إلكتروني صالح");
      return;
    }
    if (pw1.length < 6) {
      alert("كلمة المرور يجب أن تكون 6 أحرف على الأقل");
      return;
    }
    if (pw1 !== pw2) {
      alert("كلمتا المرور غير متطابقتين");
      return;
    }
    alert("تم إنشاء الحساب بنجاح 🎉");
  });
}