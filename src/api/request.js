const URL = 'https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0';

export const request = async() => {
  const response = await fetch(URL);
  const data = await response.json();

  return data;
};
