# 🍽️ Gasan Menu

A simple, bilingual cafeteria menu website for viewing daily and weekly meals at Gasan.

Gasan Menu makes Korean cafeteria menus more accessible to both Korean and English speakers by providing translated dish names, nutritional information, and organized meal categories in one convenient place.

## ✨ Features

- **Weekly menus** — View cafeteria meals organized by date.
- **Bilingual support** — Korean and English dish names.
- **Multiple meal categories**
  - 코너 1 — Corner 1
  - 코너 2 — Corner 2
  - 코너 3 — Corner 3
  - 석식 — Dinner
- **Detailed menus** — Main dishes, side dishes, soups, sauces, desserts, and drinks.
- **Nutritional information** — Calories (kcal) and protein (g).
- **Modular menu data** — Separate JavaScript files for each week.
- **AI-assisted menu updates** — Convert cafeteria menu images into structured JavaScript data using ChatGPT.
- **GitHub Pages hosting** — No dedicated backend or database required.

## 🛠️ Tech Stack

- HTML
- CSS
- JavaScript (ES Modules)
- JSON
- GitHub Pages
- ChatGPT

## 📁 Project Structure

```text
gasan-menu/
├── index.html
├── README.md
└── menus/
    ├── manifest.json
    ├── nov09-13.js
    ├── nov16-20.js
    ├── nov23-27.js
    └── ...
```

Each weekly menu is stored in a separate JavaScript module. The manifest identifies the available menu files.

## 📋 Menu Data Structure

Each weekly menu file exports an object containing dates, meal categories, dishes, translations, and nutritional information.

```javascript
export default {
  "2026-11-23": {
    items: [
      {
        kind: "코너 1",
        name: "제육볶음",
        enKind: "Corner 1",
        enName: "Spicy Stir-Fried Pork",
        submenus: [
          {
            name: "쌀밥",
            enName: "Steamed Rice"
          },
          {
            name: "배추김치",
            enName: "Napa Cabbage Kimchi"
          }
        ],
        kcal: 950,
        protein: 33
      }
    ],
    note: "메뉴는 사정에 따라 변경될 수 있습니다.",
    enNote: "Menu items may change without notice."
  }
};
```

The example above is illustrative and does not represent an actual cafeteria menu.

### Data Fields

| Field | Description |
|---|---|
| `kind` | Korean meal category |
| `name` | Korean main dish name |
| `enKind` | English meal category |
| `enName` | English main dish name |
| `submenus` | Accompanying dishes and translations |
| `kcal` | Total calories |
| `protein` | Protein content in grams |
| `note` | Korean menu disclaimer |
| `enNote` | English menu disclaimer |

Dates use the `YYYY-MM-DD` format.

## 🔄 Updating the Weekly Menu

The project uses an AI-assisted workflow to reduce manual transcription and translation.

1. Obtain the latest weekly cafeteria menu image.
2. Upload the image to the Gasan Menu project in ChatGPT.
3. Generate the complete weekly JavaScript module.
4. Review the extracted dishes, translations, dates, and nutritional information.
5. Save the generated code in the `menus/` directory using the established filename convention.
6. Ensure the new weekly file is registered in `menus/manifest.json`.
7. Commit and push the changes to GitHub.

GitHub Pages will publish the updated website after deployment.

### Example File Naming

```text
nov23-27.js
nov30-dec04.js
dec07-11.js
```

## 🤖 AI-Assisted Menu Conversion

The Gasan Menu ChatGPT project follows a consistent set of conversion rules:

- Extract all dates from the original menu image.
- Preserve the original Korean dish names.
- Provide natural and accurate English translations.
- Include every accompanying food item.
- Extract calories and protein as numerical values.
- Keep lunch corners and dinner strictly separate.
- Preserve information about closed or unavailable corners.
- Omit unavailable nutritional values rather than inventing them.
- Flag unreadable or uncertain information for manual review.
- Generate complete, copy-paste-ready JavaScript modules.
- Maintain compatibility with the existing website.

This workflow allows new weekly menus to be published without manually translating and formatting every dish.

## 🚀 Deployment

Gasan Menu is designed to be hosted on GitHub Pages.

To deploy your own instance:

1. Fork or clone this repository.
2. Open the repository's **Settings**.
3. Navigate to **Pages**.
4. Configure the deployment source.
5. Save the settings and wait for GitHub Pages to deploy the website.

No API keys, database, or server-side infrastructure are required for the static website.

## 💻 Local Development

Clone the repository and navigate to the project directory.

Start a local HTTP server:

```bash
python -m http.server 8000
```

Open the following address in your browser:

```text
http://localhost:8000
```

A local HTTP server is recommended because the website uses JavaScript modules.

## 🎯 Project Goals

- Make cafeteria menus easier to access and understand.
- Remove language barriers for international employees.
- Reduce the time required to publish weekly menus.
- Maintain a lightweight and easy-to-update website.
- Avoid unnecessary infrastructure and dependencies.

## 🔮 Potential Future Improvements

- Historical menu browsing
- Favorite dishes
- Menu search
- Nutritional comparisons
- Automatic weekly menu publishing
- Allergen information
- Daily meal notifications
- Progressive Web App (PWA) support

## ⚠️ Disclaimer

This project is an unofficial cafeteria menu viewer created for convenience.

Menu information is transcribed from cafeteria menu images. Translations and nutritional information may contain occasional errors.

Actual meals are subject to change without notice. Always refer to the cafeteria's official menu for the most accurate information, especially regarding food allergies and dietary restrictions.

---

Built to make deciding what to eat a little easier. 🍚
