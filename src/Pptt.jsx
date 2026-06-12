import PptxGenJS from "pptxgenjs";

const CustomerPPT = () => {
  const customer = {
    name: "John Doe",
    email: "john@gmail.com",
    phone: "+91 9876543210",
    address: "Hyderabad, India",
  };

  const generatePPT = () => {
    const pptx = new PptxGenJS();

    // Slide 1 - Title
    const slide1 = pptx.addSlide();
    slide1.addText("Customer Details", {
      x: 1,
      y: 0.5,
      fontSize: 26,
      bold: true,
    });

    slide1.addText(
      `Name: ${customer.name}\nEmail: ${customer.email}\nPhone: ${customer.phone}\nAddress: ${customer.address}`,
      { x: 1, y: 1.5, fontSize: 16 }
    );

    // Download PPT
    pptx.writeFile("Customer_Details.pptx");
  };

  return (
    <div>
      <h2>Customer Info</h2>
      <p>Name: {customer.name}</p>
      <p>Email: {customer.email}</p>
      <p>Phone: {customer.phone}</p>

      <button onClick={generatePPT}>
        Download PPT
      </button>
    </div>
  );
};

export default CustomerPPT;
