# Learning Tracker APP

> Learning is a process that never ends. Today in the globalized world, studying is a daily matter; even doctors and programmers need to stay up to date, and whether you want to maintain your knowledge or just want to learn a new language, studying is something that you should never stop doing. This app helps you maintain motivation and track your progress every day.

 ![login](https://raw.githubusercontent.com/men32z/learning-tracker-app/development/docs/s1.png)
 ![home dashboard](https://raw.githubusercontent.com/men32z/learning-tracker-app/development/docs/s2.png)
 ![create measurement](https://raw.githubusercontent.com/men32z/learning-tracker-app/development/docs/s3.png)
 ![list measurements](https://raw.githubusercontent.com/men32z/learning-tracker-app/development/docs/s4.png)
 ![edit](https://raw.githubusercontent.com/men32z/learning-tracker-app/development/docs/s5.png)
 ![subscribe subject](https://raw.githubusercontent.com/men32z/learning-tracker-app/development/docs/s7.png)

## This project has these features:
  - You can log in and create an account.
  - Users can subscribe to subjects in order to measure them (and will be able to create subjects in future versions). 
  - The app dashboard showcases subjects, statistics, and goals (future versions will add the ability to modify goals).
  - You can measure the subjects and can list the measurements. 
  - You can edit and delete measurements.

## Built With

- Ruby and Rails
- React
- HTML, SCSS, Postgresql
- Heroku

## Live Demo
### Manual test
you can create an account or you can use these credentials.
```
email: 'test@test.com'
password: '123123'
```

[Live Demo Link](https://men32z-learning-tracker-app.herokuapp.com/)

## Local Install

This project was created with webpack=react flag from rails.

1. Clone the project to your local directory

```
 git clone git@github.com:men32z/learning-tracker-app.git
```

2. Get in to the folder app

```
cd learning-tracker-app
```
3. Prepare rails environment

```
bundle install --without production
rails db:migrate
```

4. run rails server

```
rails s
```

### Usage

Go to Localhost in your favorite browser

```
http://localhost:3000/
```

### Run tests

```
rspec
```

## Author

👤 **Luis Preza**

- Github: [@men32z](https://github.com/men32z)
- Linkedin: [Luis Preza](https://www.linkedin.com/in/men32z/)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/men32z/learning-tracker-app/issues).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Final Capstone Project [Microverse](https://www.microverse.org/)

### Credits

All the design info (color, typography, layouts) was based on the [Bodytrack.it - An iOs app - Branding, UX and UI](https://www.behance.net/gallery/13271423/Bodytrackit-An-iOs-app-Branding-UX-and-UI) Design idea by Gregoire Vella is licensed under [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/)

### 📝 License

MIT.
