const connectButton = document.getElementById("connectButton"); const connectionRing = document.getElementById("connectionRing"); const connectionLabel = document.getElementById("connectionLabel"); const connectionCaption = document.getElementById("connectionCaption"); const statusText = document.getElementById("statusText");
const serverSelect = document.getElementById("serverSelect"); const serverName = document.getElementById("serverName"); const serverFlag = document.getElementById("serverFlag");
let connected = false;
connectButton.addEventListener("click", () => { connected = !connected;
if (connected) { connectionRing.classList.add("connected"); connectionLabel.textContent = "ДЕМО-РЕЖИМ"; connectionCaption.textContent = "Демонстрация интерфейса"; statusText.textContent = "Demo"; } else { connectionRing.classList.remove("connected"); connectionLabel.textContent = "ОТКЛЮЧЕНО"; connectionCaption.textContent = "Нажми, чтобы начать"; statusText.textContent = "Offline"; } });
serverSelect.addEventListener("change", () => { const selectedOption = serverSelect.options[serverSelect.selectedIndex];
serverName.textContent = selectedOption.value; serverFlag.textContent = selectedOption.dataset.flag; });
let family = [ { name: "Владелец", role: "Администратор", active: true }, { name: "Участник 1", role: "Семья", active: true }, { name: "Участник 2", role: "Семья", active: false }, { name: "Участник 3", role: "Семья", active: false } ];
const familyList = document.getElementById("familyList"); const memberCount = document.getElementById("memberCount");
function renderFamily() { familyList.innerHTML = "";
family.forEach((person, index) => { const member = document.createElement("div"); member.className = "member";
const name = document.createElement("span");
name.textContent = person.name;

const status = document.createElement("span");
status.textContent = person.active ? "Активен" : "Отключён";

member.appendChild(name);
member.appendChild(status);

if (index !== 0) {
  const toggle = document.createElement("button");

  toggle.textContent = person.active
    ? "Отключить"
    : "Включить";

  toggle.addEventListener("click", () => {
    person.active = !person.active;
    renderFamily();
  });

  member.appendChild(toggle);
}

familyList.appendChild(member);
});
memberCount.textContent = family.length; }
renderFamily();
const addMemberButton = document.getElementById("addMemberButton");
const memberInput = document.getElementById("memberInput");
const adminMessage = document.getElementById("adminMessage");
addMemberButton.addEventListener("click", () => { const name = memberInput.value.trim();
if (!name) { adminMessage.textContent = "Введи имя участника."; return; }
if (family.length >= 4) { adminMessage.textContent = "Достигнут лимит: четыре семейных профиля."; return; }
family.push({ name: name, role: "Семья", active: false });
memberInput.value = ""; adminMessage.textContent = "Профиль добавлен!"; renderFamily(); });
memberInput.addEventListener("keydown", (event) => { if (event.key === "Enter") { addMemberButton.click(); } });
// Подсветка активного пункта навигации const navItems = document.querySelectorAll(".nav-item");
navItems.forEach((item) => { item.addEventListener("click", () => { navItems.forEach((nav) => { nav.classList.remove("active"); });
item.classList.add("active");
}); });
