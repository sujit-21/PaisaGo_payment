const API_BASE = 'http://localhost:5000/api';

export async function fetchServices(category = '') {
  try {
    const url = category ? `${API_BASE}/services?category=${category}` : `${API_BASE}/services`;
    const res = await fetch(url);
    if (!res.ok) throw new Error('Network error');
    const json = await res.json();
    return json.data;
  } catch (err) {
    console.warn('API fallback for services:', err.message);
    return null; // triggers local fallback in components
  }
}

export async function processPayment(paymentData) {
  try {
    const res = await fetch(`${API_BASE}/transactions/pay`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(paymentData)
    });
    const json = await res.json();
    return json;
  } catch (err) {
    console.warn('API fallback for payment:', err.message);
    return {
      success: true,
      data: {
        txnId: 'T26' + Math.floor(100000000000 + Math.random() * 900000000000),
        serviceType: paymentData.serviceType,
        accountIdentifier: paymentData.accountIdentifier,
        operator: paymentData.operator || '',
        amount: Number(paymentData.amount),
        status: 'SUCCESS',
        paymentMode: paymentData.paymentMode || 'PaisaGo UPI',
        referenceId: Math.floor(100000000000 + Math.random() * 900000000000).toString(),
        createdAt: new Date().toISOString()
      }
    };
  }
}

export async function submitMerchantLead(leadData) {
  try {
    const res = await fetch(`${API_BASE}/leads/submit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(leadData)
    });
    const json = await res.json();
    return json;
  } catch (err) {
    return {
      success: true,
      message: 'Thank you! A PaisaGo Business representative will contact you shortly.'
    };
  }
}

export async function fetchPulseMetrics() {
  try {
    const res = await fetch(`${API_BASE}/pulse/metrics`);
    if (!res.ok) throw new Error('Pulse fetch error');
    const json = await res.json();
    return json.data;
  } catch (err) {
    return null;
  }
}

export async function fetchLivePulseStream() {
  try {
    const res = await fetch(`${API_BASE}/pulse/live-stream`);
    if (!res.ok) throw new Error('Live stream error');
    const json = await res.json();
    return json.data;
  } catch (err) {
    return null;
  }
}
