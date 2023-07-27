<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Ankasa-ticketing/ankasa-ticketing">
    <img src="https://github.com/reijiren/AnkasaAPP/blob/main/public/ankasa_logo.png" alt="Logo" width="150px">
  </a>

  <h3 align="center">Ankasa Ticketing</h3>

  <p align="center">
    Ankasa Ticketing is an innovative web application designed to facilitate and streamline the process of flight ticket booking. With its intuitive and user-friendly interface, users can quickly search, select, and reserve flight tickets according to their preferences.
    <br />
    <a href="#table-of-contents"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://bit.ly/food-recipes">View Demo</a>
    ·
    <a href="https://github.com/Ankasa-ticketing/ankasa-ticketing/issues">Report Bug</a>
    ·
    <a href="https://github.com/Ankasa-ticketing/ankasa-ticketing/issues">Request Feature</a>
    <br />
    <p align="center">
      <a href="https://github.com/Ankasa-ticketing/ankasa-ticketing/"><img src="https://img.shields.io/github/issues/Ankasa-ticketing/ankasa-ticketing?style=flat"></a>
      <a href="https://github.com/Ankasa-ticketing/ankasa-ticketing/"><img src="https://img.shields.io/github/forks/Ankasa-ticketing/ankasa-ticketing?style=flat"></a>
      <a href="https://github.com/Ankasa-ticketing/ankasa-ticketing/"><img src="https://img.shields.io/github/stars/Ankasa-ticketing/ankasa-ticketing?style=flat"></a>
      <a href="https://github.com/Ankasa-ticketing/ankasa-ticketing/"><img src="https://img.shields.io/github/license/Ankasa-ticketing/ankasa-ticketing?style=flat"></a>
    </p>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
 ## Table of Contents

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#setup-env-example">Setup .env example</a></li>
      </ul>
    </li>
    <li><a href="#screenshoots">Screenshots</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#related-project">Related Project</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project
**Ankasa Ticketing** is an innovative web application designed to facilitate and streamline the process of flight ticket booking. With its intuitive and user-friendly interface, users can quickly search, select, and reserve flight tickets according to their preferences.

