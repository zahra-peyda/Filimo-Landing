import logo from "../assets/images/فیلیمو Glossy Orange Play Logo (1).png";
import "../style.css";

export function navBar () {
     const App = document.querySelector<HTMLDivElement>("#App");
     if(!App) return;
     
     const nav = document.createElement("nav");

     const rightMenu = document.createElement("ul");
     rightMenu.className="right-menu";
     const rightItems = [
          "صفحه نخست",
          "فیلم ایرانی",
          "سریال",
          "جدیدترین‌ها",
          "دسته‌بندی"
     ]

     rightItems.reverse().forEach((item)=>{
          const span = document.createElement("span");
          span.className="span";
          span.dir="rtl";
          span.innerText=item;

          span.addEventListener("mousemove", ()=>{
               span.className="active";
          });

          span.addEventListener("mouseleave", ()=>{
               span.className="span";
          });
          rightMenu.appendChild(span);
     })

     const imgDiv = document.createElement("div");
     imgDiv.className = "img-div";

     const logoImg = document.createElement("img");
     logoImg.className="logo-img";
     logoImg.src=logo;
     logoImg.alt="Filimo Logo"
     imgDiv.appendChild(logoImg);
     
     const leftMenu = document.createElement("div");
     leftMenu.className="left-menu";

     const searchBox = document.createElement("div");
     searchBox.className="search-box";

     const searchIcon = document.createElement("i");
     searchIcon.className="search-icon";
     searchIcon.className="fa-solid fa-magnifying-glass";

     const searchInput = document.createElement("input")
     searchInput.type="search";
     searchInput.placeholder="جستجو در فیلیمو ...";
     searchInput.dir="rtl";
     searchInput.className="input-search";

     searchBox.appendChild(searchInput);
     searchBox.appendChild(searchIcon);

     const subscriptionDiv = document.createElement("div");
     subscriptionDiv.className="subscription-div";

     const subscriptionIcon = document.createElement("i");
     subscriptionIcon.className = "subscription-icon";
     subscriptionIcon.className = "fa-solid fa-crown";
     subscriptionIcon.style.color="rgb(195, 165, 46)"
     subscriptionDiv.appendChild(subscriptionIcon);

     const subscription = document.createElement("span");
     subscription.innerText="خرید اشتراک";
     subscription.className="subscription";
     subscription.style.color="aliceblue";
     

     subscriptionDiv.appendChild(subscription);
     subscriptionDiv.appendChild(subscriptionIcon);

     const loginDiv = document.createElement("div");
     loginDiv.className="login-div";
     loginDiv.style.background="rgb(195, 165, 46)";
     loginDiv.style.boxShadow="0 0 10px rgb(195, 165, 46)";

     const loginIcon = document.createElement("i");
     loginIcon.className = "login-icon";
     loginIcon.className = "fa-solid fa-user";

     const login = document.createElement("span");
     login.innerText="ورود/ثبت نام";
     login.className="login";

     loginDiv.appendChild(login);
     loginDiv.appendChild(loginIcon);

     leftMenu.appendChild(loginDiv);
     leftMenu.appendChild(searchBox);
     leftMenu.appendChild(subscriptionDiv);

     nav.appendChild(leftMenu);
     nav.appendChild(imgDiv);
     nav.appendChild(rightMenu);
     


     App.appendChild(nav);

}