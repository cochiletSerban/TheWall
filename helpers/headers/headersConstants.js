// Request Headers constants
const refreshTokenReqBody = {
  grant_type: 'refresh_token',
  refresh_token: process.env.refreshToken
}
const auth = {
  username: process.env.clientId,
  password: process.env.clientSecret
}
const refreshConfig = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  auth
}

// Request headers helpers
function getAuthHeaders (token) {
  return {
    headers: { Authorization: `Bearer ${token}` }
  }
}

module.exports = {
  refreshTokenReqBody,
  refreshConfig,
  getAuthHeaders
}
