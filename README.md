# Currency Converter

This project is a web-based currency converter application that allows users to convert one currency to another using real-time exchange rates. The application is built with HTML, CSS, and JavaScript and utilizes the [Currency API](https://github.com/fawazahmed0/currency-api) for fetching the latest exchange rates.

## Features
- Select currencies for conversion from dropdowns.
- Real-time exchange rate display between two selected currencies.
- Flag icons that update dynamically based on the selected currencies.
- Input an amount to convert between the selected currencies.
- Default selection: `USD` as the base currency and `INR` as the target currency.
- Error handling for network issues or invalid inputs.

## Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/<your-username>/currency-converter.git
   ```
2. Navigate to the project directory:
   ```bash
   cd currency-converter
   ```
3. Open the `index.html` file in your browser to view the application.

## Usage
1. Select the base currency (From) and target currency (To) from the dropdown menus.
2. Enter the amount you wish to convert in the input field.
3. Click the `Convert` button to view the converted amount.
4. The exchange rate and conversion result will be displayed below the input field.

## Code Structure
- **HTML:** Contains the structure of the webpage, including dropdowns and input fields.
- **CSS:** Provides basic styling for the application.
- **JavaScript:** Handles fetching exchange rates, updating the UI dynamically, and managing user interactions.

## API
The project uses the [Currency API](https://github.com/fawazahmed0/currency-api) hosted on `jsdelivr` for retrieving the latest exchange rates.

### Example Endpoint
- URL format: `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/{base_currency}.json`
- Replace `{base_currency}` with the three-letter code of the base currency (e.g., `usd`).

## Project Requirements
- A modern web browser with JavaScript enabled.
- An active internet connection to fetch exchange rates and flag images.

## Acknowledgments
- [Currency API](https://github.com/fawazahmed0/currency-api) for providing exchange rates.
- [Flags API](https://flagsapi.com/) for country flag images.

## Contributing
Feel free to contribute to this project by submitting issues or pull requests. Follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes and push them to your forked repository.
4. Submit a pull request to the main repository.

