const baseUrl = process.env.NEWAPI_BASE_URL;
const adminToken = process.env.NEWAPI_ADMIN_TOKEN;

if (!baseUrl) {
  throw new Error("NEWAPI_BASE_URL is required");
}

if (!adminToken) {
  throw new Error("NEWAPI_ADMIN_TOKEN is required");
}

const channelIds = [217, 218];

function channelUrl(id) {
  return new URL(`/admin/channels/${id}`, baseUrl).toString();
}

async function fetchJson(url, init = {}) {
  const response = await fetch(url, {
    ...init,
    headers: {
      Authorization: `Bearer ${adminToken}`,
      Accept: "application/json",
      "Content-Type": "application/json",
      ...(init.headers || {})
    }
  });

  const text = await response.text();
  const body = text ? JSON.parse(text) : null;

  if (!response.ok) {
    throw new Error(`Request failed for ${url}: ${response.status} ${response.statusText} ${text}`);
  }

  return body;
}

async function ensureChannelEnabled(id) {
  const url = channelUrl(id);
  const channel = await fetchJson(url);

  const enabled = channel?.enabled ?? channel?.isEnabled ?? channel?.active;
  if (enabled === true) {
    console.log(`Channel ${id} already enabled`);
    return;
  }

  await fetchJson(url, {
    method: "PATCH",
    body: JSON.stringify({ enabled: true })
  });

  console.log(`Channel ${id} enabled`);
}

for (const id of channelIds) {
  await ensureChannelEnabled(id);
}
