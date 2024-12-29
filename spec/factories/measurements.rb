FactoryBot.define do
  factory :measurement do
    units { Faker::Number.number(digits: 2) }
    date_m { Faker::Date.backward(days: 6) }
    subject_id { nil }
  end
end
