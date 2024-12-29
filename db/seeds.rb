# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user = User.create!(name: 'example', email: 'test@test.com', password: '123123', password_confirmation: '123123')

subjects = [
  ['fab html5', 'HTML 5'],
  ['fab react', 'React'],
  ['fab bootstrap', 'Bootstrap'],
  ['fas atlas', 'Spanish'],
  ['fas book-medical',  'Medicine'],
  ['fas chess', 'Chess']
]
subjects.each do |x|
  user.subjects << Subject.create(name: x[1], image: x[0])
end

user.subjects.each do |sbj|
  14.times do
    sbj.measurements.create({
      date_m: Faker::Date.backward(days: 14),
      units: Faker::Number.number(digits: 2),
      user_id: user.id
      })
  end
end

