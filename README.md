# Instagram-Clone

Instagram-clone is a full-stack project built with Next.js, Tailwind CSS, and Firebase. It includes all the core features of Instagram and utilizes tools like next-auth and Faker.js for authentication and data generation.

## Demo
https://user-images.githubusercontent.com/58598919/223052117-af42f7db-a283-450c-a0ad-fdc7708c3953.mp4


## Features
- Sign In/ Sign out
- Likes, Comments
- Fully Responsive
- Google Authentication
- More....


## Tech Stack
**Technologies:** React.js, Next.js, Tailwind CSS, Recoil, Firebase

**Libraries/Tools:** Hero Icons, tailwind-forms (plugin), faker.js, Tailwind-scrollbar (plugin), Tailwind-scrollbar-hide (plugin), NextAuth, useSession Hook (provided by NextAuth)


## Run Locally

Clone the project

```bash
  git clone https://github.com/patilharsh03/instagram-clone
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```
**Note** :- You have to intialize your app on firebase to run this project perfectly.



## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`GOOGLE_ID`

`GOOGLE_SECRET`

`NEXTAUTH_URL`


## Usage/Examples

```javascript
// Implementation of how to use Faker.js to get some random data

import { faker } from "@faker-js/faker";
import { useState, useEffect } from "react";

function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      avatar: faker.internet.avatar(),
      username: faker.internet.userName(),
      cityname: faker.address.cityName(),
      country: faker.address.country(),
      id: i,
    }));

    setSuggestions(suggestions);
  }, []);
```


## What I Learn When building this project

- I Learned about many new things about Next.js, how to use Recoil and Tailwind Plugins.
- How to use NextAuth library for authentication.
- used many libraries and tools to integrate with projects.
- Learned about Firebase more deeply and how things work with the help of it.


## FAQ

### Why this project is not deployed.

I deployed this Project on vercel and home page is working perfectly well. But when I click the **Sign In** button it showing a server error. I Tried to find the answers from many places but until right now couldn't find the solution.


## Support

Please support by ⭐ this project.
