import jsPDF from "jspdf";

export async function generateInvoice(data: {
  listingTitle?: string;
  listingDescription?: string;
  sellingPrice?: number;
  addressPrimary?: string;
  addressCity?: string;
  addressState?: string;
  addressZip?: string;
  mileage?: number;
  itemAge?: number;
  itemBrand?: string;
}) {
  try {
    console.log("Generating invoice for:", data);

    if (!data || !data.listingTitle || !data.sellingPrice) {
      throw new Error("Missing required data to generate invoice");
    }

    const doc = new jsPDF();
    let y = 20;

    const image = new Image();
    image.src = "/garage-logo.png";
    image.onload = () => {

      // Logo
      doc.addImage(image, "PNG", 20, 10, 40, 10);
      y += 20;

      // Title
      doc.setFontSize(20);
      doc.text("Fire Truck Invoice", 20, y);
      y += 15;

      // Details
      doc.setFontSize(14);
      doc.text(`Title: ${data.listingTitle}`, 20, y);
      y += 10;
      doc.text(`Brand: ${data.itemBrand || "N/A"}`, 20, y);
      y += 10;
      doc.text(`Year: ${data.itemAge || "N/A"}`, 20, y);
      y += 10;
      doc.text(
        `Mileage: ${data.mileage ? `${data.mileage} miles` : "N/A"}`,
        20,
        y
      );
      y += 10;
      doc.text(`Price: $${(data.sellingPrice || 0).toLocaleString()}`, 20, y);
      y += 15;

      // Description
      doc.text("Description:", 20, y);
      y += 10;
      doc.setFontSize(12);
      const description = data.listingDescription || "No description available";
      const descriptionLines = doc.splitTextToSize(description, 170);
      doc.text(descriptionLines, 20, y);
      // Add extra padding for each line so text doesn't overlap
      y += descriptionLines.length * 6 + 10;

      // Location
      doc.setFontSize(14);
      doc.text("Location:", 20, y);
      y += 10;
      doc.setFontSize(12);
      const location = `${data.addressPrimary || ""}, ${
        data.addressCity || ""
      }, ${data.addressState || ""} ${data.addressZip || ""}`;
      doc.text(location.trim() || "No address provided", 20, y);

      // Save the PDF
      doc.save("fire-truck-invoice.pdf");
    };

    image.onerror = () => {
      console.error("Error loading the logo image");
      alert("Error loading the logo image.");
    };
  } catch (error) {
    console.error("Error generating invoice:", error);
    if (error instanceof Error) {
      alert(error.message);
    } else {
      alert("An unknown error occurred");
    }
  }
}
