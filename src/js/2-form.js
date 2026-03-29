let formData = {
    email: "",
    message: ""
};

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = "feedback-form-state";

populateForm();

form.addEventListener('input', (e) => {
    const { name, value } = e.target;
    formData[name] = value.trim();

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (formData.email === "" || formData.message === "") {
        alert("Будь ласка, заповніть усі поля");
        return;
    }

    console.log("Надані дані:", formData);

    localStorage.removeItem(STORAGE_KEY);

formData = { email: "", message: "" };
form.reset();
})


function populateForm() {
  const savedData = localStorage.getItem(STORAGE_KEY);

  if (savedData) {
    try {
      const parsedData = JSON.parse(savedData);
      
      // Оновлюємо formData, щоб уникнути втрати даних при сабміті
      formData = parsedData;

      form.elements.email.value = formData.email || "";
      form.elements.message.value = formData.message || "";
    } catch (error) {
      console.error("Storage parsing error:", error);
    }
  }
}