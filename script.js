// Опции памяти для каждой модели
const memoryOptions = {
  "iPhone 8": ["64GB", "256GB"],
  "iPhone 8 Plus": ["64GB", "256GB"],
  "iPhone X": ["64GB", "256GB"],
  "iPhone XS": ["64GB", "256GB", "512GB"],
  "iPhone XS Max": ["64GB", "256GB", "512GB"],
  "iPhone XR": ["64GB", "128GB", "256GB"],
  "iPhone SE2020": ["64GB", "128GB", "256GB"],
  "iPhone 11": ["64GB", "128GB", "256GB"],
  "iPhone 11 Pro": ["64GB", "256GB", "512GB"],
  "iPhone 11 Max": ["64GB", "256GB", "512GB"],
  "iPhone 12 Mini": ["64GB", "128GB", "256GB"],
  "iPhone 12": ["64GB", "128GB", "256GB"],
  "iPhone 12 Pro": ["128GB", "256GB", "512GB"],
  "iPhone 12 Pro Max": ["128GB", "256GB", "512GB"],
  "iPhone SE2022": ["64GB", "128GB", "256GB"],
  "iPhone 13 Mini": ["128GB", "256GB", "512GB"],
  "iPhone 13": ["128GB", "256GB", "512GB"],
  "iPhone 13 Pro": ["128GB", "256GB", "512GB", "1TB"],
  "iPhone 13 Pro Max": ["128GB", "256GB", "512GB", "1TB"],
  "iPhone 14": ["128GB", "256GB", "512GB"],
  "iPhone 14 Plus": ["128GB", "256GB", "512GB"],
  "iPhone 14 Pro": ["128GB", "256GB", "512GB", "1TB"],
  "iPhone 14 Pro Max": ["128GB", "256GB", "512GB", "1TB"],
  "iPhone 15": ["128GB", "256GB", "512GB"],
  "iPhone 15 Plus": ["128GB", "256GB", "512GB"],
  "iPhone 15 Pro":  ["128GB", "256GB", "512GB", "1TB"],
  "iPhone 15 Pro Max":  ["128GB", "256GB", "512GB", "1TB"],
};

// Базовые цены для моделей и объемов памяти
const basePrices = {
  "iPhone 8": [ "64GB": 3350, "256GB": 4150 ],
  "iPhone 13": { "128GB": 16000, "256GB": 700, "512GB": 800 },
  "iPhone 8 Plus": ["64GB", "256GB"],
  "iPhone X": ["64GB", "256GB"],
  "iPhone XS": ["64GB", "256GB", "512GB"],
  "iPhone XS Max": ["64GB", "256GB", "512GB"],
  "iPhone XR": ["64GB", "256GB"],
  "iPhone SE2020": ["64GB", "256GB"],
  "iPhone 11": ["64GB", "256GB"],
  "iPhone 11 Pro": ["64GB", "256GB"],
  "iPhone 11 Max": ["64GB", "256GB"],
  "iPhone 12 Mini": ["64GB", "256GB"],
  "iPhone 12": ["64GB", "256GB"],
  "iPhone 12 Pro": ["64GB", "256GB"],
  "iPhone 12 Pro Max": ["64GB", "256GB"],
  "iPhone SE2022": ["64GB", "256GB"],
  "iPhone 13 Mini": ["64GB", "256GB"],
  "iPhone 13": ["64GB", "256GB"],
  "iPhone 13 Pro": ["64GB", "256GB"],
  "iPhone 13 Pro Max": ["64GB", "256GB"],
  "iPhone 14": ["64GB", "256GB"],
  "iPhone 14 Plus": ["64GB", "256GB"],
  "iPhone 14 Pro Max": ["64GB", "256GB"],
  "iPhone 15": ["64GB", "256GB"],
  "iPhone 15 Plus": ["64GB", "256GB"],
  "iPhone 15 Pro": ["64GB", "256GB"],
  "iPhone 15 Pro Max": ["64GB", "256GB"],
};

// Модификаторы состояния
const conditionModifiers = {
  "Ідеальний": 1,
  "Гарний стан": 0.95, // Уменьшение на 5%
  "Зі слідами використання": 0.92, // Уменьшение на 8%
};

// Суммы вычитания для здоровья батареи
const batteryDeductions = {
  "iPhone 8": { "90-100%": 0, "80-89%": 1000 },
  "iPhone 8 Plus": { "90-100%": 0, "80-89%": 1200 },
  "iPhone 13": { "87-100%": 0, "79-86%": 3000 },

};

// Обновление списка памяти в зависимости от выбранной модели
function updateMemoryOptions() {
  const model = document.getElementById("model").value;
  const memorySelect = document.getElementById("memory");

  // Очистка текущих опций
    memorySelect.innerHTML = '<option value="">  Оберіть обсяг памяті  </option>';
  
    if (model && memoryOptions[model]) {
    memoryOptions[model].forEach(memory => {
      const option = document.createElement("option");
      option.value = memory;
      option.textContent = memory;
      memorySelect.appendChild(option);
    });
    }
  }

// Расчет цены
function calculatePrice() {
  const model = document.getElementById("model").value;
  const memory = document.getElementById("memory").value;
  const condition = document.getElementById("condition").value;
  const battery = document.getElementById("battery").value;
  const priceElement = document.getElementById("price");

  if (model && memory && condition && battery) {
	const basePrice = basePrices[model][memory];
	const conditionModifier = conditionModifiers[condition];
	const batteryDeduction = batteryDeductions[model][battery];

	// Итоговая цена = Базовая цена × Модификатор состояния - Сумма вычитания аккумулятора
	const finalPrice = basePrice * conditionModifier - batteryDeduction;

	priceElement.textContent = `Оціночна вартість: $${finalPrice.toFixed(2)}`;
	priceElement.classList.remove("hidden");
	priceElement.classList.add("visible");
  } else {
	priceElement.textContent = "Будь ласка, виберіть всі опції.";
	priceElement.classList.remove("visible");
	priceElement.classList.add("hidden");
  }
}
