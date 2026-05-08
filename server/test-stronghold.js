import dotenv from 'dotenv';
dotenv.config();

async function test() {
  const strongholdHeaders = {
    'Content-Type': 'application/json',
    'SH-SECRET-KEY': process.env.STRONGHOLD_SECRET_KEY
  };
  
  // Create customer
  const customerRes = await fetch('https://api.strongholdpay.com/v2/customers', {
      method: 'POST',
      headers: strongholdHeaders,
      body: JSON.stringify({ 
        email: "test102@example.com",
        external_id: "user_test102",
        first_name: "Jungle",
        last_name: "Fish",
        country: "US",
        state: "CA"
      })
  });
  const customerData = await customerRes.json();
  console.log("Customer creation:", customerData);
  const customerId = customerData.id;

  if (customerId) {
    console.log(`Fetching token for customer ${customerId}...`);
    const tokenRes = await fetch(`https://api.strongholdpay.com/v2/customers/${customerId}/token`, {
        method: 'GET',
        headers: strongholdHeaders
    });
    const tokenData = await tokenRes.json();
    console.log("Token Status:", tokenRes.status);
    console.log("Token Data:", tokenData);
  }
}

test();