### Built With
This app was built with some technologies below:
* [ViteJS+ReactJS](https://vitejs.dev/guide/)
* [Javascript](https://www.javascript.com/)
* [Flowbite-React](https://www.flowbite-react.com/)
* [Axios](https://axios-http.com/)
* [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

Before going to the installation stage there are some software that must be installed first.

* [NodeJs](https://nodejs.org/en/download/)

<p align="right">(<a href="#top">back to top</a>)</p>

### Installation

If you want to run this project locally, We recommend you to configure the [back-end](https://github.com/Ankasa-ticketing/ankasa-ticketing-api) first before configuring this repo front-end.
- Clone the repo
```
git clone https://github.com/Ankasa-ticketing/ankasa-ticketing.git
```
- Go To Folder Repo
```
cd ankasa-ticketing
```
- Install Module
```
npm install
```
- <a href="#setup-env">Setup .env</a>
- Type ` npm run dev` To Start Website
- Type ` npm run build` To Build app
- Type ` npm run start` To Start Production

<p align="right">(<a href="#top">back to top</a>)</p>

### Setup .env example
Create .env file in your root project folder.
```
VITE_API_URL = [API_URL]
```

<p align="right">(<a href="#top">back to top</a>)</p>

## Screenshoots
<p align="center" display=flex>
<table>
 <tr>
    <td><image src="https://i.postimg.cc/W3x6b6xG/Screenshot-2023-07-26-115621.png" alt="Landing Page" width=100%></td>
    <td><image src="https://lh3.googleusercontent.com/d/1vALeDMD_fNkAKQqqqRuFDHt11nGbSBh6" alt="Landing Page After Login" width=100%/></td>
  </tr>
   <tr>
    <td>Landing Page</td>
    <td>Landing Page After Login</td>
  </tr>
  
  <tr>
    <td><image src="https://lh3.googleusercontent.com/d/1oag1KBgj-fQAzsmwjvNPCOELoqAeXbEO" alt="Login Page" width=100%></td>
    <td><image src="https://lh3.googleusercontent.com/d/17yeQqw408hiDDOyFZq17Fw3ovnswsQ7D" alt="Forgot Password Page" width=100%/></td>
  </tr>
   <tr>
    <td>Login Page</td>
    <td>Forgot Password Page</td>
  </tr>
  
  <tr>
    <td><image src="https://lh3.googleusercontent.com/d/1nshaEdAJsPJUPJ4uR1bmM_275Rrf6zlb" alt="Register Worker Page" width=100%></td>
    <td><image src="https://lh3.googleusercontent.com/d/1ovMJdHmSF2b1MfGMEbXM22YbyJhF1305" alt="Register Recruiter Page" width=100%/></td>
  </tr>
   <tr>
    <td>Register Worker Page</td>
    <td>Register Recruiter Page</td>
  </tr>
  
  <tr>
    <td><image src="https://lh3.googleusercontent.com/d/1Rv3GPrjZCZkgf7jJkXTUo7Rq21qT0RWF" alt="Reset Password Page" width=100%/></td>
    <td><image src="https://lh3.googleusercontent.com/d/1faiv7WfqKLpWx4fT67ITpTqhg0AGIvma" alt="Send Message" width=100%></td>
  </tr>
  <tr>
    <td>Reset Password Page</td>
    <td>Send Message</td>
  </tr>
  
  <tr>
    <td><image src="https://lh3.googleusercontent.com/d/1xa6v3_KTTxLq9yENUX5FQ0dDfexhLHhT" alt="List Worker Page" width=100%/></td>
    <td><image src="https://lh3.googleusercontent.com/d/1uaE7J2Chz_sd0C546eiUzeiqfZk9KV35" alt="List Recruiter Page" width=100%></td>
  </tr>
  <tr>
    <td>List Worker Page</td>
    <td>List Recruiter Page</td>
  </tr>
  
  <tr>
    <td><image src="https://lh3.googleusercontent.com/d/1rAB9MAE1YXduQR54z2GV4-LIUjULrlHt" alt="Profile Worker - Portofolio Page" width=100%/></td>
    <td><image src="https://lh3.googleusercontent.com/d/1kK97he_sI5VXQu386PCdWMa5mIOMrJof" alt="Profile Worker - Experience Page" width=100%></td>
  </tr>
  <tr>
    <td>Profile Worker - Portofolio Page</td>
    <td>Profile Worker - Experience Page</td>
  </tr>
  
  <tr>
    <td><image src="https://lh3.googleusercontent.com/d/10QlGAEHAQKd7uUjGX7PdEgahAIWdDgEx" alt="Detail Worker Page" width=100%/></td>
    <td><image src="https://lh3.googleusercontent.com/d/1Lg2xtIj-Bw66hfeiw43UkXWWE-Yl8Suf" alt="Edit Profile Worker Page" width=100%></td>
  </tr>
  <tr>
    <td>Detail Worker Page</td>
    <td>Edit Profile Worker Page</td>
  </tr>
  
  <tr>
    <td><image src="https://lh3.googleusercontent.com/d/1JC4ey8k86NJ7y6yigBRWV85ca5rZguBh" alt="Profile Recruiter Page" width=100%/></td>
    <td><image src="https://lh3.googleusercontent.com/d/1_TUFkzjW2SdQOuUdzPFi1yfNus2fdgqX" alt="Detail Recruiter Page" width=100%></td>
  </tr>
  <tr>
    <td>Profile Recruiter Page</td>
    <td>Detail Recruiter Page</td>
  </tr>
  
  <tr>
    <td><image src="https://lh3.googleusercontent.com/d/11rAYOaeWBScl3H8V7zIfIHMwtyWcwBhr" alt="Edit Profile Recruiter Page" width=100%/></td>
    <td><image src="https://lh3.googleusercontent.com/d/1f_AUAzw2cVNNIp7EZ27snqve0ze1udI7" alt="Hire Page" width=100%></td>
  </tr>
  <tr>
    <td>Edit Profile Recruiter Page</td>
    <td>Hire Page</td>
  </tr>

</table>
      
</p>

<p align="right">(<a href="#top">back to top</a>)</p>

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

## Related Project
:rocket: [`Backend Ankasa Ticketing`](https://github.com/Ankasa-ticketing/ankasa-ticketing-api)

:rocket: [`Frontend Ankasa Ticketing`](https://github.com/Ankasa-ticketing/ankasa-ticketing)

<!-- :rocket: [`Web Service`](https://mama-recipe.herokuapp.com/) -->

:rocket: [`Demo Ankasa Ticketing`](https://food-recipes-teal.vercel.app/)

<p align="right">(<a href="#top">back to top</a>)</p>

## Contact

My Email : hadifah3@gmail.com

Project Link: [https://github.com/Ankasa-ticketing](https://github.com/Ankasa-ticketing)

<p align="right">(<a href="#top">back to top</a>)</p>

## License
Distributed under the [MIT](/LICENSE) License.

<p align="right">(<a href="#top">back to top</a>)</p>