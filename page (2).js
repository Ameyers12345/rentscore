export async function POST(request) {
  const formData = await request.formData();
  const tenantName = formData.get('tenantName') || 'Tenant';
  const landlordName = formData.get('landlordName') || 'Landlord';
  const propertyAddress = formData.get('propertyAddress') || 'Property';
  const rentAmount = formData.get('rentAmount') || '0';
  const startDate = formData.get('startDate') || 'TBC';

  const text = `RENTSCORE STARTER PERIODIC TENANCY AGREEMENT\n\nParties\nLandlord: ${landlordName}\nTenant: ${tenantName}\nProperty: ${propertyAddress}\nMonthly Rent: £${rentAmount}\nStart Date: ${startDate}\n\nKey terms\n1. This is a starter template for a UK periodic tenancy workflow and must be legally reviewed before production use.\n2. Rent is payable monthly in advance.\n3. The tenant agrees to keep the property reasonably clean and report repairs promptly.\n4. The landlord agrees to maintain the structure, core systems and legal safety obligations.\n5. Both parties should record inventory condition at move-in and move-out.\n6. Any platform-generated clauses should be checked against current law and local guidance.`;

  return new Response(text, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Content-Disposition': 'inline; filename="rentscore-agreement.txt"'
    }
  });
}
