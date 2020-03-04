FactoryBot.define do
  factory :item do
    units { Faker::Number.number(digits: 2) }
    date_m {Faker::Date.backward(days: 14)}
    subject_id {nil}
  end
end