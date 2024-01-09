export const userLinks = (isOpen) => {
    return [
        {
            name: "Planner",
            pathName: "Planner",
            icon: "event_note",
            action: () => (isOpen.value = !isOpen.value),
            disabled: false,
            children: [],
        },
        {
            name: "przepisy",
            pathName: "",
            icon: "menu_book",
            action: "",
            children: [
                {
                    name: "wszystkie przepisy",
                    pathName: "Recipes",
                    icon: "list_alt",
                    action: () => (isOpen.value = !isOpen.value),
                    disabled: false,
                },
                {
                    name: "moje przepisy",
                    pathName: "MyRecipes",
                    icon: "favorite",
                    action: () => (isOpen.value = !isOpen.value),
                    disabled: false,
                },
                {
                    name: "dodaj przepis",
                    pathName: "AddRecipe",
                    icon: "add_circle",
                    action: () => (isOpen.value = !isOpen.value),
                    disabled: false,
                },
            ],
        },
        {
            name: "produkty",
            pathName: "",
            icon: "fastfood",
            action: "",
            children: [
                {
                    name: "wszystkie produkty",
                    pathName: "ProductListPage",
                    icon: "list_alt",
                    action: () => (isOpen.value = !isOpen.value),
                    disabled: false,
                },
                {
                    name: "moje produkty",
                    pathName: "MyProductListPage",
                    icon: "favorite",
                    action: () => (isOpen.value = !isOpen.value),
                    disabled: false,
                },
            ],
        },
    ];
};

export const employeeLinks = (isOpen) => {
    return [
        {
            name: "Planner",
            pathName: "Planner",
            icon: "event_note",
            action: () => (isOpen.value = !isOpen.value),
            disabled: false,
            children: [],
        },
        {
            name: "przepisy",
            pathName: "",
            icon: "menu_book",
            action: "",
            children: [
                {
                    name: "wszystkie przepisy",
                    pathName: "Recipes",
                    icon: "list_alt",
                    action: () => (isOpen.value = !isOpen.value),
                    disabled: false,
                },
                {
                    name: "moje przepisy",
                    pathName: "MyRecipes",
                    icon: "favorite",
                    action: () => (isOpen.value = !isOpen.value),
                    disabled: false,
                },
                {
                    name: "dodaj przepis",
                    pathName: "AddRecipe",
                    icon: "add_circle",
                    action: () => (isOpen.value = !isOpen.value),
                    disabled: false,
                },
            ],
        },
        {
            name: "produkty",
            pathName: "",
            icon: "fastfood",
            action: "",
            children: [
                {
                    name: "wszystkie produkty",
                    pathName: "ProductListPage",
                    icon: "list_alt",
                    action: () => (isOpen.value = !isOpen.value),
                    disabled: false,
                },
                {
                    name: "moje produkty",
                    pathName: "MyProductListPage",
                    icon: "favorite",
                    action: () => (isOpen.value = !isOpen.value),
                    disabled: false,
                },
            ],
        },
        {
            name: "panel",
            pathName: "",
            icon: "insert_chart",
            action: "",
            children: [
                {
                    name: "przepisy",
                    pathName: "ManageRecipes",
                    icon: "list_alt",
                    action: () => (isOpen.value = !isOpen.value),
                    disabled: false,
                },
                {
                    name: "produkty",
                    pathName: "ManageProducts",
                    icon: "fastfood",
                    action: () => (isOpen.value = !isOpen.value),
                    disabled: false,
                },
                {
                    name: "statystyki",
                    pathName: "Statistics",
                    icon: "stacked_line_chart",
                    action: () => (isOpen.value = !isOpen.value),
                    disabled: false,
                },
            ],
        },
    ];
};

export const adminLinks = (isOpen) => {
    return [
        {
            name: "Planner",
            pathName: "Planner",
            icon: "event_note",
            action: () => (isOpen.value = !isOpen.value),
            disabled: false,
            children: [],
        },
        {
            name: "przepisy",
            pathName: "",
            icon: "menu_book",
            action: "",
            children: [
                {
                    name: "wszystkie przepisy",
                    pathName: "Recipes",
                    icon: "list_alt",
                    action: () => (isOpen.value = !isOpen.value),
                    disabled: false,
                },
                {
                    name: "moje przepisy",
                    pathName: "MyRecipes",
                    icon: "favorite",
                    action: () => (isOpen.value = !isOpen.value),
                    disabled: false,
                },
                {
                    name: "dodaj przepis",
                    pathName: "AddRecipe",
                    icon: "add_circle",
                    action: () => (isOpen.value = !isOpen.value),
                    disabled: false,
                },
            ],
        },
        {
            name: "produkty",
            pathName: "",
            icon: "fastfood",
            action: "",
            children: [
                {
                    name: "wszystkie produkty",
                    pathName: "ProductListPage",
                    icon: "list_alt",
                    action: () => (isOpen.value = !isOpen.value),
                    disabled: false,
                },
                {
                    name: "moje produkty",
                    pathName: "MyProductListPage",
                    icon: "favorite",
                    action: () => (isOpen.value = !isOpen.value),
                    disabled: false,
                },
            ],
        },
        {
            name: "panel",
            pathName: "",
            icon: "insert_chart",
            action: "",
            children: [
                {
                    name: "przepisy",
                    pathName: "ManageRecipes",
                    icon: "menu_book",
                    action: () => (isOpen.value = !isOpen.value),
                    disabled: false,
                },
                {
                    name: "produkty",
                    pathName: "ManageProducts",
                    icon: "fastfood",
                    action: () => (isOpen.value = !isOpen.value),
                    disabled: false,
                },
                {
                    name: "użytkownicy",
                    pathName: "ManageUsers",
                    icon: "group",
                    action: () => (isOpen.value = !isOpen.value),
                    disabled: false,
                },
                {
                    name: "statystyki",
                    pathName: "Statistics",
                    icon: "stacked_line_chart",
                    action: () => (isOpen.value = !isOpen.value),
                    disabled: false,
                },
            ],
        },
    ];
};
