import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config({ path: 'server/.env' });

async function test() {
  const strongholdHeaders = {
    'Content-Type': 'application/json',
    'SH-SECRET-KEY': process.env.STRONGHOLD_SECRET_KEY
  };
  
  console.log("Testing Stronghold API key: " + process.env.STRONGHOLD_SECRET_KEY.substring(0, 10) + "...");
  
  const res = await fetch('https://api.strongholdpay.com/v2/customers', {
    method: 'POST',
    headers: strongholdHeaders,
    body: JSON.stringify({ email: "test@example.com" })
  });
  const data = await res.json();
  console.log("Status:", res.status);
  console.log("Response:", JSON.stringify(data, null, 2));
}

test();
