// compositions/useGitHubAuth.ts
export default function useGitHubAuth() {
  const authenticateWithGitHub = () => {
    const clientId = '6b23ac4984f4163d5509';
    const redirectUri = 'https://blog.teplostanski.dev/';
    const githubOAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=repo&response_type=token`;

    window.location.href = githubOAuthUrl;
  };

  const handleGitHubCallback = () => {
    const code = new URLSearchParams(window.location.search).get('code');

    if (!code) {
      console.error('Authorization code not found');
      return;
    }

    const clientId = '6b23ac4984f4163d5509';
    const clientSecret = '56210b4d0d2b8bb25cca985647dccd0af4e16c12';
    const redirectUri = 'https://blog.teplostanski.dev/';

    fetch(`https://github.com/login/oauth/access_token`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code: code,
        redirect_uri: redirectUri,
      }),
    })
    .then(response => response.json())
    .then(data => {
      const accessToken = data.access_token;
      console.log('Access Token:', accessToken);
      // Теперь у вас есть accessToken для использования с API GitHub
    })
    .catch(error => {
      console.error('Failed to get GitHub access token:', error);
    });
  };

  return {
    authenticateWithGitHub,
    handleGitHubCallback,
  };
}
