const tbody = document.querySelector("tbody");
const addForm = document.querySelector(".add-form");
const inputName = document.querySelector("#input-name");
const inputQuantity = document.querySelector("#input-quantity");

const fetchEstoque = async () => {
    const response = await fetch("https://controledeestoque-6zs0.onrender.com/estoque");

    const estoque = await response.json();

    return estoque;
};

const addEstoque = async (event) => {
    event.preventDefault();

    const estoque = {
        name: inputName.value,
        quantity: inputQuantity.value
    }

    await fetch("https://controledeestoque-6zs0.onrender.com/estoque", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(estoque)
    });

    loadEstoque();
    inputName.value = "";
    inputQuantity.value = "";

};

const deleteEstoque = async (id) => {

    await fetch(`https://controledeestoque-6zs0.onrender.com/estoque/${id}`, {
        method: "delete"
    });

    loadEstoque();

}

const updateEstoque = async (task) => {

    const { id, name, quantity, type } = task;

    await fetch(`https://controledeestoque-6zs0.onrender.com/estoque/${id}`, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, quantity, type })
    });

    loadEstoque();

}





const createElement = (tag, innerText = "", innerHTML = "") => {
    const element = document.createElement(tag);

    if (innerText) element.innerText = innerText;

    if (innerHTML) element.innerHTML = innerHTML;

    return element;
};

const createSelection = (type) => {

    const options = [
        "Híbrida",
        "Específica",
        "Específica VClear",
        "Slim",
        "Ferro",
        "Tras. Slim",
        "Tras. Ferro",
        "Tras. VClear",
        "TechOne",
        "VClear",
        "Others"
    ];

    const select = createElement("select", '', options);
    
    options.forEach(element => {
        const option = createElement("option");
        option.value = element.toLowerCase();
        option.textContent = element;
        select.appendChild(option);
    });

    select.value = type;

    return select;

};

const createRow = (estoque) => {

    const { id, name, quantity, type } = estoque;

    const tr = createElement("tr");
    const tdName = createElement("td", name);
    const tdQuantity = createElement("td", quantity);
    const tdSelect = createElement("td");
    const tdActions = createElement("td");

    const editBtn = createElement("button", '', '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffff"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>');
    const dltBtn = createElement("buttn", '', '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffff"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>');

    const editForm1 = createElement("form");
    const editInput1 = createElement("input");

    const editForm2 = createElement("form");
    const editInput2 = createElement("input");

    const select = createSelection(type);

    tdSelect.appendChild(select);

    editInput1.classList.add("input-data");
    editInput2.classList.add("input-data");

    editInput2.type = "number";

    editInput1.value = name;
    editInput2.value = quantity;

    editForm1.appendChild(editInput1);
    editForm2.appendChild(editInput2);

    editForm1.addEventListener("submit", async (event) => {
        event.preventDefault();
        
        updateEstoque({ id, name: editInput1.value, quantity: editInput2.value, type });

    });

    editForm2.addEventListener("submit", async (event) => {
        event.preventDefault();

        updateEstoque({ id, name: editInput1.value, quantity: editInput2.value, type });

    });

    select.addEventListener("change", async () => {
        updateEstoque({ id, name, quantity, type: select.value});
    });

    editBtn.classList.add("btn-action");
    dltBtn.classList.add("btn-action");

    editBtn.addEventListener("click", () => {
        tdName.innerText = "";
        tdQuantity.innerText = "";

        tdName.appendChild(editForm1);
        tdQuantity.appendChild(editForm2);

    });
    dltBtn.addEventListener("click", async () => deleteEstoque(id));

    tdActions.appendChild(editBtn);
    tdActions.appendChild(dltBtn);

    tr.appendChild(tdName);
    tr.appendChild(tdQuantity);
    tr.appendChild(tdSelect);
    tr.appendChild(tdActions);

    return tr;

};

const loadEstoque = async () => {
    const estoque = await fetchEstoque();

    tbody.innerHTML = "";

    estoque.forEach((element) => {
        const tr = createRow(element);
        tbody.appendChild(tr);
    });

}

addForm.addEventListener("submit", addEstoque);

loadEstoque();
