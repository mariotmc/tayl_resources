const addCategoryColors = () => {
  const categoryElements = document.querySelectorAll(".item_category");
  categoryElements.forEach((element) => {
    if (element.textContent === "Ebook") {
      element.classList.add("text-green-800");
      element.classList.add("bg-green-100");
    }
    if (element.textContent === "Template") {
      element.classList.add("text-orange-800");
      element.classList.add("bg-orange-100");
    }
  });
};

const loadItems = () => {
  return {
    search: "",
    items: [
      { title: "This is an ebook", category: "Ebook", color: "green" },
      { title: "This is an ebook with a very long title", category: "Ebook", color: "green" },
      { title: "A handy template", category: "Template", color: "orange" },
      { title: "This template also has a really long title", category: "Template", color: "orange" },
      { title: "This is an ebook", category: "Ebook", color: "green" },
      { title: "This is an ebook with a very long title", category: "Ebook", color: "green" },
      { title: "A handy template", category: "Template", color: "orange" },
      { title: "This template also has a really long title", category: "Template", color: "orange" },
    ],
    get filteredItems() {
      addCategoryColors();
      return this.items.filter((item) => item.title.toLowerCase().includes(this.search.toLowerCase()));
    },
  };
};
