# MixMax-Mix
MixMax Enchancement as a part of MixMax's intern hiring process. Uses Spotify API to get playlist based on the artist the user inputs. Uses MixMax API to embed playlist in Gmail. 

## Instructions

1. Open up the Mixmax Dashboard, click Settings -> Integrations -> Add Enhancement
2. Enter the following values

  Input name| Value
  --------- | ---------
  Name | MixMax Mix
  Icon tooltop | Spotify Search
  Editor URL | https://localhost:8888/
  Height | 900
  Width | 1000
  Resolver API URL | https://localhost:8888/resolver
  Activate API URL | *leave blank*

3. In terminal: `npm install` then `nodemon`
4. Open MixMax Chrome extension/Compose in Gmail. 
5. Click on **Enhance** and select **MixMax Mix**

