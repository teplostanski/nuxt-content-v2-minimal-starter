// compositions/useGitHubAuth.js
export default function useGitHubAuth() {
  const authenticateWithGitHub = () => {
    const clientId = '6b23ac4984f4163d5509'; // Замените на ваш Client ID
    const redirectUri = 'https://blog.teplostanski.dev/'; // Замените на URL вашего приложения на GitHub Pages
    const githubOAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=repo&response_type=token`;

    window.location.href = githubOAuthUrl;
  };

  const handleGitHubCallback = () => {
    const code = new URLSearchParams(window.location.search).get('code');

    if (!code) {
      console.error('Authorization code not found');
      return;
    }

    const clientId = '6b23ac4984f4163d5509'; // Замените на ваш Client ID
    const clientSecret = 'c41cd92f37d42c29a4b9cc6e779c2c086a0f382d'; // Замените на ваш Client Secret
    const redirectUri = 'https://blog.teplostanski.dev/'; // Замените на URL вашего приложения на GitHub Pages

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
      // Используйте accessToken для доступа к API GitHub
      // Например, получение информации о репозитории
      fetch('https://api.github.com/repos/teplostanski/uncrunch', {
        headers: {
          'Authorization': `token ${accessToken}`,
        },
      })
      .then(response => response.json())
      .then(repoData => {
        console.log('Repository Data:', repoData);
        // Теперь у вас есть данные о конкретном репозитории
      })
      .catch(error => {
        console.error('Failed to fetch repository data:', error);
      });
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
