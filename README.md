
## 🚒 Fire Truck Invoice Generator

This is a Next.js application that allows users to generate PDF invoices for Garage listings. Simply copy a link from https://withgarage.com, paste the URL into the input, click "Request PDF invoice" and a PDF invoice will be generated, including key details like title, brand, year, mileage, price, and description.

### 🛠️ **Technologies Used**

-   **Next.js**: For the frontend framework.
-   **Tailwind CSS**: For styling the UI.
-   **Shadcn UI**: For consistent and modern component design.
-   **jsPDF**: For generating PDF invoices.
-   **Axios**: For making API requests.

----------

### 📂 **Project Structure**

    `fire-truck-invoice-app/
    │── public/
    │   └── garage-logo.png        # The Garage logo used in the PDF
    │
    ├── app/
    │   │   ├── page.tsx           # Home page with the form
    │   │   └── api/
    │   │       └── fetchListing/route.ts  # API route to fetch listing details
    │   │
    │   ├── components/
    │       └── RequestInvoiceForm.tsx     # Form component for requesting the PDF
    │   
    ├── lib/
    │   └── generateInvoice.tsx        # Function to generate the PDF
    │   
    │   
    ├── globals.css        # Tailwind CSS global styles
    │
    │── package.json               # Project dependencies and scripts
    │── next.config.js             # Next.js configuration
    └── README.md                  # Project documentation` 

----------

### 🚀 **Getting Started**

Follow these steps to set up and run the project locally:

1.  **Clone the repository:**
    
    `git clone https://github.com/PrinceCarter/fire-truck-invoice-app.git`
    
    `cd fire-truck-invoice-app`
    
3.  **Install dependencies:**
        
    `npm install` 
    
4.  **Run the development server:**
    
    `npm run dev` 
    
5.  Open http://localhost:3000 in your browser.
    

----------

### 📝 **How to Use**

1.  **Paste the fire truck listing URL** into the input field.
    
2.  Click **"Request PDF Invoice"**.
    
3.  The PDF invoice will be generated and downloaded, including:

     -   **Garage** logo
    -   Title
    -   Brand
    -   Year
    -   Mileage
    -   Price
    -   Description
    -   Location
   
----------

### ⚙️ **API Endpoint**

The app fetches listing data using the following API route:

-   **Endpoint**: `POST /api/fetchListing`
-   **Request Body**: `{ id: "<UUID from the listing URL>" }`
-   **Response**: Listing details in JSON format
- 
----------

### 📄 **PDF Generation**

The PDF is generated using `jsPDF` with the following details:

-   Logo at the top-left corner
-   Fire truck details formatted with appropriate spacing
-   Multi-line descriptions wrapped to avoid overlap

----------

### 🧰 **Dependencies**

-   **Next.js**
-   **Tailwind CSS**
-   **Shadcn UI**
-   **Axios**
-   **jsPDF**
----------

### 📜 **License**

This project is licensed under the **MIT License**.

----------
