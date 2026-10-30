const connectBtn = document.getElementById("connectBtn"); const orb = document.getElementById("orb"); const connectionText = document.getElementById("connectionText"); const connectionStatus = document.getElementById("status"); const serverSelect = document.getElementById("server"); const serverName = document.getElementById("serverName");
let connected = false;
connectBtn.addEventListener("click", () => { connected = !connected;
if (connected) { orb.classList.add("connected"); connectionText.textContent = "ДЕМО-РЕЖИМ"; connectionStatus.textContent = "Демо включено"; connectBtn.textContent = "ОТКЛЮЧИТЬ"; } else { orb.classList.remove("connected"); connectionText.textContent = "ОТКЛЮЧЕНО"; connectionStatus.textContent = "Не активно"; connectBtn.textContent = "ПОДКЛЮЧИТЬСЯ"; } });
serverSelect.addEventListener("change", () => { serverName.textContent = serverSelect.value; });
let family = [ { name: "Владелец", role: "Администратор", active: true }, { name: "Участник 1", role: "Семья", active: true }, { name: "Участник 2", role: "Семья", active: false }, { name: "Участник 3", role: "Семья", active: false } ];
const familyContainer = document.getElementById("family");
function renderFamily() { familyContainer.innerHTML = "";
family.forEach((person, index) => { const member = document.createElement("div"); member.className = "member";
const name = document.createElement("span");
name.textContent = person.name + " · " + person.role;

const status = document.createElement("span");
status.textContent = person.active ? "Активен" : "Отключён";

member.append(name, status);

if (index !== 0) {
  const toggle = document.createElement("button");
  toggle.textContent = person.active ? "Отключить" : "Включить";
  toggle.style.width = "auto";
  toggle.style.padding = "8px 12px";
  toggle.addEventListener("click", () => {
    person.active = !person.active;
    renderFamily();
  });

  member.append(toggle);
}

familyContainer.append(member);
}); }
renderFamily();
document.getElementById("addMember").addEventListener("click", () => { const input = document.getElementById("memberName"); const message = document.getElementById("adminMessage"); const name = input.value.trim();
if (!name) { message.textContent = "Введи имя участника."; return; }
if (family.length >= 4) { message.textContent = "Достигнут лимит: 4 профиля."; return; }
family.push({ name: name, role: "Семья", active: false });
input.value = ""; message.textContent = "Профиль добавлен!"; renderFamily(); });
