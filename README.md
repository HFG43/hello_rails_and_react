<a name="readme-top"></a>

<div align="center">
  <h1><b>Hello Rails and React</b></h1>
</div>

# 📗 Table of Contents

- [📗 Table of Contents](#-table-of-contents)
- [About](#about-project)
  - [🛠 Built With](#-built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features) 
  - [💻 Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
    - [Install](#install)
    - [Usage](#usage)
    - [Run linters](#run-linters)
  - [👥 Authors](#authors)
  - [🔭 Future Features](#future-features)
  - [🤝 Contributing](#contributing)
  - [⭐️ Show your support](#️show-your-support)
  - [🙏 Acknowledgments](#acknowledgments)
  - [📝 License](#license)

---

<!-- PROJECT DESCRIPTION -->

# About <a name="about-project"></a>

**"Hello Rails & React"** is an app created with Ruby on Rails to generate Random Greeting messages. A project design to practice the set up of RoR + React as one app using Webpack.

---

<!-- BUILT WITH -->

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Backend</summary>
  <ul>
    <li><a href="https://guides.rubyonrails.org/">Ruby on Rails (v7.0.8)</a></li>
    <li><a href="https://www.postgresql.org/docs/">PostgreSQL</a></li>
  </ul>
</details>

<details>
  <summary>Bundler</summary>
  <ul>
    <li>Webpack</li>
  </ul>
</details>

<details>
  <summary>Front End</summary>
  <ul>
    <li>React</li>
  </ul>
</details>

<details>
  <summary>Linters</summary>
  <ul>
    <li><a href="https://rubocop.org/">Rubocop</a></li>
    <li>Stylelint</li>
  </ul>
</details>

<!-- Features -->

### Key Features <a name="key-features"></a>

- **Generate a Rails proyect**
- **Use Webpack as module bundler**
- **Create an API endpoint that selects a random greeting message**
- **Install React**
- **Install Axios to fetch data**
- **Install Redux toolkit and Router**
- **Generate Greeting Model and Greetings Controller**
- **Generate Routes Api:V1 for endpoint**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:

<ul>
    <li>A code editor (we recommend Visual Studio Code)</li>
    <li>Git and a GitHub account</li>
    <li>Ruby on Rails, you can get it<a href="https://guides.rubyonrails.org/getting_started.html#creating-a-new-rails-project-installing-rails"> here</a></li>
    <li>PostgreSQL, you can get it<a href="https://www.postgresql.org/download/"> here</a></li>
</ul>

### Setup

Clone this repository to your desired folder by using the command:

```sh
git clone https://github.com/HFG43/hello_rails_and_react
```

### Install

Go to the project directory:

```
 cd hello_rails_and_react
```

Before to run the program, run the following command to install the necessary gems:

```sh
 bundle install
```

After installing the gems, run the following command to create and migrate the database:

```sh
 rails db:create
 rails db:migrate
```

### Usage

Run the following command inside the project folder to start the application:

```sh
  ./bin/dev
```

### Run linters

To verify that the ruby code is written without errors and meets good practice standards, run the following command inside the project folder:

- **ruby linter:**

```sh
 rubocop
 npx stylelint "**/*.{css,scss}"
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- AUTHORS -->

## 👥 Author <a name="authors"></a>

👤 **Hernán Güemes**

- GitHub: [@HFG43](https://github.com/HFG43)
- LinkedIn: [hernanguemes](https://www.linkedin.com/in/hernanguemes)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

Upcoming improvements:

- [ ] Add seeds and style

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

If you like this project and know someone who might find it helpful, please share it.
Or give it a **star** ⭐️ if you like this project!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

I thank Microverse for this fantastic opportunity, and the code reviewers for their advice and time.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---